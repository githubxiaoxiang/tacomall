/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 17:55:16
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/src/meddleware/beforeEach.js
 * @Just do what I think it is right
 */ 
import {router} from '@/router'
import {session} from '@/libs/session'

router.beforeEach((to, from, next) => {
    if (!to.matched.length && to.path !== '/404') {
        next({path: '/404', query: {redirect: to.fullPath}})
        return
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!session.get()) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
