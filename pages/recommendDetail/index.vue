<template>
	<view class="wrap" style="background-color: #e2e6e6 ;">
		<view style="background-color: #FFFFFF; padding: 10px;border-radius: 10px;">
			<u-lazy-load threshold="-450" border-radius="10" :image="url" ></u-lazy-load>
			<div>{{title}}</div>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				url:'',
				title:''
			}
		},
		onLoad(option) {
			let data = JSON.parse(decodeURIComponent(option.data));
			this.url = data.image
			this.title = data.title
		},
		methods: {
		 
		}
	}
	
</script>

<style lang="scss" scoped>
	
</style>
