<template>
  <van-tabbar route active-color="#f00" inactive-color="white" :fixed="true">
    <van-tabbar-item replace to="/" icon="wap-home">
      首页
    </van-tabbar-item>
    <van-tabbar-item replace to="/Sort" icon="apps-o">
      分类
    </van-tabbar-item>
    <van-tabbar-item replace to="/Cart" icon="shopping-cart-o">
      购物车
    </van-tabbar-item>
    <van-tabbar-item replace to="/Login" icon="contact">
      会员中心
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    }
  },
}
</script>

<style scoped>
.van-tabbar{
  background-color: #4c4c4c;
}
</style>
