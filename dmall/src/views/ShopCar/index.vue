<template>
    <div class='shop-car-page'>
        <HeaderBar :title='title' class='top'></HeaderBar>
        <section>
            <div class="J_CartAddressCont">
                <p>多点君需要你的详细地址哟~</p>
                <p class="sendto">送至:海淀公园(公交站)</p>
                <span class='goto'></span>
            </div>
            <buyqian></buyqian>
            <buyhou></buyhou>
        </section>
        <FooterBar></FooterBar>
    </div>
</template>


<script>
import FooterBar from '@/components/FooterBar'
import HeaderBar from '@/components/HeaderBar'
import buyqian from './components/buyqian'
import buyhou from './components/buyhou'
export default {
  name: 'ShopCar',
  data () {
    return {
       msg: 'Welcome to Your Vue.js App',
       title:'购物车'
    }
  },
  components:{
       FooterBar,
       HeaderBar,
       buyqian,
       buyhou
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .top{
        position: fixed;
        z-index: 100;
        box-shadow: 0 0 20px #999;
    }
    section{
        padding-top: 0.48rem;
    }
    .J_CartAddressCont{
        background: #fff;
        padding: 0.1rem;
        box-sizing: border-box;
        position: relative;
        background-image: url(../../static/images/icon/shoppingline.png);
        background-repeat: repeat-x;
        background-position: top left;
        background-size: auto 2px;
        box-shadow: 0 0 20px #ccc;
        p{
            line-height: 0.26rem;
            font-size: 0.16rem;
        }
        .sendto{
            color: #666;
            font-size:0.14rem;
        }
        .goto{
            position: absolute;
            display: block;
            right: 0.1rem;
            top: 38%;
        }
        .goto:after{
                content: " ";
                display: inline-block;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                height: 10px;
                width: 10px;
                border-width: 2px 2px 0 0;
                border-color: #c8cccd;
                border-style: solid;
                position: relative;
                top: 0;
                right: 0;
        }
    }
    .shop-car-page{
        background: #F6F6F6
    }
    
</style>
