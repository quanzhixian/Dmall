<template>
    <div class="super-content">
        <section class="swiper-banner">
             <swiper :options="swiperOption" ref="mySwiper">
                <swiper-slide v-for='item in superList.bannerlist'>
                    <img :src="item.imageUrl" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
              </swiper>
        </section>
        <section class="swiper-menu">
            <a :href="item.resource" v-for='item in superList.menulist'>
                <img :src="item.imageUrl" alt="">
                <span>{{item.data.title}}</span>
            </a>
        </section>
        <ImgShow></ImgShow>

        <section class='products' v-for='item in superList.productlist'>
            <div v-if='item.displayType==146' class="banner">
                <div  v-for='i in item.dataList'>
                    <img :src="i.imageUrl" alt="">
                </div>
            </div>
            <div v-else='item.displayType==128' class="mould-ClickTrace">
                <div v-for='i in item.dataList' class="pros">
                    <div class="dl">
                        <router-link :to="'/detail/'+i.spId" class='dt'>
                            <img :src="i.imageUrl" alt="" >
                         </router-link>   
                        <div class="dd">
                            <p>{{i.data.name}}</p>
                            <div class="price">
                                <div class="Price-bar">
                                    <span class="worldoriginal">￥2.00</span>
                                    <span class='promo-price'>#0.99</span>
                                </div>
                                <div class="add-cart-bar" @click='addCarItem(i)'>+</div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    </div>
</template>


<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ImgShow from '../imgshow/imgshow'
import { mapMutations, mapAcctions} from 'vuex'
//import Products from '../Products/index'

export default {
  name: 'Super',
  props:['superList'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        "swiperOption": {
              autoplay: 3500,
              setWrapperSize :true,
              pagination : '.swiper-pagination',
              paginationClickable :true,
              mousewheelControl : true,
              observeParents:true,
        }
    }
  },
  components:{
     swiper,
     swiperSlide,
     ImgShow
  },
  methods:{
    // increment () {
    //      this.$store.commit('increment');
    //     // this.$store.dispatch('increment')
    // }
    addCarItem (i) {
        this.$store.dispatch('shoppingCar/addCarItem',i)//dispatch触发的是actions
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .super-content{
        width: 100%;
    }
    .swiper-banner{
        width: 100%;
        img{
            width: 100%;
            display: block;
        }
    }
    .swiper-menu{
        width: 100%;
        margin: 0.13rem 0;
        display: flex;
        background:#fff;
        a{
            flex:1;
            flex-direction:column;
            img{
                width: 100%;
                height: auto;
            }
            span{
                font-size: 0.12rem;
                width: 100%;
                display: inline-block;
                line-height: 0.2rem;
                color: #888;
                text-align: center;
            }
        }
    }
    .products{
        width: 100%;
        background: #fff;
        margin-top: 0.1rem;
        .banner{
            width: 100%;
            img{
                width: 100%;
                display: block;
            }
        }
        .mould-ClickTrace{
            width: 100%;
            display: flex;
            flex-wrap:wrap;
            .pros{
                width: 33.3%;
                border-bottom: 1px solid #f0f0f0;
                border-right: 1px solid #f0f0f0;
                padding-bottom: 0.05rem;
                 &:nth-child(3n){
                    border-right:none;
                }
            }
            .dl{
               .dt{
                    width: 100%;
                    img{
                        width: 88%;
                        margin-left: 6%;
                        display: block;
                    }
                }
                .dd{
                    p{
                        margin:0.2rem 0;
                        text-align: center;
                    }
                    .price{
                        display: flex;
                        justify-content: space-between;
                        padding: 0 5%;
                        box-sizing: border-box;
                        .Price-bar{
                            display: flex;
                            flex-direction:column;
                        }
                    }
                    .worldoriginal{
                        color: grey;
                        font-size: 0.12rem;
                        padding-bottom: 0.02rem;
                        text-decoration: line-through;
                    }
                    .promo-price{
                        color: #ff712b
                    }
                    .add-cart-bar{
                        color: #ff712b;
                        padding: 0 0.06rem;
                        border: 1px solid #ff712b;
                        border-radius: 0.02rem;
                        text-align: center;
                        line-height: 0.28rem;
                    }
                }
            }
        }
    }
</style>
