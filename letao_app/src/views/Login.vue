<template>
  <div id="login">
    <van-nav-bar title="登录" left-arrow @click-left="$router.push('/')" :fixed="true" :border="false" />
    <div class="main">
      <div class="memberLogin">
        <div class="memberLogin_from" id="userLogin">
          
        </div>
      </div>
    </div>
    <footer-bar />
  </div>
</template>

<script>
export default {
  data() {
    return {
      upwd: ""
    }
  },
};
</script>
                                                    
<style scoped>
.van-nav-bar {
  background-color: #e6002d;
}
.van-nav-bar__title {
  color: #fff;
}
.van-nav-bar .van-icon {
  color: #fff;
}
#login .main {
  margin-top: 46px;
}
#login .main .memberLogin {
  padding: 15px 10px 10px 10px;
}
.main .memberLogin .memberLogin_from {
  padding: 15px;
  border: 1px solid #ccc;
}
</style>
