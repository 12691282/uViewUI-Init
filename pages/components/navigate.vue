<template>
	
	<view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="current" :list="tablist" :border-top="false" :before-switch="beforeSwitch" >
		</u-tabbar>
	</view>
	
</template>


<script>
	
	export default {
		data() {
			return {
				tablist: [{
							iconPath: "home",
							selectedIconPath: "home-fill",
							text: '测试主页',
							path: '/pages/main/index',
							isDot: true,
							customIcon: false,
						},
						{
							iconPath: "photo",
							selectedIconPath: "photo-fill",
							text: '放映厅',
							path: '/pages/main/index',
							isDot: true,
							customIcon: false,
						},
						{
							iconPath: "play-right",
							selectedIconPath: "play-right-fill",
							text: '直播',
							path: '/pages/main/index',
							isDot: true,
							customIcon: false,
						},
						{
							iconPath: "account", 
							selectedIconPath: "account-fill",
							text: '我的',
							path: '/pages/home/index',
							isDot: false,
							customIcon: false,
						},
					],
					current: 0
			}
		},
		onLoad() {
	
		},
		methods: {
			async beforeSwitch(index) {
				var pathUrl = this.tablist[index].path
				this.$u.route(pathUrl);
				return true; 
			}
		}
	}
	
</script>


<style>
</style>
