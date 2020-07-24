/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 17:04:35
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/src/store/user/mutations.js
 * @Just do what I think it is right
 */ 
import * as types from './mutation-types'

export const mutations = {
    [types.SET_PROFILE](state, o) {
        state.info = o
    }
}
