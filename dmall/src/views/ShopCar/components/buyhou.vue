<template>
    <div class="J_CartListCont" v-if='shopList.length>0'>
       <div class="buyedPros">
           <h3 class="tapActive">
               <span>
                   <i class='icon icon-checkbox-default'></i>
                   <!-- <input type="checkbox" class="iconcheck"  v-model="checked" @change='checkAll()'> -->
               </span>
               <span class='logo'>
                   <img src="https://img.dmallcdn.com/bizItem/201610/5491eb6a-8a7b-4621-89ad-f22e904b6e7f" alt="">
               </span>
               <span class='address'>多点超市(中关村店)</span>
           </h3>
           <ul class='goods' v-for='(item,ind) in shopList'>
               <div class=" check J_Check">
                   <i class='icon icon-checkbox-default'></i>
                   <!-- <i class='icon icon-checkbox-selected'></i> -->
                   <!-- <input type="checkbox" class="iconcheck"  v-model="checked"> -->
               </div>
               <div class="info">
                   <p>{{item.data.name}}</p>
                   <h3>￥{{(item.data.price/100).toFixed(2)}}</h3>
               </div>
               <div class='act J_Num'>
                   <i class='icon icon-minus-cart J_Minus' @click='add(ind,-1)'></i>
                   <span>{{item.count}}</span>
                   <i class='icon icon-add-cart J_Plus J_ClickTrace' @click='sub(ind,1)'></i>
               </div>
           </ul>
           <div class="total" v-for='(item,ind) in shopList'>
               <!-- ￥{{start+=item.count*(item.data.price/100).toFixed(2)}} -->
           </div>
       </div>
    </div>
</template>


<script>
import { mapState, mapGetters} from 'vuex'
export default {
  name: 'buyhou',
  data () {
    return {
       msg: 'Welcome to Your Vue.js App',
       title:'购物车',
       checked:true,
       start:0
    }
  },
  computed:{
        ...mapState('shoppingCar',[
            'shopList'
        ])
   },
   methods:{
    add (ind,n) {
        this.$store.dispatch('shoppingCar/add',{itemIndex:ind,count:n}) 
    },
    sub (ind, n) {
        this.$store.dispatch('shoppingCar/sub',{itemIndex:ind,count:n}) 
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    /*购物车子组件怎么判断是否登录 
    登录怎么写
    怎么在渲染商品页得到本地储存的数据
    那个首页购物车加价的bug怎么解决的*/
    .icon{
        width: 0.3rem;
        height: 0.3rem;
    }
    .iconcheck{
        width: 0.2rem;
        height: 0.2rem; 
    }
    .icon-checkbox-default{
        background-position: -250px -150px;
    }
    .icon-minus-cart{
        background-position: 0 -400px;
    }
    .icon-add-cart{
        background-position: -150px -150px;
    }
    
    .tapActive{
        display: flex;
        height: 0.4rem;
        span{
            flex:2;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .logo{
            flex:2;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 60%;
                display: block;
            }
        }
        .address{
            flex:9;
        }
    }
    .goods{
        display: flex;
        background: #fff;
        border-bottom: 1px solid #eee;
        padding: 0.06rem 0;
        .J_Check{
            flex:2;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.22rem;
        }
        .info{
            flex:6;
            p{
                line-height: 0.26rem;
                font-size: 0.15rem;
             }
             h3{
                line-height: 0.3rem;
                font-weight: bold;
                font-size: 0.16rem;
            }
        }
        .J_Num{
            flex:4;
            display: flex;
            justify-content: center;
            align-items: center;
            span{
                margin:0 6%;
            }
        }
    }
</style>
