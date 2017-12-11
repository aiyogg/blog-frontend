<template>
  <div class="total" @click="clickPos">
    <span :style="progress" class="progress"></span>
  </div>
</template>
<style scoped lang="scss">
  @import "../theme/theme.scss";

  .total {
    width: 100%;
    height: 3px;
    background-color: rgba(0, 0, 0, .6);
    cursor: pointer;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }

  .total .progress {
    display: block;
    width: 0;
    height: 100%;
    background-color: #42b983;
    -webkit-transition: width .3s ease;
    -moz-transition: width .3s ease;
    transition: width .3s ease;
  }
</style>
<script>
  export default {
    name: 'progressbar',
    data: function () {
      return {
        progress: {}
      }
    },
    methods: {
      throttle (fn, interval = 100) { // 节流
        var timer = null
        return function (...args) {
          if (!timer) {
            timer = setTimeout(() => {
              clearTimeout(timer)
              timer = null
            }, interval)
            return fn.apply(this, args)
          }
        }
      },
      calcPercent () {
        var docHeight = document.documentElement.scrollHeight // 页面总高度
        var clintHeight = document.documentElement.clientHeight // 视窗高度
        var scrollHeight = document.documentElement.scrollTop // 页面已滚动的高度
        var percent = (scrollHeight / (docHeight - clintHeight) * 100).toFixed(2) + '%'
        this.progress = {width: percent}
      },
      clickPos (ev) {
        var docHeight = document.documentElement.scrollHeight // 页面总高度
        var clintWidth = document.documentElement.clientWidth // 视窗宽度
        var clintHeight = document.documentElement.clientHeight // 视窗高度
        var targetPercent = ev.x / clintWidth
        console.log(docHeight, targetPercent, clintHeight)
        document.documentElement.scrollTop = (docHeight - clintHeight) * targetPercent
      }
    },
    mounted: function () {
      var self = this
      document.addEventListener('scroll', this.throttle(function () {
        self.calcPercent()
      }, 10))
    }
  }
</script>
