/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 17:22:21
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/src/store/index.js
 * @Just do what I think it is right
 */
import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'

import { session } from '@/libs/session'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        user
    },
    state: {
        isLogin: false,
        menu: []
    },
    mutations: {
        setIsLogin(state, b) {
            state.isLogin = b
        },
        setMenu(state, a) {
            state.menu = a
        }
    },
    actions: {
        appInit({ dispatch }) {
            session.get() && dispatch('user/getUserInfo')
        }
    }
})
