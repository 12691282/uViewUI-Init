<template>
	<view class="wrap">
		<u-row gutter="16">
			<u-col span="5">
				<span class="head-marge">头像</span>
			</u-col>
			<u-col span="7">
				<view class="userinfo">
					<block>
						<!--u-skeleton-circle 绘制圆形-->
						<image class="userinfo-avatar u-skeleton-circle" :src="userInfo.avatarUrl"></image>
					</block>
				</view>
			</u-col>
		</u-row>
		<u-row class="line-marge" gutter="16" justify="space-between">
			<u-line color="black" border-style="solid"/>
		</u-row>
		<u-row gutter="16" justify="space-between">
			 <u-col span="5">
			 	<span class="head-marge">姓名</span>
			 </u-col>
			 <u-col span="7">
			 	<view class="userinfo">
			 		<block>
						<u-input  class="input-marge" maxlength=5 v-model="userInfo.nickName" />
			 		</block>
			 	</view>
			 </u-col>
		</u-row>
		
		<u-row class="line-marge" gutter="16" justify="space-between">
			<u-line color="black" border-style="solid"/>
		</u-row>
		
		<u-row gutter="16" justify="space-between">
			 <u-col span="5">
			 	<span class="head-marge">性别</span>
			 </u-col>
			 <u-col span="7">
			 	<view class="userinfo">
			 		<block>
						<u-input type="select" class="input-marge" :select-open="sexSheetShow" placeholder="请选择性别" v-model="userInfo.sex" @click="sexSheetShow = true"></u-input>
			 		</block>
			 	</view>
			 </u-col>
		</u-row>
		
		
		<u-row class="line-marge" gutter="16" justify="space-between">
			<u-line color="black" border-style="solid"/>
		</u-row>
		
		<u-row gutter="16" justify="space-between">
			 <u-col span="5">
			 	<span class="head-marge">手机号</span>
			 </u-col>
			 <u-col span="7">
			 	<view class="userinfo">
			 		<block>
						<u-input class="input-marge" maxlength=11 placeholder="请输入手机号" v-model="userInfo.phoneNumber" />
			 		</block>
			 	</view>
			 </u-col>
		</u-row>
		
		<u-row class="line-marge" gutter="16" justify="space-between">
			<u-line color="black" border-style="solid"/>
		</u-row>
		
		<u-row gutter="16" justify="space-between">
			 <u-col span="5">
			 	<span class="head-marge">职业</span>
			 </u-col>
			 <u-col span="7">
			 	<view class="userinfo">
			 		<block>
						<u-input class="input-marge" maxlength=10 placeholder="请输入职业" v-model="userInfo.occupation" />
			 		</block>
			 	</view>
			 </u-col>
		</u-row>
		
		<u-row class="line-marge" gutter="16" justify="space-between">
			<u-line color="black" border-style="solid"/>
		</u-row>
		
		<u-row gutter="16" justify="space-between">
			 <u-col span="5">
			 	<span class="head-marge">出生年月</span>
			 </u-col>
			 <u-col span="7">
			 	<view class="userinfo">
			 		<block>
			 			<!--u-skeleton-fillet 绘制圆角矩形-->
						<u-input class="input-marge" placeholder="请输入出生年月"   v-model="userInfo.birthday" @click="changeBirthday" disabled/>
			 		</block>
			 	</view>
			 </u-col>
		</u-row>
		<u-action-sheet :list="sexlist" v-model="sexSheetShow" @click="sexSheetCallback"></u-action-sheet>
		<u-picker
			mode="time"
			:defaultTime="userInfo.birthday"
			v-model="birthdateCalendar"
			:params="birthdateParams"
			:end-year="maxBirthdayDate"
			@confirm="changeDate"
		></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					avatarUrl: 'https://qlogo2.store.qq.com/qzone/1416956117/1416956117/100?1531323520',
					nickName: '张三',
					sex: '',
					phoneNumber: '',
					birthday:''
				},
				sexSheetShow: false,
				sexlist: [{
							text: '男'
						 },
						 {
							text: '女'
						 }],
				birthdateParams: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				}, 
				birthdateCalendar: false,
				maxBirthdayDate : new Date().getFullYear()
					
			}
		},
		mounted() {
			console.log(this.maxBirthdayDate)
		},
		methods: {
		  sexSheetCallback(index){
			  uni.hideKeyboard();
			  this.userInfo.sex =  this.sexlist[index].text;
		  },
		  changeBirthday(){
			  this.birthdateCalendar = true
		  },
		  changeDate(e){
			   this.userInfo.birthday = e.year;
		       this.userInfo.birthday += '-' + e.month;
			   this.userInfo.birthday += '-' + e.day;
			   this.birthdateCalendar = this.userInfo.birthday
		  }
		}
	}
	
</script>

<style lang="scss" scoped>
		.userinfo {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-left: 50px;
			
		}
		.head-marge{
			margin-left: 10px;
		}
		.input-marge{
			margin-left: 50px;
		}
		.line-marge{
			margin-top: 10px;
			margin-bottom: 10px;
			margin-left: 10px;
			margin-right: 10px;
		}
		
		.userinfo-avatar {
			width: 128rpx;
			height: 128rpx;
			margin: 20rpx;
			border-radius: 50%;
		}
</style>
