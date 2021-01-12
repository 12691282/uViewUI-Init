<template>
	<view class="wrap">
			<view v-if="!userlogin" class="head">
					<u-row gutter="16">
						<u-col span="10" style="padding: 0px 0px;">
								<view >
									<u-top-tips ref="uTips"></u-top-tips>
									<u-button type="error" shape="circle"  open-type="getUserInfo" @getuserinfo="checkUserInfo"
									:custom-style="{marginLeft: '150rpx'}"  plain>登陆</u-button>
									
								</view>
						</u-col>
					</u-row>
		   </view>
		   <view v-if="userlogin" class="head">
					<view class="user-center">
						<u-avatar :src="avatarActionUrl" @tap="preAvatar" ></u-avatar>
						<view class="username">
							<text>{{nickName}}</text>
						</view>
					</view>
		   </view>
		   <!-- 个人中心 -->
		   <view class="grid">
			   <view>个人中心</view>
			  <u-grid :col="4" :border="false" @click="toNav" >
			  		<u-grid-item index="/pages/mypage/my-info">
			  			<u-icon class="gn-icon" style="margin-left: 10rpx;" name="account" color="blue" :size="46"></u-icon>
			  			<view >个人信息</view>
			  		</u-grid-item>
			  		<u-grid-item>
			  			<image class="gn-icon" src="/static/icon/m_2.png"></image>
			  			<view class="grid-text">我的活动</view>
			  		</u-grid-item>
			  		<u-grid-item>
			  			<u-icon class="gn-icon" style="margin-left: 10rpx;" name="heart" color="red" :size="46"></u-icon>
			  			<view class="grid-text">我的喜欢</view>
			  		</u-grid-item>
					
					<u-grid-item>
						<u-icon class="gn-icon" style="margin-left: 10rpx;" width="80" height="90" name="chat" color="green" :size="50"></u-icon>
						<view class="grid-text">我的消息</view>
					</u-grid-item>
			  	</u-grid>   
			   
		   </view>
		   
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarActionUrl: '',
				nickName: '',
				userlogin: this.globalData.userlogin
			}
		},
		mounted() {
			if(this.userlogin){
				this.setLoginUserInfo();
			}
		},
		methods: {
			preAvatar() {
				wx.previewImage({
					current: '', // 当前显示图片的 http 链接
					urls: [this.avatarActionUrl] // 需要预览的图片 http 链接列表
				})
			},
			checkUserInfo(e){
				let self = this;
				wx.checkSession({
					success () {
						//session_key 未过期，并且在本生命周期一直有效
						console.log('checkSession success')
						self.getWechartInfo();
					},
					fail () {
						console.log('checkSession fail')
						// session_key 已经失效，需要重新执行登录流程
						self.onLoginWechat();
					}
			   })
			},
			onLoginWechat(){
				let self = this;
				wx.login({
					success (res) {
					  if (res.code) {
						self.getWechartInfo();
					  }
					}
				})
			},
			getWechartInfo(){
				let self = this;
				wx.getUserInfo({
					success (res) {
						self.globalData.userInfo = res.userInfo
						self.globalData.userlogin =  true
						self.userlogin =  true
						self.setLoginUserInfo()
					}
				})
			},
			setLoginUserInfo(){
				this.avatarActionUrl = this.globalData.userInfo.avatarUrl
				this.nickName = this.globalData.userInfo.nickName
			},
			toNav(url){
				uni.navigateTo({
					url: url
				})
			}
		}
	}
	
</script>

<style lang="scss">
	@import  "mypage.css"
</style>
