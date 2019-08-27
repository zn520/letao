<template>
  <div id="login">
    <div>
      <van-nav-bar title="登录" left-arrow :fixed="true" :border="false" @click-left="$router.push('/')" class="header" />
    </div>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .header{
    background-color: #e6002d;
  }
  .van-nav-bar__title{
    color: #fff;
  }
  .van-nav-bar .van-icon {
    color: #fff;
  }
</style>
