<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'app',
        methods: {
            ...mapActions(['appInit'])
        },
        created() {
            this.appInit()
        }
    }
</script>

<style>
    #app {
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
        line-height: 1.5;
        background: #f7f7f7;
        color: #515a6e;
    }
</style>
