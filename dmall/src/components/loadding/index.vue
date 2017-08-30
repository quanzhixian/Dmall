<template>
    <div class="loading" v-if='loaddingShow'>
        <div class="car"></div>
    </div>
</template>

<script>
import $ from 'zepto'
export default {
  name: 'Loadding',
  props:['loaddingShow'],
  data () {
    return {
      timer:''
    }
  },
  methods:{
    loadding:function (index) {
        $(this.$el).find('.car').css({
            'background-position-x':-index*64
        })
    },
   playloadding:function () {
        var that = this;
        var index = 0;
        this.timer = setInterval(()=>{
            that.loadding(index);
            index++;
            index=index>20? 0:index
        }, 1000/30) 
     }
  },
  watch: {
    "loaddingShow": function (val) {
        if(val) {
            this.playloadding()
        }else{
            clearInterval(this.timer)
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .loading{
        position: fixed;
        top: 0;
        left:0;
        right: 0;
        bottom: 0;
        z-index: 999;
        background: rgba(255,255,255,0.7);
        display: -webkit-box;
        -webkit-box-align:center;
        -webkit-box-pack:center;
        .car{
            width: 64px;
            height: 64px;
            /*background-image: url('@/static/images/icon/loadding.png');*/
            background-image: url('https://img.dmall.com/common/2add440a-12a9-40c1-b9a3-bad9dea816db');
            background-size: 1152px 64px;
        }
    }
</style>
