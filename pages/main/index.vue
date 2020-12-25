<template>
	<view class="wrap">
		<home ref="homeRef" v-if="mainStyle == 'home'"></home>
		<mypage ref="mypageRef" v-if="mainStyle == 'mypage'"></mypage>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="tablist" :border-top="false" :before-switch="beforeSwitch" >
		</u-tabbar>
	</view>
</template>

<script>
	import home from '../home/index.vue'
	import mypage from '../mypage/index.vue'
	
 	export default {
		components: {
			home, mypage
		},
		data() {
			return {
				mainStyle: 'home',
				tablist: [{
								iconPath: "home",
								selectedIconPath: "home-fill",
								text: '测试主页',
								path: 'home',
								isDot: true,
								customIcon: false,
							},
							{
								iconPath: "photo",
								selectedIconPath: "photo-fill",
								text: '放映厅',
								path: 'home',
								isDot: true,
								customIcon: false,
							},
							{
								iconPath: "play-right",
								selectedIconPath: "play-right-fill",
								text: '直播',
								path: 'mypage',
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
				current: 0
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
