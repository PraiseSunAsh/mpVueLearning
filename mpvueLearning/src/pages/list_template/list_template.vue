<template>
  <div>
    <div>
      <img src="/static/images/bysj.png" alt="">
      <span>{{item.date}}</span>
    </div>
    <p>哈哈哈</p>
    <img src="/static/images/cate1.png " alt="">
    <p>这里是一段话</p>
    <div>
      <img src="/static/images/gyzdh.jpeg" alt="">
      <span>66</span>
      <img src="/static/images/more.png" alt="">
      <span>88</span>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'item',
    'index'
  ]
}
</script>

<style>
  .tmpContainer {
  display: flex;
  flex-direction: column;
  border-bottom: 1rpx solid #eee;
}

.avatar_data {
  padding: 10rpx;
}

.avatar_data img {
  width: 60rpx;
  height: 60rpx;
  vertical-align: middle;
  margin-right: 10rpx;
}

.avatar_data span {
  font-size: 28rpx;
  color: #333;
}

.compnay {
  font-size: 40rpx;
  font-weight: bold;
  padding: 10rpx;
}

.detail_img {
  width: 100%;
  height: 460rpx;
}

.content {
  font-size: 32rpx;
  text-indent: 32rpx;
  line-height: 50rpx;
  letter-spacing: 3rpx;
}

.view_star_container img {
  width: 32rpx;
  height: 32rpx;
  vertical-align: middle;
  margin-left: 10rpx;
}

.view_star_container span {
  font-size: 28rpx;
  color: #333;
  margin-left: 10rpx;
}

</style>
