<template>
  <div class="home">
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

  <van-tabs v-model="active" swipeable 
  title-active-color="rgb(0, 81, 187)"
  color="rgb(0, 81, 187)">

  <van-tab title="学术">
  
 <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="200px">
    <van-swipe-item style="height:200px"> <img src="../assets/img/turn/p1.jpg" alt="" class="img_turn"></van-swipe-item>
    <van-swipe-item style="height:200px"> <img src="../assets/img/turn/p2.png" alt="" class="img_turn"></van-swipe-item>
    <van-swipe-item style="height:200px"> <img src="../assets/img/turn/p3.png" alt="" class="img_turn"></van-swipe-item>
    <van-swipe-item style="height:200px"> <img src="../assets/img/turn/p4.png" alt="" class="img_turn"></van-swipe-item>
</van-swipe>

<van-grid>
  <van-grid-item icon="gem" text="定制" badge="99+"  />
  <van-grid-item icon="fire" text="设计"  />
  <van-grid-item icon="photo" text="平面" />
  <van-grid-item icon="browsing-history " text="展示"  color="#1989fa"/>
</van-grid>

<van-collapse v-model="activeName" accordion>
  <van-collapse-item title="定制咨询" name="1" >请联系作者qq:51627717</van-collapse-item>
  <van-collapse-item title="价格清单" name="2">新人首单优惠</van-collapse-item>
  <van-collapse-item title="加入我们" name="3">简历投递位置：51627717@qq.com</van-collapse-item>
</van-collapse>



  </van-tab>
  <van-tab title="课件">
    <van-swipe-cell>
  <van-card
    num="2"
    price="2.00"
    desc="描述信息"
    title="商品标题"
    class="goods-card"
    thumb="https://img.yzcdn.cn/vant/cat.jpeg"
  />
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" />
  </template>
</van-swipe-cell>
  </van-tab>
  <van-tab title="展示">
    <img src="../assets/img/PCR2.jpg" alt="" class="main_img">
  </van-tab>
  <van-tab title="评奖">
    <img src="../assets/img/PCR3.jpg" alt="" class="main_img">
  </van-tab>

</van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
export default {
  name: 'Home',
  data() {
    return {
      activeName: '1',
      value:'',
      active:'',
      images: [
        '../assets/img/turn/p1.jpg',
        '../assets/img/turn/p1.jpg',
        '../assets/img/turn/p1.jpg',
        '../assets/img/turn/p1.jpg',
      ],
    }
  },
}
</script>

<style type="text/css">
  @import url("../assets/css/home_style.css");
</style>
