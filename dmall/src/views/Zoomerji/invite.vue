<template>
  <div class="invite-page">
	  	<a class='backto' href='JavaScript:history.back(-1)'></a>
	     邀请页
  </div>
</template>

<script>
export default {
  name: 'invite',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.invite-page{
	padding: 0.1rem;
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
</style>
