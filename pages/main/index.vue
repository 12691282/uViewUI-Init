<template>
	<view class="wrap">
		<home  v-if="mainStyle == 'home'"></home>
		<messages  v-if="mainStyle == 'messages'"></messages>
		<mypage  v-if="mainStyle == 'mypage'"></mypage>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="tablist" :border-top="false" :before-switch="beforeSwitch" >
		</u-tabbar>
	</view>
</template>

<script>
	import home from '../home/index.vue'
	import messages from '../messages/index.vue'
	import mypage from '../mypage/index.vue'
	
 	export default {
		components: {
			home, mypage,messages
		},
		data() {
			return {
				mainStyle: 'mypage',
				tablist: [{
								iconPath: "home",
								selectedIconPath: "home-fill",
								text: '朋友圈',
								path: 'home',
								isDot: true,
								customIcon: false,
							},
							{
								iconPath: "volume-up",
								selectedIconPath: "volume-up-fill",
								text: '消息',
								path: 'messages',
								isDot: true,
								customIcon: false,
							},
							{
								iconPath: "account", 
								selectedIconPath: "account-fill",
								text: '我的',
								path: 'mypage',
								isDot: true,
								customIcon: false,
							}
						],
				current: 2
			}
		},
		onLoad() {

		},
		methods: {
			
			async beforeSwitch(index) {
				this.mainStyle = this.tablist[index].path
				return true; 
			}
			 
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
