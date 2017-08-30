<template>
  <div id="app">
    <router-view></router-view>
    <Loadding :loaddingShow='loaddingShow'></Loadding>
  </div>
</template>

<script>
import './static/lib/reset.css' 
import  Loadding from './components/loadding' 

export default {
  name: 'app',
  data () {
  	return {
  		loaddingShow:false
  	}
  },
  components:{
  	Loadding
  },
  // created () {
  //   this.$axios.get('/businessIndex').then(function (res) {
  //   })
  // }
}
</script>

<style lang='less'>
*{
	padding: 0;
	margin: 0;
	list-style: none;
	box-sizing: border-box;
}
body,html,#app{
	width: 100%;
	height: 100%;
}

body{
	background-color: #f6f6f6;
}
.icon{
	background-image: url('./static/images/icon/sprt.png');
	background-size: 4rem 6rem;
	display: inline-block;
	width: 0.3rem;
	height: 0.3rem;
	&.icon-search-white{background-position:0 0}
	&.icon-user{background-position:-50px 0}
	&.icon-all-cate{background-position:-100px 0}
	&.icon-share{background-position:-150px 0}
	&.icon-store{background-position:-200px 0}
	&.icon-home{background-position:-250px 0}
	&.icon-edit{background-position:-300px 0}
	&.icon-notice{background-position:-350px 0}
	&.icon-search{background-position:0 -50px}
	&.icon-trash{background-position:-50px -50px}
	&.icon-orders{background-position:-100px -50px}
	&.icon-localtion{background-position:-150px -50px}
	&.icon-barcode{background-position:-200px -50px}
	&.icon-group-buying{background-position:-250px -50px}
	&.icon-scan-code{background-position:-300px -51px}
	&.icon-coupon{background-position:-350px -50px}
	&.icon-mycouponcode{background-position:-350px -401px}
	&.icon-help{background-position:0 -100px}
	&.icon-customer-service{background-position:-50px -100px}
	&.icon-invite-friends{background-position:-100px -100px}
	&.icon-close{background-position:-150px -100px}
	&.icon-weixin-pay{background-position:-200px -100px}
	&.icon-others-pay{background-position:-250px -100px}
	&.icon-localtion-fill{background-position:-300px -100px}
	&.icon-gps{background-position:-350px -100px}
	&.icon-arrow-left-white{background-position:0 -150px}
	&.icon-close-white{background-position:-50px -150px}
	&.icon-backtop-white{background-position:-100px -150px}
	&.icon-add-cart{background-position:-150px -150px}
	&.icon-checkbox-selected{background-position:-200px -150px}
	&.icon-checkbox-default{background-position:-250px -150px}
	&.icon-radio-selected{background-position:-300px -150px}
	&.icon-radio-default{background-position:-350px -150px}
	&.icon-add-new-address,
	&.icon-add-presale,
	&.icon-arrow-down,
	&.icon-close-gray,
	&.icon-deliver-rule,
	&.icon-deliver-ruwhite,
	&.icon-info-mark,
	&.icon-info-mark-gray,
	&.icon-input-close,
	&.icon-input-search,
	&.icon-sort-asc,
	&.icon-sort-desc{width:20px;height:20px}
	&.icon-input-close{background-position:0 -200px}
	&.icon-input-search{background-position:-50px -200px}
	&.icon-close-gray{background-position:-100px -200px}
	&.icon-sort-asc{background-position:-150px -200px}
	&.icon-sort-desc{background-position:-200px -200px}
	&.icon-arrow-down{background-position:-250px -200px}
	&.icon-ok{width:20px;height:15px;background-position:-100px -230px}
	&.icon-cart,
	&.icon-cart-empty,
	&.icon-cart-gray,
	&.icon-cart-nodata{height:40px;width:40px}
	&.icon-deliver-ruwhite{background-position:-300px -261px}
	&.icon-deliver-rule,
	&.icon-info-mark-gray{background-position:-150px -230px}
	&.icon-add-new-address{background-position:-250px -230px}
	&.icon-presale{background-position:-300px -230px}
	&.icon-info-mark{background-position:-350px -230px}
	&.icon-arrow-up{background-position:-243px -254px}
	&.icon-cart-empty{background-position:0 -250px}
	&.icon-cart{background-position:-50px -250px}
	&.icon-cart-gray{background-position:-100px -250px}
	&.icon-cart-nodata{background-position:0 -300px}
	&.icon-minus-cart{background-position:0 -400px}
	&.icon-home-white{background-position:0 -350px}
	&.icon-group-buying-white{background-position:-50px -350px}
	&.icon-groupon-sucess-white{background-position:-100px -350px}
	&.icon-groupon-clock-white{background-position:-150px -350px}
	&.icon-groupon-failure-white{background-position:-200px -350px}
	&.icon-groupon-over-white{background-position:-250px -350px}
	&.icon-payment-sucess-white{background-position:-300px -350px}
	&.icon-warn-white{background-position:-350px -350px}
	&.icon-detail-pay{width:40px;height:20px;background-position:-106px -408px;vertical-align:middle}
	&.icon-detail-send{width:20px;height:20px;background-position:-157px -408px}
	&.icon-all-cate-orange{background-position:0 -440px}
	&.icon-funnel{background-position:-50px -440px}
	&.icon-condition-price{background-position:-115px -475px}
	&.icon-condition-price.selected{background-position:-145px -475px}
	&.icon-condition-sales{background-position:-55px -475px}
	&.icon-condition-sales.selected{background-position:-85px -475px}
	&.icon-condition-multiple{background-position:5px -475px}
	&.icon-condition-multiple.selected{background-position:-25px -475px}
	&.icon-add-cart-disabled{background-position:-200px -400px}
	&.icon-app{background-position:-300px -400px;width:30px;height:30px;vertical-align:middle}
	&.icon-modal-close{background-position:-56px -300px;width:30px;height:33px}
	&.icon-count-balance,
	&.icon-count-card,
	&.icon-count-member,
	&.icon-count-money,
	&.icon-count-set{width:30px;height:30px;vertical-align:middle;margin-right:5px}
	&.icon-count-balance{background-position:-100px -440px}
	&.icon-count-card{background-position:-150px -440px}
	&.icon-count-money{background-position:-150px -470px}
	&.icon-count-set{background-position:-200px -440px}
	&.icon-count-vip{background-position:-288px -480px;width:58px;height:15px;vertical-align:middle}
	&.icon-count-member{background-position:-200px -470px}
	&.icon-count-download{background-position:-250px -473px;width:30px;height:30px;vertical-align:middle}
	&.icon-count-whitecode{background-position:0 -476px;width:27px;height:17px;vertical-align:middle}
	&.icon-count-whitephone{background-position:-353px -261px;width:15px;height:20px;vertical-align:-4px}
	&.icon-cash-pay{background-position:-50px -470px}
	&.icon-alipay-pay{background-position:-250px -440px}
	&.icon-union-pay{background-position:-300px -440px}
	&.icon-mtcard-pay{background-position:-350px -440px}
	&.icon-wmcoupon-past,
	&.icon-wmcoupon-unused,
	&.icon-wmcoupon-used{width:40px;height:30px;vertical-align:middle}
	&.icon-wmcoupon-unused{background-position:-245px -302px}
	&.icon-wmcoupon-used{background-position:-295px -302px}
	&.icon-wmcoupon-past{background-position:-345px -302px}
	&.icon-new-barcode{
        width: 40px;
        height: 40px;
        background-position: -250px -500px;
    }




}

</style>
