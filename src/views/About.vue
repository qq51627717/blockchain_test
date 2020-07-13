<template>
  <div class="about">
    
    <van-row>
      <van-col >
        <img src="../assets/img/Octop_logo.png" alt="" class="logo"> 
      </van-col>
      <van-col >
        <van-search v-model="value" placeholder="请输入搜索关键词" class="index_header_search"/>
      </van-col>
      <van-col >
        <div class="loginBtn">登陆</div>
      </van-col>
    </van-row>
    
<van-nav-bar
  title="推荐"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
   data() {
    return {
      value: '',
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};
</script>