<template >
  <div class="item" @click="itemClick">
    <div>
      <slot v-if="!isActive" name="icon"></slot>
      <slot v-else name="activeicon"></slot>
    </div>
<!--    <div :class="{active:isActive}">-->
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props:{
    link:String,
    activeColor:{
      type:String
    }
  },
  computed:{
    isActive(){
      //console.log(this.$route.path)
      console.log(this.path)
      return this.$route.path.indexOf(this.link)===0
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{color:'blue'}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.link)
    }
  }
}
</script>

<style scoped>
  .item{
    flex: 1;
    text-align: center;
  }
  .active{
    color: red;
  }
</style>
