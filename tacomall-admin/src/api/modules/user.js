/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 17:00:01
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/src/api/modules/user.js
 * @Just do what I think it is right
 */
import { http } from '@/libs/http'
import qs from 'qs'

export const user = {
    login: (data = {}) => {
        return http.request({
            url: '/admin/user/login',
            data: qs.stringify(data)
        })
    },
    info: (data = {}) => {
        return http.request({
            url: '/admin/user/info',
            data: qs.stringify(data)
        })
    },
    logout: (data = {}) => {
        return http.request({
            url: '/admin/user/logout',
            data: qs.stringify(data)
        })
    }
}
