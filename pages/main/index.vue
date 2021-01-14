<template>
	<view class="wrap">
			<home  v-if="mainStyle == 'home'" ref="homeRef" ></home>
			<messages  v-if="mainStyle == 'messages'"></messages>
			<mypage  v-if="mainStyle == 'mypage'"></mypage>
			<u-loadmore v-if="mainStyle == 'home'" bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="testLoad"></u-loadmore>
			<u-back-top :scroll-top="scrollTop" tips="顶部" duration="200"></u-back-top>
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
				mainStyle: 'home',
				scrollTop: 0,
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
				current: 0,
				loadStatus: 'loadmore',
				initMainList: [{
						district:'金牛区',
						constellation:'处女座',
						title: '北国风光，千里冰封，万里雪飘',
						image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3179775796,2435240786&fm=26&gp=0.jpg'
					},
					{
						district:'青羊区',
						constellation:'摩羯座',
						title: '望长城内外，惟余莽莽',
						image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2601716608,310672040&fm=26&gp=0.jpg'
					},
					{
						district:'青羊区',
						constellation:'双子座',
						title: '大河上下，顿失滔滔',
						image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3553830054,2245868447&fm=26&gp=0.jpg'
					},
					{
						district:'青羊区',
						constellation:'天秤座',
						title: '欲与天公试比高',
						image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1507700108,1850855924&fm=11&gp=0.jpg'
					}]
			}
		},
		onPageScroll(e) {
				this.scrollTop = e.scrollTop;
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.$refs.homeRef.addRandomData()
				this.loadStatus = 'loadmore';
			}, 1000);
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
