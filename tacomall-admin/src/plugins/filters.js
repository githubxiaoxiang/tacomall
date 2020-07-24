import Vue from 'vue'
import dayjs from 'dayjs'

Vue.mixin({
    filters: {
        timeFormat(d, f = 'YYYY-MM-DD HH:mm') {
            if (!d) {
                return '2019-01-01 00:00'
            }
            return dayjs(d).format(f)
        }
    }
})
