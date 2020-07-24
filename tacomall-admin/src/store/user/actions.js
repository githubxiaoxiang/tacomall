/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 18:03:27
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/src/store/user/actions.js
 * @Just do what I think it is right
 */
import * as types from './mutation-types'
import api from '@/api'
import { session } from '@/libs/session'
import { router } from '@/router'
import { dynamicRoutes } from '@/router/routes/dynamic'
import { menuUtil } from '@/utils/menuUtil'

export const actions = {
    getUserInfo({ commit }) {
        return new Promise((resolve) => {
            api.user.info().then(res => {
                if (res.status) {
                    const rule = res.data.rule
                    let routes = [
                        {
                            name: "/auth",
                            path: "/auth",
                            component: () => import('@/layout/auth/index'),
                            children: []
                        }
                    ]
                    commit(types.SET_PROFILE, res.data)
                    commit('setIsLogin', true, { root: true })
                    for (let i = 0; i < rule.length; i++) {
                        for (let j = 0; j < rule[i].view.length; j++) {
                            for (let k = 0; k < dynamicRoutes.length; k++) {
                                if (dynamicRoutes[k].name === '/auth') {
                                    for (let l = 0; l < dynamicRoutes[k].children.length; l++) {
                                        if (dynamicRoutes[k].children[l].path === rule[i].view[j].path) {
                                            routes[0].children.push(dynamicRoutes[k].children[l])
                                            break
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    router.addRoutes(routes)
                    commit('setMenu', menuUtil.genMenuByRoutes(routes[0].children), { root: true })
                    resolve()
                }
            })
        })
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            api.user.info().then(res => {
                if (res.status) {
                    session.exit()
                    commit(types.SET_PROFILE, {})
                    commit('setIsLogin', false, { root: true })
                    resolve()
                }
            })
        })
    }
}
