<template>
	<view class="wrap">
		<view class="u-page">
			<u-swiper :list="list" :effect3d="true" :title="true"></u-swiper>
			<u-line color="green" margin="20rpx" border-style="dashed"/>
		</view>
	</view>
	
</template>

<script>
	export default {
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
		mounted() {
			console.log('home mounted')
		},
		methods: {
		 
		}
	}
	
</script>

<style lang="scss" scoped>
	
</style>
