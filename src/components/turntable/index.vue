<template>
    <div class="turntable">
        <ul class="rewards-list">
            <li v-for = "(item, index) in rewards"
                :key = "index"
                :class = "['list-item', 'item-' + index, isActive === index ? 'active' : '']"
                :style="itemStyle(item, index)">
            </li>
            <li class="list-item start-btn" @click="start"></li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['stopIndex', 'rewards'],
    data() {
        return {
            isActive: 0,
            started: false,
            isRunning: false,
            startIndex: 0,
            to: -1,
            timer: null
        }
    },
    watch: {
        stopIndex: function(newval, oldval) {
            if(newval >= 4) {
                this.to = newval + 1
            }else {
                this.to = newval
            }
        }
    },
    // computed: {
    //     to: function() {
    //         if(this.stopIndex >= 4) {
    //             return this.stopIndex + 1
    //         }
    //         return this.stopIndex
    //     }
    // },
    methods: {
        itemStyle(src, idx) {
            let style = `background: url(${src}) center / cover no-repeat`
            if(idx === 4) {
                let duration = this.started ? 0.1 : 1.0
                style = `background: url(${src}) center / cover no-repeat;
                         animation: breathe ${duration}s 0s linear alternate infinite`
            }
            return style
        },
        start() {
            if (this.isRunning) {
                return
            }
            this.$emit('start')
            this.animate(this.startIndex)
        },
        animate() {
            this.running()
            let indexArr = [0, 1, 2, 5, 8, 7, 6, 3]
            let i = this.startIndex
            let speed = 300
            const fn = () => {
                if(i >= (16 + this.startIndex) && (indexArr[i % 8] === this.to)) {
                    this.isActive = this.to
                    this.startIndex = i % 8
                    this.reset()
                    return
                }
                this.isActive = indexArr[i % 8]
                i++
            }
            this.timer = setInterval(fn, speed)
        },
        running() {
            this.isRunning = true
        },
        reset() {
            clearInterval(this.timer)
            this.isRunning = false
        }
    }
}
</script>
<style>
.turntable {
    position: relative;
}
.rewards-list {
    display: flex;
    flex-wrap: wrap;
}
.list-item {
    box-sizing: border-box;
    width: 33%;
    padding-top: 33%;
}
.list-item.active {
    border: 2px solid lightseagreen;
}
@keyframes breathe {
    from {
        transform: scale(1, 1)
    }
    to {
        transform: scale(1.1, 1.1)
    }
}
.start-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
