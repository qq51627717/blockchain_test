<template>
  <div id="app">
  <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="search" replace to="/about">推荐</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" replace to="/shop">购物车</van-tabbar-item>
  <van-tabbar-item icon="friends-o" replace to="/my">我的</van-tabbar-item>

</van-tabbar>

    <router-view/>
  </div>
</template>

<style>

</style>


