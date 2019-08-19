<template>
  <div id="app">
    <!-- <turntable
      :stop-index = "stopIndex"
      :rewards = "rewards"
      @start = "start">
    </turntable> -->
    <!-- <test-render /> -->
    <comment
      v-for="(item, key) in commentsList"
      :key="key"
      :reply="item.reply"
      :comment="item"
      :deep="0"
    />
  </div>
</template>

<script>
// import turntable from './components/turntable/index'
// import testRender from './components/testRender/index'
import comment from './components/commentTree/index'
export default {
  name: 'App',
  components: {
    comment
    // turntable
    // testRender
  },
  data() {
    return {
      commentsList: [
          {
              cuid: '小瓦',
              info: '啊啊啊超漂亮',
              reply:[
                  {
                      cuid: '小计',
                      info: '对呀对呀对啊',
                      reply: [
                          {
                              cuid: '小红',
                              info: '英雄所见略同',
                              reviewer: '小计',
                              reply: []
                          }
                      ]
                  }
              ]
          },
          {
              cuid: '小当',
              info: '想吃雪糕啊啊啊啊',
              reply: [
                  {
                      cuid: '小东',
                      info: '我也想我也想',
                      reply: []
                  }
              ]
          }
      ],
      stopIndex: -1,
      rewards: [
        require('./assets/imgs/turntable/award-1.png'),
        require('./assets/imgs/turntable/award-2.png'),
        require('./assets/imgs/turntable/award-1.png'),
        require('./assets/imgs/turntable/award-2.png'),
        require('./assets/imgs/turntable/bg-start.png'),
        require('./assets/imgs/turntable/award-1.png'),
        require('./assets/imgs/turntable/award-2.png'),
        require('./assets/imgs/turntable/award-1.png'),
        require('./assets/imgs/turntable/award-2.png')
      ]
    }
  },
  methods: {
    start() {
      setTimeout(() => {
        this.stopIndex = Math.floor(Math.random() * 8);
      }, 100)
    }
  }
}
</script>
<style>
html, body, ul {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
</style>
