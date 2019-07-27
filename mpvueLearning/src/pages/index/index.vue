<template>
    <div class="indexContainer">
      
      <img v-if="isShow" :src="userInfo.avatarUrl" alt="" class="index_img" >
      <button v-else open-type="getUserInfo" @getuserinfo="getInfo">获取用户信息</button>
      <p class="userName">hello {{userInfo.nickName}}</p>
      <div class="goStudy" @click="toDetail">
        <!-- stop修饰符可以阻止冒泡 -->
        <p>开启小程序之旅</p>
      </div>
    </div>  
</template>

<script>
export default {
  //类似于小程序的data池
  data() {
    return {
      userInfo:{
      },
      isShow:false,
    }
  },
  onLoad(){
    console.log("hahhaha")
  },
  beforeMount() {
    //挂载前获取用户信息
    this.handleGetInfo();
  },
  
  methods: {
    toDetail(){
    wx.navigateTo({
      url: '/pages/list/main',
      success: (result)=>{
        
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
    handleGetInfo(){
      wx.getUserInfo({
      withCredentials: 'false',
      lang: 'zh_CN',
      timeout:10000,
      success: (result)=>{
        console.log(result);
        this.userInfo = result.userInfo;
             },
      fail: ()=>{
        console.log("获取失败！")
      },
      complete: ()=>{}
    });
    },
    getInfo(data){
      console.log(data)
      //获取用户登录信息
      
      //判断是否授权
      if(data.mp.detail.rawData){
        this.handleGetInfo();
        this.isShow = true;
      }
    }
  },
} 
</script>

<style>
  page{
    background: #8ed145;
  }
  .indexContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .index_img{
    width: 200rpx;
    height: 200rpx;
    border-radius: 100rpx;
    margin: 100rpx 0;
  }
  
  .userName{
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
  }
  .goStudy{
    width: 200rpx;
    height: 80rpx;
    border: 1rpx solid rgb(219, 5, 5);
    font-size: 24rpx;
    line-height: 80rpx;
    text-align: center;
    border-radius: 10rpx;
  }
</style>
