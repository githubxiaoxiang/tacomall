<template>
    <div class="login">
        <div class="l-box">
            <div class="b-logo">
                <img src="/image/logo-dark.png" alt />
                <span>iView Admin Pro 企业级中台前端/设计解决方案</span>
            </div>
            <div class="b-input">
                <div class="i-item">
                    <i-input
                        prefix="ios-contact"
                        size="large"
                        placeholder="请输入账号"
                        style="width: 100%;height: 40px;"
                        v-model="form.username"
                    />
                </div>
                <div class="i-item">
                    <i-input
                        prefix="ios-contact"
                        size="large"
                        placeholder="请输入密码"
                        style="width: 100%;height: 40px;"
                        v-model="form.passwd"
                    />
                </div>
            </div>
            <div class="b-help">
                <div class="h-left">
                    <i-checkbox v-model="autoLogin">自动登录</i-checkbox>
                </div>
                <div class="h-right">
                    <span>忘记密码</span>
                </div>
            </div>
            <div class="b-btn">
                <i-button type="primary" size="large" long @click.native="doLogin">登录</i-button>
            </div>
            <div class="b-footer">
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
import api from '@/api'
import { session } from '@/libs/session'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            autoLogin: true,
            form: {
                username: '',
                passwd: ''
            }
        }
    },
    methods: {
        ...mapActions('user', ['getUserInfo']),
        async doLogin() {
            const res = await api.user.login(this.form)
            if (res.status) {
                session.set(res.data)
                this.getUserInfo().then(() => {
                    this.rep('/index')
                })
            }
        }
    }
};
</script>
<style lang="less">
.login {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background: url(/image/login.png) center no-repeat;
    background-size: 100% auto;

    .l-box {
        width: 384px;
        height: 100vh;
        box-sizing: border-box;
        padding: 32px 0;
        margin: 0 auto;

        .b-logo {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 40px;

            img {
                width: 300px;
                height: 75px;
            }

            span {
                padding-top: 10px;
            }
        }

        .b-input {
            padding: 20px 0;

            .i-item {
                &:not(:first-child) {
                    padding-top: 20px;
                }
            }
        }
        .b-help {
            display: flex;
            justify-content: space-between;
        }
        .b-btn {
            padding-top: 32px;
        }
        .b-footer {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
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
