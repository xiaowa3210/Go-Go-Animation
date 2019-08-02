<template>
  <div id="app">
    <turntable
      :stop-index = "stopIndex"
      :rewards = "rewards"
      @start = "start">
    </turntable>
  </div>
</template>

<script>
import turntable from './components/turntable/index'

export default {
  name: 'App',
  components: {
    turntable
  },
  data() {
    return {
      stopIndex: -1, // 0-7
      rewards: [
        require('./assets/imgs/award-1.png'),
        require('./assets/imgs/award-2.png'),
        require('./assets/imgs/award-1.png'),
        require('./assets/imgs/award-2.png'),
        require('./assets/imgs/bg-start.png'),
        require('./assets/imgs/award-1.png'),
        require('./assets/imgs/award-2.png'),
        require('./assets/imgs/award-1.png'),
        require('./assets/imgs/award-2.png')
      ]
    }
  },
  methods: {
    start() {
      setTimeout(() => {
        this.stopIndex = ~~(Math.random() * 8);
      }, 3000)
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
