<template>
  <div class="home-page">
    <HeaderBar>
      <div slot="left-icon">
        <a href="javascript:;" >送至:海淀区<i class="icon icon-arrow-down"></i></a>
      </div>

      <div slot="right-icon">
        <router-link to="/search" class='icon icon-search'></router-link>
      </div>
    </HeaderBar>
    <div class="dmall-content">
      <SlideTab :menuList="menuList">
        <div slot="#super">
            <Super :super-list='superdata'></Super>
        </div>
        <div slot="#earch">
            <Earth></Earth>
        </div>
      </SlideTab>
    </div>
    <FooterBar></FooterBar>
  </div> 
</template>

<script>
import FooterBar from '@/components/FooterBar';
import HeaderBar from '@/components/HeaderBar';
import SlideTab from './components/SlideTab';
import Super from './components/SlideContent/super';
import Earth from './components/SlideContent/earth';

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      menuList: [
        {
          name: "多点超市",
          icon: "https://img.dmallcdn.com/bizItem/201612/c61ded35-a9f4-49a0-9fc3-193b6bafefec",
          component: "#super"
        },
        {
          name: "全球精选",
          icon: "https://img.dmallcdn.com/bizItem/201707/9b9461f9-b67f-48f6-a504-c120942d537c",
          component: "#earch"
        }
      ],
      superdata:{
         bannerlist:[],
         menulist:[],
         productlist:[]
      }
      
    }
  },
  components: {
    FooterBar,
    HeaderBar,
    SlideTab,
    Super,
    Earth
  },
  created () {
    var that = this;
    this.$axios.get('/businessIndex').then(function (res) {
        var data = res.data.data.pageModules;
        that.superdata.bannerlist=data[0].dataList;
        that.superdata.menulist=data[2].dataList;
        for(var i=12;i<data.length;i++) {
            that.superdata.productlist.push(data[i])
        }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    .dmall-content{
        flex:1;
        overflow-y: scroll;
    }
    .home-page{
        display: flex;
        flex-direction:column;
    }
</style>
