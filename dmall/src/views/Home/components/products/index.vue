<template>
    <section class='products'>
    {{productList}}
        <div class="banner">
            <img src="https://img.dmallcdn.com/mIndex/201707/530d896b-fbcd-4c99-b561-0cbc1f389bbb_750H" alt="">
        </div>
        <div class="mould-ClickTrace">
            <dl>
                <dt>
                    <img src="https://img.dmallcdn.com/20170711/25487a49-bdb3-4c51-9829-543f0efad6b1_360x360H" alt="">
                </dt>
                <dd>
                    <p>甜玉米1根</p>
                    <div class="price">
                        <div class="Price-bar">
                            <span class="worldoriginal">￥2.00</span>
                            <span class='promo-price'>#0.99</span>
                        </div>
                        <div class="add-cart-bar">+</div>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="https://img.dmallcdn.com/20170711/25487a49-bdb3-4c51-9829-543f0efad6b1_360x360H" alt="">
                </dt>
                <dd>
                    <p>甜玉米1根</p>
                    <div class="price">
                        <div class="Price-bar">
                            <span class="worldoriginal">￥2.00</span>
                            <span class='promo-price'>#0.99</span>
                        </div>
                        <div class="add-cart-bar">+</div>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="https://img.dmallcdn.com/20170711/25487a49-bdb3-4c51-9829-543f0efad6b1_360x360H" alt="">
                </dt>
                <dd>
                    <p>甜玉米1根</p>
                    <div class="price">
                        <div class="Price-bar">
                            <span class="worldoriginal">￥2.00</span>
                            <span class='promo-price'>#0.99</span>
                        </div>
                        <div class="add-cart-bar">+</div>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="https://img.dmallcdn.com/20170711/25487a49-bdb3-4c51-9829-543f0efad6b1_360x360H" alt="">
                </dt>
                <dd>
                    <p>甜玉米1根</p>
                    <div class="price">
                        <div class="Price-bar">
                            <span class="worldoriginal">￥2.00</span>
                            <span class='promo-price'>#0.99</span>
                        </div>
                        <div class="add-cart-bar">+</div>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="https://img.dmallcdn.com/20170711/25487a49-bdb3-4c51-9829-543f0efad6b1_360x360H" alt="">
                </dt>
                <dd>
                    <p>甜玉米1根</p>
                    <div class="price">
                        <div class="Price-bar">
                            <span class="worldoriginal">￥2.00</span>
                            <span class='promo-price'>#0.99</span>
                        </div>
                        <div class="add-cart-bar">+</div>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="https://img.dmallcdn.com/20170711/25487a49-bdb3-4c51-9829-543f0efad6b1_360x360H" alt="">
                </dt>
                <dd>
                    <p>甜玉米1根</p>
                    <div class="price">
                        <div class="Price-bar">
                            <span class="worldoriginal">￥2.00</span>
                            <span class='promo-price'>#0.99</span>
                        </div>
                        <div class="add-cart-bar">+</div>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="https://img.dmallcdn.com/20170711/25487a49-bdb3-4c51-9829-543f0efad6b1_360x360H" alt="">
                </dt>
                <dd>
                    <p>甜玉米1根</p>
                    <div class="price">
                        <div class="Price-bar">
                            <span class="worldoriginal">￥2.00</span>
                            <span class='promo-price'>#0.99</span>
                        </div>
                        <div class="add-cart-bar">+</div>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="https://img.dmallcdn.com/20170711/25487a49-bdb3-4c51-9829-543f0efad6b1_360x360H" alt="">
                </dt>
                <dd>
                    <p>甜玉米1根</p>
                    <div class="price">
                        <div class="Price-bar">
                            <span class="worldoriginal">￥2.00</span>
                            <span class='promo-price'>#0.99</span>
                        </div>
                        <div class="add-cart-bar">+</div>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <img src="https://img.dmallcdn.com/20170711/25487a49-bdb3-4c51-9829-543f0efad6b1_360x360H" alt="">
                </dt>
                <dd>
                    <p>甜玉米1根</p>
                    <div class="price">
                        <div class="Price-bar">
                            <span class="worldoriginal">￥2.00</span>
                            <span class='promo-price'>#0.99</span>
                        </div>
                        <div class="add-cart-bar">+</div>
                    </div>
                </dd>
            </dl>
        </div>   
    </section>
</template>

<script>
export default {
  name: 'Products',
  props:['productList'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  upadted () {
    console.log(this.productList)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
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
            dl{
                width: 33.33%;
                border-bottom: 1px solid #f0f0f0;
                border-right: 1px solid #f0f0f0;
                padding-bottom: 0.05rem;
                &:nth-child(3n){
                    border-right:none;
                }
                dt{
                    width: 100%;
                    img{
                        width: 88%;
                        margin-left: 6%;
                        display: block;
                    }
                }
                dd{
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
