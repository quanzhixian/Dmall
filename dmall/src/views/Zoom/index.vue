<template>
    <div class='zoom-page'>
        <div class="mantop">
            <div class="form">
                <div class="left-bar">
                    <p>Hello,你好</p>
                    <span>去登录</span>
                </div>
                <div class="right-bar">
                    <i class='icon icon-new-barcode'></i>
                    <span>会员专属码</span>
                </div>
            </div>
            <div class="nav">
                <a href="javascript:;"><b>0.00</b><span>余额</span></a>
                <a href="javascript:;"><b>0</b><span>积分</span></a>
                <a href="javascript:;"><b>0</b><span>卡包</span></a>
                <a href="javascript:;"><b>0</b><span>优惠券</span></a>
            </div>
        </div>
        <div class="order-list">
            <router-link to="/verify"><i class='icon icon-order-needpay'></i><span>待支付</span></router-link>
            <router-link to="/verify"><i class='icon icon-order-uncompleted'></i><span>未支付</span></router-link>
            <router-link to="/verify"><i class='icon icon-order-completed'></i><span>已完成</span></router-link>
            <router-link to="/verify"><i class='icon icon-order-all'></i><span>全部订单</span></router-link>
        </div>
        <div class="centers-list">
            <router-link to="/verify"><i class='icon icon-new-member'></i><span>会员中心</span></router-link>
            <router-link to="/verify"><i class='icon icon-new-location'></i><span>收货地址</span></router-link>
            <router-link to="/invite"><i class='icon icon-new-help'></i><span>帮助中心</span></router-link>
            <router-link to="/invite"><i class='icon icon-new-service'></i><span>客服电话</span></router-link>
            <router-link to="/invite"><i class='icon icon-new-downladapp'></i><span>体验APP</span></router-link>
            <router-link to="/verify"><i class='icon icon-new-innvoice'></i><span>发票中心</span></router-link>
            <router-link to="/verify"><i class='icon icon-bindcard'></i><span>绑卡</span></router-link>
            <router-link to="/invite"><i class='icon icon-invite-friends'></i><span>邀请</span></router-link>
        </div>   
        <FooterBar></FooterBar>
    </div>
</template>


<script>
import FooterBar from '@/components/FooterBar'
export default {
  name: 'Zoom',
  data () {
    return {
       msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
       FooterBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .zoom-page{
        background:#F6F6F6;
    }
    .mantop{
        background-image: url('https://static.dmall.com/kayak-project/usercenter/dist/usercenter/common/image/mine-top-img.png');
        background-size: 100%;
        height: 150px;
        position: relative;
        .form{
            width: 100%;
            padding: 0 3%;
            box-sizing: border-box;
            height: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            .left-bar{
                p{
                    font-size: 0.14rem;
                    margin-bottom: 0.1rem;
                }
                span{
                    padding: 0.02rem 0.2rem;
                    background: #fff;
                    color: #E96C11;
                    border-radius: 0.1rem;
                }
            }
            .right-bar{
                display: flex;
                flex-direction:column;
            }
        }
        .nav{
            width: 100%;
            height: 0.5rem;
            display: flex;
            background:rgba(0,0,0,0.1);
            a{
                flex:1;
                display: flex;
                color: #fff;
                flex-direction:column;
                justify-content: center;
                align-items: center;
            }
            span{
                margin-top: 0.04rem;
            }
        }
    }
    .order-list{
        width: 100%;
        background: #fff;
        display: flex;
        margin: 0.1rem 0;
        padding: 0.16rem 0;
        a{
            flex:1;
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            width: 0;
            .icon-order-all{background-position: -150px -550px;}
            .icon-order-completed{background-position: -100px -550px;}
            .icon-order-uncompleted{ background-position: -50px -550px;}
            .icon-order-needpay{ background-position: 0 -550px;}
            span{
                margin-top: 0.1rem;
            }
        }
     }
    .centers-list{
        width: 100%;
        display: flex;
        background: #fff;
        flex-wrap:wrap;
        margin-top: 0.16rem;
        padding-bottom: 0.15rem;
        a{
            width: 25%;
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            span{
                margin-top: 0.1rem;
            }
            .icon{
                margin-top: 0.15rem;
                &.icon-new-member{background-position: 0 -510px;}
                &.icon-new-location{background-position: -50px -510px;}
                &.icon-new-help{background-position: -100px -510px;}
                &.icon-new-service{background-position: -150px -510px;}
                &.icon-new-downladapp{background-position: -200px -510px;}
                &.icon-new-innvoice{background-position: -250px -550px;}
                &.icon-bindcard{background-position: -200px -550px;}
                &.icon-invite-friends{}
            }
        }
    }

    
</style>
