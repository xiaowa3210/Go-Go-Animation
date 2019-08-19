class Like {
    constructor(top, left, count=20, min, max, speed=2, interval=150) {
        this.top = top,
        this.left = left,
        this.min = min,
        this.max = max,
        this.start = 0;
        this.count = count,
        this.speed = speed,
        this.interval = interval,
        this.colorArr = ['pink', 'yellow', 'purple', 'lightgreen', 'yellowgreen', 'lightblue'],
        this.timer = null,
        this.wrap = null,
        this.init()
    }

    /**
     * 创建count个div小球，设置位置、类名，随机大小、颜色
     */
    init() {
        this.initWrap()
        this.initDOM()
        this.after()
    }

    initWrap() {
        this.wrap = document.createElement('div')
        let wrapStyle = `
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 100;
            overflow: hide
        `
        this.wrap.style.cssText = wrapStyle
        document.body.appendChild(this.wrap)
    }

    initDOM() {
        let createDOM = () => {
            if(this.start >= this.count) {
                clearInterval(this.timer)
                return
            }
            this.start++

            let item = document.createElement('div')
            let size = ~~(Math.random() * (this.max - this.min) + this.min)
            let itemStyle = `
                position: absolute;
                top: ${this.top};
                left: ${this.left};
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background-color: ${this.colorArr[~~(Math.random() * 6)]};
                -webkit-transition: all ${this.speed}s linear 0s
            `
            item.style.cssText = itemStyle
            this.wrap.appendChild(item).focus()

            let position = this.randomPosition(600)
            let dx = -position.dx
            let dy = position.dy

            item.style.opacity = 0
            item.style.transform = `translate(${dx}px, ${dy}px)`
        }
        this.timer = setInterval(createDOM, this.interval)
    }

    randomPosition(raduis) {
        const deg = Math.random() * 2 * Math.PI;
        return {
            dx: raduis * Math.cos(deg),
            dy: raduis * Math.sin(deg)
        };
    }

    after() {
        setTimeout(() => {
            this.wrap.remove()
        }, this.speed + 1000 + this.count * this.interval)
    }
}

export default Like