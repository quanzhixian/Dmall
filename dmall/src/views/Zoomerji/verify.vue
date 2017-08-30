<template>
    <div class="verify-page">
        <HeaderBar :title='title'>
            <div slot="left-icon">
                <a class='backto' href='JavaScript:history.back(-1)'></a>
            </div>
        </HeaderBar>
        <div class="banner">
            <img src="http://img.dmall.com/common/e2767579-05b5-4b08-87b1-12d4fc62d59f_750H" alt="">
        </div>
        <div class="step">
            <div class="item iphone">
                <input placeholder="请输入您的用户名" maxlength="11" class="phoneNo" type="text" v-model='info.userName'>
                <span class="orbtn">获取验证码</span> 
            </div>
            <div class="item code">
                <input placeholder="请输入密码" maxlength="6" class="codeNo" type="password" v-model='info.pwd'>
            </div>
        </div>
        <p class="tips">验证手机视为已阅读并同意<a href="###">用户协议</a></p>
        <div class="jrow"><button class="orlbtn validatToken" @click='sure'>确定</button></div>
    </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import $ from "zepto"
export default {
  name: 'verify',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title:'验证手机',
      info:''
    }
  },
  components:{
    HeaderBar
  },
  methods:{
    sure:function () {
        var info = {};
        info.userName = $(this.$el).find('.phoneNo').val();
        info.pwd = $(this.$el).find('.codeNo').val();
        if(localStorage){
            localStorage.setItem('loginInfo',JSON.stringify(info))
        }
        if(localStorage){
            var infoDatas = localStorage.getItem('loginInfo');
            this.info = JSON.parse(infoDatas)
        }
        console.log(this.info)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .verify-page{
        background:#F6F6F6;
    }
    .backto:after{
        content: " ";
        display: inline-block;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-135deg);
        height: 10px;
        width: 10px;
        border-width: 2px 2px 0 0;
        border-color: #999;
        border-style: solid;
        position: relative;
        top: 0;
        right: 0;
    }
    .banner{
        width: 100%;
        height: auto;
        img{
            width: 100%;
            display: block;
        }
    }
    .step{
        width: 100%;
        background: #fff;
        margin-top: 0.13rem;
    }
    .item{
        width: 100%;
        height: 0.6rem;
        padding: 0.08rem 0.1rem;
        position: relative;
        box-sizing: border-box;
        border-bottom: 1px solid #F6F6F6;
        .orbtn{
            position: absolute;
            right: 0.14rem;
            top:0.15rem;
            color: #ff712b;
            padding: 0rem 0.1rem;
            border: 1px solid #ff712b;
            border-radius: 0.08rem;
            height: 30px;
            line-height: 0.3rem;
        }
        input{
            border: 0;
            outline: none;
            padding-top: 0.16rem;
        }
    }
    .tips{
        text-align: right;
        padding-right: 10px;
        width: 100%;
        margin-top: 20px;
        font-size: 13px;
        color: grey;
        a{
            color: #ff712b;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    .jrow{
        padding: 0.12rem;
        width: 100%;
        margin-top: 10px;
        .orlbtn{
            background: #ff712b;
            width: 100%;
            color: #fff;
            border-radius: 4px;
            font-size: 14px;
            padding: 7px 20px;
            text-align: center;
            border: none;
            cursor: pointer;
            outline: 0;
        }
    }
</style>
