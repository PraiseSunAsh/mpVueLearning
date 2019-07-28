<template>
  <div class>
    <swiper indicator-dots="true" indicator-active-color="green" indicator-color="pink">
      <swiper-item class item-id>
        <image src="/static/images/gjjs.png" />
      </swiper-item>
      <swiper-item class item-id>
        <image src="/static/images/gjjs.png" />
      </swiper-item>
      <swiper-item class item-id>
        <image src="/static/images/gjjs.png" />
      </swiper-item>
      <swiper-item class item-id>
        <image src="/static/images/gjjs.png" />
      </swiper-item>
    </swiper>
    <div>
      <ListTmp v-for="(item, index) in listTmp" :key="index"  :item='item' :index = 'index' />
    </div>
  </div>
</template>
<script>
//导入组件
//当一个组件获取多个状态时，可以用mapState
import {mapState} from 'vuex'
import ListTmp from "../list_template/list_template.vue";
export default {
  //注册当前组件
  components: { ListTmp },
  //在beforemount前先分发一下action
  beforeMount() {
    this.$store.dispatch('getList');
  },
  //在计算属性中获取状态
  computed: {
    //将listTmp映射到mapState中
    ...mapState(['listTmp'])
  },
};
</script>
<style>
.listContainer swiper {
  width: 100%;
  height: 400rpx;
}
.listContainer swiper image {
  width: 100%;
  height: 100%;
}
</style>
