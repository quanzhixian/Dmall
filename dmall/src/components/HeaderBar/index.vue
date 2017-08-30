<template>
    <header class="header-bar">
        <div class='left-icon-group'>
            <slot name='left-icon'></slot>
        </div>
        <h2 class='title'>{{title}}</h2>
        <div class='right-icon-group'>
            <slot name='right-icon'></slot>
        </div>
    </header>
</template>



<script>
export default {
  name: 'HeaderBar',
  props:{
    'title':{
        default:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .header-bar{
        width: 100%;
        padding:0  3%;
        height: 0.44rem;
        background:#fff;
        .title{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            text-align: center;
            line-height: 0.44rem
        }
        .left-icon-group{
            float: left;
            height: 100% ;
            line-height: 0.44rem;
            position: relative;
            z-index: 100;
        }
        .right-icon-group{
            float: right;
            height: 100% ;
            line-height: 0.44rem;
            position: relative;
            z-index: 100;
            padding-top: 0.07rem;
        }
        .icon-arrow-down{
            transform: rotate(-90deg);
        }
    }
</style>
