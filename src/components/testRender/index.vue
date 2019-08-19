<template>
    <div class="test">
        <div class="layer">
            <div class="title">普通图层与新建的复合图层</div>
            <div class="normal wrap">
                <div class="box1" :style="{height: normalWidth}"></div>
                <div class="box2"></div>
                <div class="btn" @click="layerNormal">改变粉盒子.height, 斯达头！</div>
            </div>
            <div class="fuhe wrap">
                <div class="box1" :style="{height: fuheWidth, transform: 'translateZ(0)'}"></div>
                <div class="box2"></div>
                <div class="btn" @click="layerFuhe">改变粉盒子.height, 斯达头！</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            normalWidth: '50px',
            fuheWidth: '50px'
        }
    },
    methods: {
        layerNormal() {
            this.normalWidth = '80px'
        },
        layerFuhe() {
            this.fuheWidth = '80px'
        }
    }
}
</script>
<style>
.title {
    margin-bottom: 10px;
    text-align: center;
}
.wrap {
    position: relative;
    margin-bottom: 10px;
}
.btn {
    position: absolute;
    top: 20px;
    right: 0;
    margin: 10px 0;
    width: 250px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 8px;
    background: yellowgreen;
    cursor: pointer;
}
.box1 {
    width: 50px;
    height: 50px;
    background: pink;
}
.box2 {
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
    background: lightblue;
}
</style>
