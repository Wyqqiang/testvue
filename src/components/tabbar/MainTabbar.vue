<template>
    <div>
      <Tabbar>
        <TabbarItem link="/home" activeColor="red">
          <img slot="icon" src="~assets/image/logo.png" alt="">
          <img slot="activeicon" src="~assets/image/a.jpg" alt="">
          <div class="item" slot="text">首页</div>
        </TabbarItem>
        <TabbarItem link="/cat" activeColor="red">
          <img slot="icon" src="~assets/image/logo.png" alt="">
          <img slot="activeicon" src="~assets/image/a.jpg" alt="">
          <div class="item" slot="text">分类</div>
        </TabbarItem>
        <TabbarItem link="/shop" activeColor="red">
          <img slot="icon" src="~assets/image/logo.png" alt="">
          <img slot="activeicon" src="~assets/image/a.jpg" alt="">
          <div class="item" slot="text">购物车</div>
        </TabbarItem>
        <TabbarItem link="/me" activeColor="red">
          <img slot="icon" src="~assets/image/logo.png" alt="">
          <img slot="activeicon" src="~assets/image/a.jpg" alt="">
          <div class="item" slot="text">我的</div>
        </TabbarItem>
      </Tabbar>
    </div>
</template>

<script>
import Tabbar from 'components/tabbar/Tabbar'
import TabbarItem from 'components/tabbar/TabbarItem'
export default {
name: "MainTabbar",
  components:{
  TabbarItem,
    Tabbar
  }
}
</script>

<style scoped>

</style>
