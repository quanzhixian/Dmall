<template>
    <div class="super-content">
        <div class="banner-content">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in dataList">
                    <img :src="item.imageUrl" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="slider-list">
            <img src="https://img.dmallcdn.com/mIndex/201707/b28fd229-e22b-4b8c-a406-f2366fee62d8_750H" alt="">
        </div>
        <div class="menu-box">
            <a href="#" v-for="item in menuList1">
                <img :src="item.imageUrl" alt="">
                <span>{{item.data.title}}</span>
            </a>
        </div>
        <div class="center-content" v-for="item in itemList">
            <p>
                <a href="#"><img :src="item.img1" alt=""></a>             
            </p>
            <p>
                <a href="#"><img :src="item.img2" alt=""></a>
                <span>
                    <a href="#"><img :src="item.img3" alt=""></a>
                    <a href="#"><img :src="item.img4" alt=""></a>
                </span>             
            </p>
            
        </div>
        <div class="title-park" v-for="item in contentList">
            <div class="title">
                <img :src="item.title" alt="">
            </div>
            <div class="item-content clearfix">
                <p class="clearfix"><a javascript="#" v-for="i in item.imgUrl0"><img :src="i.img" alt=""></a></p>
                <p class="clearfix"><a javascript="#" v-for="i in item.imgUrl1"><img :src="i.img" alt=""></a></p>
                <p class="clearfix"><a javascript="#" v-for="i in item.imgUrl2"><img :src="i.img" alt=""></a></p>
            </div>
            <div class="sell_select"><img :src="item.banners" alt=""></div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Super',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        dataList: [
                    {
                        "brandId": 0,
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201707/93be277c-ef8c-4efe-b545-450b515e3e27_750H",
                        "resource": "https://a.dmall.com/act/wSlMPcU0zsVYeTtv.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 1,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201707/312872f2-7b28-4edd-98f6-47c61cd448ba_750H",
                        "resource": "https://a.dmall.com/act/zjYl6Q57IObq8.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 2,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201707/0cfa6f05-200b-4176-b68b-18120d4cc9ac_750H",
                        "resource": "https://a.dmall.com/act/BfcJmvnwErDuZYz.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 3,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201707/f4e700ab-253c-43a1-af9f-9a64777b8324_750H",
                        "resource": "https://a.dmall.com/act/myY1465uBdag.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 4,
                        "storeId": 206,
                        "venderId": 1
                    }
                ],
        menuList1:[
                    {
                        "brandId": 0,
                        "data": {
                            "showTitle": true,
                            "title": "新鲜果蔬"
                        },
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201706/76af034d-c3f3-4599-a367-bd74b97c1647_240x240H",
                        "remark": "新鲜果蔬",
                        "resource": "https://a.dmall.com/act/xCuXlvnhqt.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 1,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "data": {
                            "showTitle": true,
                            "title": "安心肉蛋"
                        },
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201706/574f6cfb-54da-4838-9881-94fd13fefea6_240x240H",
                        "remark": "安心肉蛋",
                        "resource": "https://a.dmall.com/act/IkrvOT56W8H.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 2,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "data": {
                            "showTitle": true,
                            "title": "冰鲜水产"
                        },
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201706/4cc9e6a9-9453-4e67-95b4-56559cbce251_240x240H",
                        "remark": "冰鲜水产",
                        "resource": "https://a.dmall.com/act/ti3MKkIw81fec4.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 3,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "data": {
                            "showTitle": true,
                            "title": "休闲食品"
                        },
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201706/7582d0b6-5c10-4132-a5f4-647c707985dc_240x240H",
                        "remark": "休闲食品",
                        "resource": "https://a.dmall.com/act/3tX1nj0BOleEYA.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 4,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "data": {
                            "showTitle": true,
                            "title": "奶饮熟食"
                        },
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201706/3a793cd8-f1ad-4e9c-9053-f061095c1a4b_240x240H",
                        "remark": "奶饮熟食",
                        "resource": "https://a.dmall.com/act/57WVCldpUZeAX3tz.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 5,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "data": {
                            "showTitle": true,
                            "title": "粮油速食"
                        },
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201706/2ad4802c-d59a-41b0-ad54-daf1c69192d8_240x240H",
                        "remark": "粮油速食",
                        "resource": "https://a.dmall.com/act/KU6qIWtsVp2urv.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 1,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "data": {
                            "showTitle": true,
                            "title": "酒水饮料"
                        },
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201706/5e77490e-e41d-420e-b764-267851873b2f_240x240H",
                        "remark": "酒水饮料",
                        "resource": "https://a.dmall.com/act/7TwD1ziZuOdjyC.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 2,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "data": {
                            "showTitle": true,
                            "title": "母婴用品"
                        },
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201706/9de97ee2-da68-4e8e-beca-8b2558cde88a_240x240H",
                        "remark": "母婴用品",
                        "resource": "https://a.dmall.com/act/T2lJH7OdvYeEV4.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 3,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "data": {
                            "showTitle": true,
                            "title": "清洁洗护"
                        },
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201706/b87a2183-7845-4d5f-8a87-03e66ec113cb_240x240H",
                        "remark": "清洁洗护",
                        "resource": "https://a.dmall.com/act/TOSDIgdM3xhQN.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 4,
                        "storeId": 206,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "data": {
                            "showTitle": true,
                            "title": "日用百货"
                        },
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201706/bbdd3464-62b9-4a6f-bf8b-d17904dfa573_240x240H",
                        "remark": "日用百货",
                        "resource": "https://a.dmall.com/act/JOgI04Crke86.html?erpStoreId=206&dmfrom=wx&from=wx&shareKey=1500018731073",
                        "sort": 5,
                        "storeId": 206,
                        "venderId": 1
                    }
                ],
        itemList:[{
            "img1":"https://img.dmallcdn.com/mIndex/201707/4edeba7c-7060-4f6c-bc86-301a8fd13790_480x480H",
            "img2":"https://img.dmallcdn.com/mIndex/201707/f096a9db-d1e5-423a-b2ad-df398100c69a_480x480H",
            "img3":"https://img.dmallcdn.com/mIndex/201707/c1b5d1e4-fcb1-4d91-a05c-f776d4a5f90e_480x480H",
            "img4":"https://img.dmallcdn.com/mIndex/201707/0cd6f484-c79c-4c3f-b555-8b0e750c7fbf_480x480H"
            
          }],
        contentList:[
                   {
                    "title":"https://img.dmallcdn.com/mIndex/201707/dfcf52ef-40a8-454d-9f45-268815ed5eb0_750H",
                    "imgUrl0":[{
                        "img":"https://img.dmallcdn.com/mIndex/201707/b72c0677-39bb-4124-b52d-93b03e0c5233_360x360H"},
                        {"img":"https://img.dmallcdn.com/mIndex/201707/2eed5650-a3a3-478f-83b7-d3e7a42f5d9f_360x360H"
                         },
                         {"img":"https://img.dmallcdn.com/mIndex/201707/61b32d65-3ae7-4f16-85c3-1d22316ec47c_360x360H"
                         }],
                    "imgUrl1":[{
                        "img":"https://img.dmallcdn.com/mIndex/201707/3f094512-6fa1-4c1d-857f-e6e4b14e0b62_360x360H"},
                        {"img":"https://img.dmallcdn.com/mIndex/201707/1114d8d6-48cd-4c70-a449-2b0dd3072fd3_360x360H"
                         },
                         {"img":"https://img.dmallcdn.com/mIndex/201707/140b5a82-23b9-417b-a001-3601c0ea1d6f_360x360H"
                         }],
                    "imgUrl2":[{
                        "img":"https://img.dmallcdn.com/mIndex/201707/6021e452-7064-446f-8868-4946c71a982b_360x360H"},
                        {"img":"https://img.dmallcdn.com/mIndex/201707/10b8ede2-09e1-403b-a890-d4756d023257_360x360H"
                         },
                         {"img":"https://img.dmallcdn.com/mIndex/201707/449805af-5188-432c-b6f0-9bc59609192a_360x360H"
                         }],
                   }
                ],
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .super-content{
        width:100%;
        .banner-content{
             width:100%;
             height:150px;
             img{
                width:100%;
             }
        }
        .slider-list{
            width:100%;
            img{
                width:100%;
            }
        }
        .menu-box{
            width: 100%;
            display: flex;
            flex-wrap:wrap;
            background: #fff;
            margin-top: 0.1rem;
            a{
                width: 20%;
                flex-direction:column;
                img{
                    width: 100%;
                    display: block;
                }
                span{
                    width: 100%;
                    text-align: center;
                    font-size: 0.12rem;
                    line-height: 0.27rem;
                    color: #888;
                }
            }
        }
        .center-content{
            width:100%;
            p{
                width:50%;
                float:left;
                img{
                    width:100%;
                }
                span{
                    width:50%;
                    img{
                        width:50%;
                        float:left;
                    }
                }
            }
        }
        .title-park{
            background:#F7EEF3;
            img{
                width:100%;
            }
            .item-content{
                height: auto;
                a{
                    width:50%;
                    float:left;
                }
                } 
            .sell_select,.sell_select1{
                margin:10px 0;
                img{
                    width: 100%;
                }
            }
            .item-content{
                width:100%;
                p{
                    display: flex;
                    a{
                        flex:1;
                    }
                }

            }
        }
        .clearfix:before,.clearfix:after{
            content:'';
            display: table;
            height: 0;
        }
        .clearfix:after{
            clear:both;
        }
        
    }
</style>
