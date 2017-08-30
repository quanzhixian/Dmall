<template>
<div class="show">
    <div class="park">
        <aside><img :src="titleimgs[0].imageUrl" alt=""></aside>
        <ul>
            <li>
                <a :href="parkdata[0].resource"><img :src="parkdata[0].imageUrl" alt=""></a>
            </li>
            <li>
                <a :href="parkdata[1].resource"><img :src="parkdata[1].imageUrl" alt=""></a>
                <a :href="parkdata[2].resource"><img :src="parkdata[2].imageUrl" alt=""></a>
            </li>
        </ul>
    </div> 
    <div class="ad"><img :src="adverdata[0].imageUrl" alt=""></div>
    <div class="optimization">
        <aside><img :src="titleimgs[1].imageUrl" alt=""></aside>
        <ul>
            <li>
                <a :href="item.resource" v-for='item in optimization'><img :src="item.imageUrl" alt=""></a>
            </li>
        </ul>
    </div> 
    <div class="ad"><img :src="adverdata[1].imageUrl" alt=""></div>
    <div class="live">
        <aside><img :src="titleimgs[2].imageUrl" alt=""></aside>
        <ul>
            <li>
                <a :href="item.resource" v-for='item in liveList'><img :src="item.imageUrl" alt=""></a>
            </li>
        </ul>
    </div> 
</div>
</template>

<script>

export default {
  name: 'ImgShow',
  data () {
    return {
      "parkdata":[
          {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/2903dccf-5432-4b66-8b17-f8ff5c1cb82d_480x480H","resource":"https://a.dmall.com/act/DesGcNw6BS28EH.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":1,"storeId":112,"venderId":1},
          {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/7b2094be-0fcc-430b-bc59-7fb8fe0671aa_480x480H","resource":"https://a.dmall.com/act/MDSZzTRsqJC0.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":2,"storeId":112,"venderId":1},
          {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/394438ab-6b77-43c2-ba74-b9cfd13a8a7f_480x480H","resource":"https://a.dmall.com/act/iptEukxCeNg.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":3,"storeId":112,"venderId":1}
          ],
      "adverdata":[
           {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/745d1532-ee5f-4119-9fc8-38bd48ee56c3_750H","resource":"https://a.dmall.com/act/1yFC27dOvHne.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":1,"storeId":112,"venderId":1},
           {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/35fe8803-e453-4d8a-bc5d-bc03a23a9627_750H","resource":"https://a.dmall.com/act/z37uDl6fP215dYHG.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":1,"storeId":112,"venderId":1}
       ],
      "titleimgs":[
            {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201706/2d601d49-cfbc-45f6-80b2-f0ec4f49f8ec_750H","resource":"","sort":1,"storeId":112,"venderId":1},
            {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201706/3571bfa9-37da-43db-80ee-f82665c15403_750H","resource":"","sort":1,"storeId":112,"venderId":1},
            {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201706/8f9b4593-a350-4277-acb0-2ac78c098523_750H","resource":"","sort":1,"storeId":112,"venderId":1}
        ],
      "optimization": [
           {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/7bd5c8d5-59c8-464e-ae4f-e47d4ca4689d_360x360H","resource":"https://a.dmall.com/act/gAU3TMBJIe.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":1,"storeId":112,"venderId":1},
            {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/1266e1d8-1420-4f6e-b47f-4967245716a5_360x360H","resource":"https://a.dmall.com/act/CDW5wOJy3pmPKVd.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":2,"storeId":112,"venderId":1},
            {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/1d0a616b-ecde-4b39-b740-7afbf92364d8_360x360H","resource":"https://a.dmall.com/act/j6UPD7yl8a1vpR.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":3,"storeId":112,"venderId":1},
            {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/5d206a87-1cb3-46f7-8750-f634d86d587b_360x360H","resource":"https://a.dmall.com/act/nojqA5kgBE.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":3,"storeId":112,"venderId":1},
            {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/1266e1d8-1420-4f6e-b47f-4967245716a5_360x360H","resource":"https://a.dmall.com/act/CDW5wOJy3pmPKVd.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":2,"storeId":112,"venderId":1},
            {"brandId":0,"dataType":5,"imageUrl":"https://img.dmallcdn.com/mIndex/201707/1d0a616b-ecde-4b39-b740-7afbf92364d8_360x360H","resource":"https://a.dmall.com/act/j6UPD7yl8a1vpR.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499995442653","sort":3,"storeId":112,"venderId":1}
            ],
      "liveList": [
                    {
                        "brandId": 0,
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201707/978a0a7d-65cb-4e2f-a361-d7cdbc263468_480x480H",
                        "resource": "https://a.dmall.com/act/TzfRxZyYIt.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499319940240",
                        "sort": 1,
                        "storeId": 112,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201707/7288eea2-a600-4316-a06f-574567528f0d_480x480H",
                        "resource": "https://a.dmall.com/act/iNwZRaJGol.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499319940240",
                        "sort": 2,
                        "storeId": 112,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201707/a99b69b6-bb77-4200-ac63-4e190a79bfee_480x480H",
                        "resource": "https://a.dmall.com/act/Jf8p7GiszP.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499319940240",
                        "sort": 3,
                        "storeId": 112,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201707/1e10f0e2-b7ed-4e45-b835-ad55be146968_480x480H",
                        "resource": "https://a.dmall.com/act/63Kic0zEHj.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499319940240",
                        "sort": 4,
                        "storeId": 112,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201707/6dfc07eb-4f41-48f5-bd96-b143196fc21f_480x480H",
                        "resource": "https://a.dmall.com/act/C2magxP6K0r.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499319940240",
                        "sort": 5,
                        "storeId": 112,
                        "venderId": 1
                    },
                    {
                        "brandId": 0,
                        "dataType": 5,
                        "imageUrl": "https://img.dmallcdn.com/mIndex/201707/e5c3bb12-a2fe-47cc-aebc-87a49fb37fb9_480x480H",
                        "resource": "https://a.dmall.com/act/TR1LozEvdn.html?erpStoreId=112&dmfrom=wx&from=wx&shareKey=1499319940240",
                        "sort": 6,
                        "storeId": 112,
                        "venderId": 1
                    }
                ]

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.show{
    img{
        width: 100%;
        display: block;
    }
}
.park{
    width: 100%;
    aside{
        width: 100%;
        border-bottom: 1px solid #ccc;
    }
    
    ul{
        width: 100%;
         display: flex;
         li{
            flex:1;
        }
    }
}
.optimization{
    width: 100%;
    ul{
        width: 100%;
        li{
            width: 100%;
            display: flex;
            flex-wrap:wrap;
            a{
                width: 33%;
            }
        }
    }
}
.live{
    width: 100%;
    ul{
        width: 100%;
        li{
            display: flex;
            flex-wrap:wrap;
            a{
                width: 25%;
                &:nth-child(1){
                    width: 50%;
                }
                &:nth-child(2){
                    width: 50%;
                }
            }
        }
    }
}
.ad{
    width: 100%;
    margin: 0.1rem 0;
    img{
        width: 100%;
        display: block;
    }
}
</style>
