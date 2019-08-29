<template>
  <div>
    <div class="header">
      <div class="header_con">
        <a title class="header_back"></a>
        <div class="header_title">
          <div>
            <img src="../../public/images/logo.png" alt>
          </div>
        </div>
      </div>
    </div>
    <!-- 首页导航栏 -->
    <div class="tab">
      <van-tabs :line-width="70" swipeable title-active-color="#ff4444" :sticky="true">
        <van-tab v-for="(item,index) in title" :title="item" :key="index">
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div v-if="item == '首页'">
              <!-- 首页搜索框 -->
              <div>
                <van-row></van-row>
              </div>
              <!-- 首页轮播 -->
            </div>
            <!-- VIP专区 -->
            <div v-if="item == 'VIP专区'"></div>
            <!-- 工厂原创 -->
            <div v-if="item == '工厂原创'"></div>
            <!-- 运动馆 -->
            <div v-if="item == '运动馆'"></div>
            <!-- 女士馆 -->
            <div v-if="item == '女士馆'"></div>
            <!-- 男士馆 -->
            <div v-if="item == '男士馆'"></div>
            <!-- 萌童馆 -->
            <div v-if="item == '萌童馆'"></div>
            <!-- 箱包馆 -->
            <div v-if="item == '箱包馆'"></div>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: [
        "首页",
        "VIP专区",
        "工厂原创",
        "运动馆",
        "女士馆",
        "男士馆",
        "萌童馆",
        "箱包馆"
      ],
      isLoading: false
    };
  },
  methods: {
    //下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
      }, 500);
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #e6002d;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.header .header_con {
  height: 2rem;
  position: relative;
  padding: 0 50px 0 50px;
}
.header .header_back {
  position: absolute;
  top: 50%;
  left: 10px;
  font-size: 24px;
  transform: translate(0, -50%);
}
.header_con a {
  color: #ffffff;
}
.header .header_title {
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 40px;
  line-height: 40px;
  font-size: 0.76rem;
}
.tab {
  width: 100%;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #e9e9e9;
  margin-top: 40px;
}
</style>
