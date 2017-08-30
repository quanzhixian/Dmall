<template>
    <div class='class-type-page'>
        <header class='search-top'>
            <a class='backto' href='JavaScript:history.back(-1)'></a>
            <input type="text" value='搜索商品或店铺'>
        </header>
        <section class='sn-list-box'>
            <div class="sn-list-nav">
                <ul>
                    <li v-for='(val,ind) in navList' @click='gotoproduct(ind)'>{{val.title}}</li>
                </ul>
            </div>
            <div class="sn-list-con">
                <div class="info" v-for='item in conList'>
                    <h1>{{item.id}}</h1>
                    <p>{{item.name}}</p>
                </div>
            </div>
        </section>

        <FooterBar></FooterBar>
    </div>
    
</template>


<script>
import $ from "zepto"
import FooterBar from '@/components/FooterBar'
export default {
  name: 'ClassType',
  data () {
    return {
       navList:[],
       conList:[],
       isA:true
    }
  },
  components:{
       FooterBar
  },
  created () {
    var that = this;
    this.$axios.get('/suningIndex').then(function (res) {
        var data = res.data;
        that.navList = data
    })
  },
  methods:{
    gotoproduct:function (ind) {
        this.conList=this.navList[ind].dataList;
    },
    toggle: function(){
            this.isactive = !this.isactive;
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

    .search-top{
        background: #F8F8F8;
        width: 100%;
        height: 0.44rem;
        padding: 0 0.1rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        a{
            flex:1;
            padding-left: 5%;
        }
        a:after{
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
        input{
            flex:7;
            height: 0.32rem;
            border: 2px solid #ccc;
            border-radius: 6px;
            outline: none;
            color: #999;
        }
    }
    .sn-list-box{
        width: 100%;
        display: flex;
        .sn-list-nav{
            width: 25%;
            position: fixed;
            float: left;
            left: 0;
            height: 600px;
            overflow-y: auto;
            ul{
                width: 100%;
                
                li{
                    
                    height: 0.4rem;
                    line-height: 0.4rem;
                    text-align: center;
                    background: #F4F4F4;
                    border-right: 1px solid #e9e9e9;
                    border-bottom: 1px solid #e9e9e9;
                    box-sizing: border-box;
                    font-size: 0.1rem;
                    color: #666;
                }
            }
        }
        .sn-list-con{
            width: 75%;
            margin-left: 25%;
            float: left;
            padding-left: 0.3rem;
            box-sizing: border-box;
            .info{
                margin-top: 0.3rem;
            }
            h1{
                font-size: 0.3rem;
            }
            p{
                font-size: 0.2rem;
            }
        }
    }
    /*.sn-list-nav{
        .class-a{  
            background: lightpink;  
         }  
         .class-b{  
            background: #eee;  
         }
    }*/
</style>
