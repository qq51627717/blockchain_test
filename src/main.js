import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'vant';
import { Col, Row } from 'vant';
import { Search } from 'vant';
import { Tab, Tabs } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { SwipeCell } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Collapse, CollapseItem } from 'vant';   //vant折叠面板
import { NavBar } from 'vant';  //vant导航栏
import { Lazyload } from 'vant';

Vue.use(NavBar);
Vue.use(Lazyload);

Vue.config.productionTip = false

Vue.use(Button).use(Col).use(Row).use(Search).use(Tab).use(Tabs);
Vue.use(Swipe).use(SwipeItem).use(SwipeCell).use(Tabbar).use(TabbarItem);
Vue.use(Grid).use(GridItem).use(Collapse).use(CollapseItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
