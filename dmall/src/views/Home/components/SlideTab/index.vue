<template>
    <div class="slide-tab">
        <nav class="tab-menu"  v-Affix='0'>
            <a href="javascript:;" v-for="(item,index) in menuList" @click="slideTo(index)">
                <span>{{item.name}}</span>
                <img :src="item.icon" />
            </a>
        </nav>
        <b class="active-line"></b>
        <div class="tab-content">
            <div class="slide-content">
                <div class="slide-item" v-for="item in menuList">
                    <slot :name="item.component"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'zepto'

export default {
  name: 'SlideTab',
  props: {
    'menuList': {
        default: []
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {

    slideTo: function(index){
        let slideContent = $( this.$el ).find(".slide-content");
        let slideLeft = (-index*100) + "%";
        let slideLine = $( this.$el ).find(".active-line");
        slideContent.animate({
            translateX: slideLeft
        },500,"ease")

        slideLine.animate({
            left: index*56 + (20*(index*2+1))
        },500,"ease")
    }
  },
  mounted () {
    this.slideTo(0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.slide-tab{
    width:100%;
    position:relative;
    .tab-menu{
        width:100%;
        display:-webkit-box;
        height:0.44rem;
        background:#fff;
        a{
            display:block;
            line-height:0.5rem;
            position:relative;
            margin:0 0.2rem;
            img{
                position:absolute;
                width:0.4rem;
                top:0;
                right:0;
            }
        }
    }
    .active-line{
        height:0.02rem;
        width:0.56rem;
        background:#ff8143;
        position:absolute;
        top:0.42rem;
        left:0.2rem;
    }
    .tab-content{
        width:100%;
        overflow:hidden;
        .slide-content{
            width:100%;
            display:-webkit-box;
            .slide-item{
                width:100%;
            }
        }
    }
}
</style>
