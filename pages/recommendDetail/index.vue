<template>
	<view class="wrap" style="background-color: #e2e6e6 ;">
		<div style="background-color: #FFFFFF; padding: 10px;border-radius: 10px;">
			<image :src="url" style="width: 100%;" ></image>
			<div>{{title}}</div>
		</div>
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
			console.log('recommendDetail onload data', data)
			this.url = data.image
			this.title = data.title
		},
		methods: {
		 
		}
	}
	
</script>

<style lang="scss" scoped>
	
</style>
