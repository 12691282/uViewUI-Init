<template>
	<view class="wrap">
		我的首页
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<navigate></navigate>
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
			 
			}
		},
		onLoad() {
	
		},
		methods: {
		 
		}
	}
	
</script>

<style lang="scss" scoped>
	
</style>
