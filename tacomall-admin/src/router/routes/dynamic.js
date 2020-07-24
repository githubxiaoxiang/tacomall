/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 17:56:57
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/src/router/routes/dynamic.js
 * @Just do what I think it is right
 */
export const dynamicRoutes = [
    {
        name: "/auth",
        path: "/auth",
        component: () => import('@/layout/auth/index'),
        children: [
            {
                name: "/goods-list",
                path: "/goods-list",
                meta: {
                    pid: 'goods',
                    pName: '商品',
                    isMenu: true,
                    title: '商品列表',
                    requiresAuth: true
                },
                component: () => import('@/pages/goods-list/index')
            }
        ]
    }
]
