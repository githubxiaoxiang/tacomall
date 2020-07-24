/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 17:56:06
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/src/router/routes/init.js
 * @Just do what I think it is right
 */
export const initRoutes = [
    {
        name: "/default",
        path: "/default",
        component: () => import('@/layout/default/index'),
        children: [
            {
                name: "/login",
                path: "/login",
                meta: {
                    isMenu: false,
                    title: '登录',
                    requiresAuth: false
                },
                component: () => import('@/pages/login/index')
            },
            {
                name: "/404",
                path: "/404",
                meta: {
                    isMenu: false,
                    title: '404',
                    requiresAuth: false
                },
                component: () => import('@/pages/404/index')
            }
        ]
    },
    {
        name: "/auth",
        path: "/auth",
        component: () => import('@/layout/auth/index'),
        children: [
            {
                name: "/index",
                path: "/index",
                meta: {
                    isMenu: false,
                    title: '首页',
                    requiresAuth: true
                },
                component: () => import('@/pages/index/index')
            },
        ]
    }
]
