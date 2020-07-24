<!--
 * @Author: 码上talk|RC
 * @Date: 2020-06-09 23:23:29
 * @LastEditTime: 2020-07-02 17:42:53
 * @LastEditors: 码上talk|RC
 * @Description: 
 * @FilePath: /tacomall-admin/src/pages/index/index.vue
 * @Just do what I think it is right
--> 
<template>
    <div class="index">
        <div class="i-statistics">
            <div class="s-item">
                <div class="i-header">
                    <div class="h-left">
                        <span>日访问量</span>
                    </div>
                </div>
                <div class="i-main">
                    <div class="m-count">
                        <span>25,754</span>
                    </div>
                    <div class="m-extra"></div>
                </div>
                <div class="i-footer">
                    <div class="f-left">
                        <span>总访问量</span>
                    </div>
                    <div class="f-right">
                        <span>247万</span>
                    </div>
                </div>
            </div>
            <div class="s-item">
                <div class="i-header">
                    <div class="h-left">
                        <span>日访问量</span>
                    </div>
                </div>
                <div class="i-main">
                    <div class="m-count">
                        <span>25,754</span>
                    </div>
                    <div class="m-extra"></div>
                </div>
                <div class="i-footer">
                    <div class="f-left">
                        <span>总访问量</span>
                    </div>
                    <div class="f-right">
                        <span>247万</span>
                    </div>
                </div>
            </div>
            <div class="s-item">
                <div class="i-header">
                    <div class="h-left">
                        <span>日访问量</span>
                    </div>
                </div>
                <div class="i-main">
                    <div class="m-count">
                        <span>25,754</span>
                    </div>
                    <div class="m-extra"></div>
                </div>
                <div class="i-footer">
                    <div class="f-left">
                        <span>总访问量</span>
                    </div>
                    <div class="f-right">
                        <span>247万</span>
                    </div>
                </div>
            </div>
            <div class="s-item">
                <div class="i-header">
                    <div class="h-left">
                        <span>日访问量</span>
                    </div>
                </div>
                <div class="i-main">
                    <div class="m-count">
                        <span>25,754</span>
                    </div>
                    <div class="m-extra"></div>
                </div>
                <div class="i-footer">
                    <div class="f-left">
                        <span>总访问量</span>
                    </div>
                    <div class="f-right">
                        <span>247万</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="i-portal">
            <div class="p-item">
                <i class="iconfont"></i>
                <span>用户</span>
            </div>
            <div class="p-item">
                <i class="iconfont"></i>
                <span>分析</span>
            </div>
            <div class="p-item">
                <i class="iconfont"></i>
                <span>商品</span>
            </div>
            <div class="p-item">
                <i class="iconfont"></i>
                <span>订单</span>
            </div>
            <div class="p-item">
                <i class="iconfont"></i>
                <span>票据</span>
            </div>
            <div class="p-item">
                <i class="iconfont"></i>
                <span>消息</span>
            </div>
            <div class="p-item">
                <i class="iconfont"></i>
                <span>标签</span>
            </div>
            <div class="p-item">
                <i class="iconfont"></i>
                <span>配置</span>
            </div>
        </div>
    </div>
</template>

<style lang="less">
.index {
    .i-statistics {
        display: flex;

        .s-item {
            flex: 1;
            padding: 14px;
            background: white;

            .i-header {
                display: flex;
                justify-content: space-between;
                padding-bottom: 14px;
                border-bottom: 1px solid #e8eaec;
            }

            .i-main {
                height: 100px;
            }

            .i-footer {
                display: flex;
                justify-content: space-between;
                padding-top: 14px;
                border-top: 1px solid #e8eaec;
            }

            &:not(:first-child) {
                margin-left: 24px;
            }
        }
    }
    .i-portal {
        display: flex;
        padding: 24px 0;
        .p-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            height: 90px;
            background: white;
            &:not(:first-child) {
                margin-left: 24px;
            }
        }
    }
}
</style>
