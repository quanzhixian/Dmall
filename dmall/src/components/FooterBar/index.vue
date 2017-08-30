<template>
  <footer class="footer-bar">
    <nav>
        <router-link to='/home' active-class="active" class='home'><i class='icon'></i>首页</router-link>
        <router-link to='/classType'  active-class="active" class='ClassType'><i class='icon'></i>分类</router-link>
        <router-link to='/shopCar' active-class="active"  class='ShopCar'><i class='icon'></i>购物车<span class='count'>{{shoppCount}}</span></router-link>
        <router-link to='/zoom'  active-class="active" class='Zoom'><i class='icon'></i>我的</router-link>
    </nav>
  </footer>
</template>



<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState, mapGetters} from 'vuex'
export default {
  name: 'FooterBar',
  // computed: {
  //   count () {
  //     return this.$store.state.count;//通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到。让我们更新下 Counter 的实现：
  //   }
  // }
  // computed:mapState({
  //   count:state=>state.count
  // })相当于上面的computed  但前提得import { mapState } from 'vuex'
    computed:{
        ...mapGetters('shoppingCar',[
            'shoppCount'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .footer-bar{
        width: 100%;
        height: 0.48rem;
        background: #eee;
        position: fixed;
        bottom: 0;
        nav{
            display: flex;
            height: 100%;
            a{
                flex:1;
                height: 100%;
                display:flex;
                flex-direction:column;
                align-items: center;
                width: 0;
                &.active{
                    color: #ff712b;
                }
                i{
                    width:0.3rem;
                    height:0.3rem;
                    display:block;
                    background-image:url("../../static/images/icon/btm-bar-sprt.png");
                    background-size:2.5rem 1rem;
                    margin:0 auto;
                    margin-bottom:0.04rem;
                }
                &.home{
                    i{ background-position: 0 0; }
                    &.active{
                       i{ background-position: 0 -50px; }
                    }
                }
                &.ClassType{
                    i{ background-position: -50px 0; }
                    &.active{
                       i{ background-position: -50px -50px; }
                    }
                }
                &.ShopCar{
                    i{ background-position: -100px 0; }
                    &.active{
                       i{ background-position: -100px -50px; }
                    }
                }
                &.Zoom{
                    i{ background-position: -150px 0; }
                    &.active{
                       i{ background-position: -150px -50px; }
                    }
                }
            }
        }
        .ShopCar{
          position: relative;
        }
        .count{
          position: absolute;
          top: 0;
          right: 0.15rem;
          display: inline-block;
          width: 0.2rem;
          height: 0.2rem;
          background: red;
          color: #fff;
          line-height: 0.2rem;
          font-size: 0.1rem;
          text-align: center;
          border-radius: 50%;
        }
    }
</style>
