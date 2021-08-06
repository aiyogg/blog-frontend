<template>
    <div class="index-bottom-info text-center text-overflow">
        <p><i class="fa fa-copyright"></i><span> 2015-{{currYear}} All Rights Reserved.</span><span class="hidden-xs">Designed by Chuck. <a target="_blank" href="https://beian.miit.gov.cn/">鄂ICP备17000298号-2</a>.</span></p>
    </div>
</template>
<style scoped lang="scss">
    .index-bottom-info {
        user-select: none;
        -webkit-user-select: none;
        position: relative;
        width: auto;
        color: #eee;
        font-size: 12px;
        p {
            overflow: hidden;
            a {
                color: inherit;
            }
        }
    }
</style>
<script>
  export default {
    data () {
      return  {
        currYear: new Date().getFullYear()        
      }
    }
  }
</script>
