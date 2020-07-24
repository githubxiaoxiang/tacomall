/*
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 15:34:15
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/vue.config.js
 * @Just do what I think it is right
 */
module.exports = {
    devServer: {
        proxy: {
            '/admin': {
                target: 'http://localhost:4001',
                ws: false,
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .test(/\.vue$/)
            .use('iview-loader')
            .loader('iview-loader')
            .options({
                prefix: true
            })
    }
}
