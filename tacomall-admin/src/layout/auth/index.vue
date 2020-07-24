<template>
    <div class="auth">
        <div class="a-left">
            <div class="l-logo">
                <img src="/image/logo-light.png" alt />
            </div>
            <div class="s-menu">
                <i-menu theme="dark" active-name="1" width="100%">
                    <i-menu-group title="首页"></i-menu-group>
                    <i-menu-group :title="item.name" :key="key" v-for="(item, key) in menu">
                        <i-menu-item
                            :name="item1.name"
                            :key="key1"
                            @click.native="go(item1.path)"
                            v-for="(item1, key1) in item.list"
                        >
                            <span>{{item1.meta.title}}</span>
                        </i-menu-item>
                    </i-menu-group>
                </i-menu>
            </div>
        </div>
        <div class="a-right">
            <div class="r-header">
                <div class="h-left">
                    <div class="l-btn">
                        <div class="b-item">
                            <i class="iconfont">&#xe77c;</i>
                        </div>
                        <div class="b-item">
                            <i class="iconfont">&#xe63c;</i>
                        </div>
                    </div>
                    <div class="l-path">
                        <span>首页</span>
                        <span>详情页面</span>
                        <span>基础详情页面</span>
                    </div>
                </div>
                <div class="h-right">
                    <div class="r-search">
                        <input type="text" placeholder="搜索页面信息" />
                        <i class="iconfont">&#xe623;</i>
                    </div>
                    <div class="r-btn">
                        <div class="b-item">
                            <i class="iconfont">&#xe629;</i>
                        </div>
                        <div class="b-item">
                            <i class="iconfont">&#xe603;</i>
                        </div>
                        <div class="b-item">
                            <i class="iconfont">&#xe794;</i>
                        </div>
                        <div class="b-item">
                            <img
                                src="https://avatar.gitee.com/uploads/19/4941219_is-kyeteo.png"
                                alt
                            />
                            <span>码上talk|RC</span>
                        </div>
                        <div class="b-item">
                            <i class="iconfont">&#xe7eb;</i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="r-history">
                <div class="h-left">
                    <div class="l-item">
                        <i-tag closable size="medium">标签二</i-tag>
                    </div>
                </div>
                <div class="h-right">
                    <i class="iconfont">&#xe61a;</i>
                </div>
            </div>
            <div class="r-main">
                <router-view></router-view>
            </div>
            <div class="r-footer">
                <div class="f-link">
                    <a href="/">官网</a>
                    <a href="/">社区</a>
                    <a href="/">专业版</a>
                </div>
                <div class="f-copyright">
                    <span>Copyright © 2019 码上talk</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['menu'])
    }
}
</script>

<style lang="less">
.auth {
    .a-left {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 256px;
        background: #515a6e;
        box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);

        .l-logo {
            width: 100%;
            height: 65px;
            box-sizing: border-box;
            border-bottom: 1px solid #363e4f;

            img {
                width: 100%;
            }
        }
    }

    .a-right {
        margin-left: 256px;
        min-height: 100vh;

        .r-header {
            position: fixed;
            top: 0;
            right: 0;
            width: calc(100% - 256px);
            display: flex;
            justify-content: space-between;
            height: 64px;
            background: white;
            box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
            z-index: 10;

            .h-left {
                display: flex;

                .l-btn {
                    display: flex;

                    .b-item {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 42px;

                        i {
                            font-size: 20px;
                        }
                    }
                }

                .l-path {
                    display: flex;
                    align-items: center;

                    span {
                        position: relative;
                        padding-left: 20px;

                        &:not(:first-child) {
                            &:before {
                                position: absolute;
                                left: 10px;
                                content: "/";
                            }
                        }
                    }
                }
            }

            .h-right {
                display: flex;
                align-items: center;

                .r-search {
                    display: flex;
                    align-items: center;
                    height: 30px;
                    padding: 0 10px;
                    background: #f7f7f7;

                    input {
                        border: none;
                        background: #f7f7f7;
                        outline: none;
                    }

                    i {
                        font-size: 20px;
                    }
                }

                .r-btn {
                    display: flex;

                    .b-item {
                        display: flex;
                        align-items: center;
                        height: 64px;
                        padding: 0 10px;

                        i {
                            font-size: 20px;
                        }

                        img {
                            width: 40px;
                            height: 40px;
                            border-radius: 20px;
                        }

                        span {
                            padding-left: 10px;
                        }
                    }
                }
            }
        }

        .r-history {
            position: fixed;
            top: 64px;
            right: 0;
            width: calc(100% - 256px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 44px;
            padding: 0 24px;
            z-index: 10;

            .h-right {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                border-radius: 5px;
                background: white;
            }
        }

        .r-main {
            padding-top: 110px;
            margin: 0 24px;
        }

        .r-footer {
            padding: 48px 0 24px 0;

            .f-link {
                display: flex;
                align-items: center;
                justify-content: center;

                a {
                    color: #515a6e;

                    &:not(:first-child) {
                        padding-left: 30px;
                    }
                }
            }

            .f-copyright {
                display: flex;
                justify-content: center;
                padding-top: 10px;
            }
        }
    }
}
</style>
