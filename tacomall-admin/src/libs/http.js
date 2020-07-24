/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 17:29:06
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/src/libs/http.js
 * @Just do what I think it is right
 */
import axios from 'axios'
import { appConfig } from '@/config/app'
import { session } from './session'
import {router} from '@/router'

class Http {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.queue = {}
    }

    getInsideConfig() {
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            baseURL: this.baseUrl,
            method: 'post'
        }
        return config
    }

    destroy(url) {
        delete this.queue[url]
    }

    interceptors(instance, url) {
        instance.interceptors.request.use(config => {
            if (session.get()) {
                config.headers[appConfig.tokenKey] = session.get()
            }
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })
        instance.interceptors.response.use(res => {
            if (res.headers[appConfig.token]) {
                session.set(res.headers[appConfig.token])
            }
            if (res.data.code === 2101) {
                session.clear()
                router.replace({path: '/login'})
            }
            this.destroy(url)
            const { data } = res
            return data
        }, error => {
            this.destroy(url)
            return Promise.reject(error)
        })
    }

    request(options) {
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

const baseUrl = process.env.NODE_ENV === 'development' ? appConfig.baseUrl.dev : appConfig.baseUrl.prod

export const http = new Http(baseUrl)
