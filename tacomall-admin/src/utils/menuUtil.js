/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 17:20:40
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/src/utils/menuUtil.js
 * @Just do what I think it is right
 */
export const menuUtil = {
    genMenuByRoutes: (routes) => {
        let menu = []
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].meta && routes[i].meta.isMenu) {
                let menuK = menu.map(i => {
                    return i.pid
                })
                if (!menuK.includes(routes[i].meta.pid)) {
                    menu.push({
                        pid: routes[i].meta.pid,
                        name: routes[i].meta.pName,
                        list: [routes[i]]
                    })
                    continue
                }
                menu[menuK.indexOf(routes[i].meta.pid)].list.push(routes[i])
            }
        }
        return menu
    }
}
