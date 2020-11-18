<template>
  <div id="app">
    <MainTabbar></MainTabbar>
    <router-view/>
  </div>
</template>
<script>
import MainTabbar from 'components/tabbar/MainTabbar'
export default {
  name: 'App',
  components:{
    MainTabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
img{
  height: 24px;
  width: 24px;
  margin-top: 10px;
  margin-bottom: 2px;
}
.item{
  font-size: 12px;
}
</style>
