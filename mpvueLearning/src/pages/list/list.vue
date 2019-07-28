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
      <ListTmp/>
    </div>
  </div>
</template>
<script>
//导入组件
import ListTmp from "../list_template/list_template.vue";
export default {
  //注册当前组件
  components: { ListTmp }
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
