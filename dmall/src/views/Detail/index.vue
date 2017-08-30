<template>
    <div class="detail-page">
        <headerBar>
          <div slot="left-icon">
            <a href='JavaScript:history.back(-1)' class="icon left"><</a>
          </div>

          <div slot="right-icon">
            <a href="javascript:;" class='icon icon-home'></a>
          </div>
        </headerBar>
        <section class='detailrender'>
            <div v-for='item in detailData'>   
                <div v-for='i in item.dataList'>
                    <div v-if='i.spId==id'>
                        <aside class='imgdata'>
                            <img :src="i.imageUrl" alt="">
                        </aside>
                        <div class="conten">
                            <h3>{{i.data.name}}</h3>
                            <p>实际重量通常偏大，你无需补款，多出的费用多点为你承担</p>
                            <b>￥{{(i.data.price)/100}}</b>
                            <h4><i class="icon icon-detail-send"></i> 现在下单，预计今日12:00-13:30送达</h4>
                        </div>     
                    </div>
                </div>
            </div>
        </section>
        <footer clss='footer'>
            <i class='icon icon-cart icon-cart-gray'></i>
        </footer>
    </div>     
</template>

<script>
import headerBar from '@/components/HeaderBar'
export default {
  name: 'Detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      detailData:[],
      id:this.$route.params.id
    }
  },
  components:{
    headerBar
  },
  created () {
    var that = this;
    this.$axios.get('/businessIndex').then(function (res) {
        var data = res.data.data.pageModules;
        for(var i=12;i<data.length;i++) {
            that.detailData.push(data[i])
        }
        console.log(that.detailData)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .detail-page{
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction:column;
    }
    .icon-arrow-left-white{
        background-color: #333;
         padding: 0.4rem;
    }
    .icon-home{
        background-position: -250px 0;
    }
    .left{
        color: #000;
        font-size: 0.2rem;

    }
    .icon-cart-gray{
        background-position: -100px -250px;
    }
    .detailrender{
        width: 100%;
        padding: 0 3%;
        background: #fff;
    }
    .imgdata{
        
    }
    .conten{
        width: 100%;
        h3{
            font-size: 0.2rem;
        }
        p{
            color: #999;
            margin-top: 0.1rem;
            font-size: 0.14rem;
            line-height: 0.18rem;
        }
        b{
           color: #ff712b;
           display: inline-block;
           font-size: 0.2rem;
           margin-top: 0.1rem; 
        }
        h4{
            font-weight: bold;
            margin-top: 0.2rem;
            i{
                padding-right: 0.4rem;
            }
        }
    }
    .footer{
        position: absolute;
        bottom: 0
    }
</style>
