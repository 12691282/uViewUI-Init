<template>
	<view class="wrap">
		<view class="u-page">
			<u-swiper :list="list" :effect3d="true" :title="true"></u-swiper>
			<u-line color="green" margin="20rpx" border-style="dashed"/>
		</view>
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<navigate> </navigate>
	</view>
</template>

<script>
	import navigate from '../components/navigate.vue'
 	export default {
		components: {
		    navigate
		},
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					  },
					  {
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					  },
					  {
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}]
			}
		},
		onLoad() {

		},
		methods: {
		 
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
