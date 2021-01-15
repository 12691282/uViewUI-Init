<template>
	<view >
		<u-swipe-action :show="item.show" :index="index" 
					v-for="(item, index) in msglist" :key="item.id" @click="click" 
					:options="options"> 
			<view class="item u-border-bottom">
				<u-icon class="custom-icon" name="error-circle" color="#2979ff" size="40px"></u-icon>
				<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
				<view class="title-wrap">
					<text class="title u-line-2">{{ item.title }}</text>
				</view>
			</view>
		</u-swipe-action>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msglist: [],
				options: [
					{
						text: '删除',
						style: {
							backgroundColor: '#dd524d'
						}
					}
				]
			 
			}
		},
		mounted() {
			this.initMessageList()
		},
		methods: {
			initMessageList(){
				let self = this; 
				uni.getStorage({
				    key: 'messages_list_key',
				    success: function (res) {
				        self.msglist = res.data;
				    }
				});
			},
			click(_index) {
					this.msglist.splice(_index, 1);
					uni.setStorageSync('messages_list_key', this.msglist);
					this.$u.toast(`删除成功`);
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.item {
			margin: 6rpx;
			display: flex;
			padding: 8px;
			border-radius: 10px;
			border: 1px solid #42acff
			
	}
	.custom-icon {
		flex: 0 0 120rpx
	}
</style>
