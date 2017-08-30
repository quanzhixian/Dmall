<template>
    <div class="J_CartListCont" v-if='shopList.length==0'>
        <div class="car">
            <img src="http://img.dmall.com/common/31fd8440-0a94-4aba-a239-6b77e13f9824" alt="">
            <span>购物车还木有商品？</span>
        </div>
        <div class='button'>
            <router-link to='/home'>我要买买买</router-link>
        </div>
    </div>
</template>


<script>
import { mapState, mapGetters} from 'vuex'
export default {
  name: 'buyqian',
  data () {
    return {
       msg: 'Welcome to Your Vue.js App',
       title:'购物车'
    }
  },
  computed:{
        ...mapState('shoppingCar',[
            'shopList'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.J_CartListCont{
        width: 100%;
        .car{
            width: 100%;
            display: flex;
            
            flex-direction:column;
            justify-content: center;
            span{
                display: inline;
                padding-left: 35%;
                color: #999;
            }
        }
        img{
            margin: 0 auto;
            width: 30%;
            display: block;
            margin-top: 20%;
        }
        .button{
                margin-top: 0.2rem;
                a{
                   height: 44px;
                    line-height: 44px;
                    background: #ff712b;
                    color: #fff;
                    border-radius: 4px;
                    border: none;
                    font-size: 14px;
                    padding: 0.1rem 0.2rem;
                    margin-left: 38%; 
                }
                
        }
        
    }
   
</style>
