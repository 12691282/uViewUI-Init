<template>
	<view class="wrap">
		<u-row gutter="16">
			<u-col span="5">
				<span class="head-marge">头像</span>
			</u-col>
			<u-col span="7">
				<view class="userinfo">
						<!--u-skeleton-circle 绘制圆形-->
						<view v-if="!showUpload">
							<image class="userinfo-avatar" :src="userInfo.avatarUrl" @tap="preAvatar"  mode="aspectFill"></image>
							<view class="u-delete-icon" @tap.stop="deleteAvatar()">
								<u-icon name="close" size="20" color="#ffffff"></u-icon>
							</view>
						</view>
						 <u-upload v-if="showUpload" ref="uUpload" :show-upload-list="false" :showProgress="false"
						 :action="actionUrl" :auto-upload="true" :file-list="fileList" :show-progress="false" max-count="1" 
						 @on-change="onAvatarChange">
						</u-upload>
						
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
						<u-input type="select" class="input-marge" :select-open="sexSheetShow" 
							placeholder="请选择性别" v-model="userInfo.sex" @click="sexSheetShow = true">
						</u-input>
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
		
		
		<u-row class="line-marge" gutter="16" justify="space-between">
			<u-line color="black" border-style="solid"/>
		</u-row>
		
		<u-row gutter="16" justify="space-between">
			 <u-col span="5">
			 	<span class="head-marge">生活照片</span>
			 </u-col>
			 <u-col span="7" style="padding: 0px 0px;">
				<u-upload @on-remove="deleteLifePhoto" @on-choose-fail="onChooseFail" ref="uUpload" :show-upload-list="lifePhotoListShow" :action="actionUrl"  
				  :auto-upload="false" :file-list="uploadPhotoList" :show-progress="false" :max-count="6" >
				</u-upload>
				<u-button style="margin-right: 10px;" :custom-style="{marginTop: '20rpx'}" @click="uploadLifePhoto">上传</u-button>
			 </u-col>
		</u-row>
	
		
		<u-row class="line-marge" gutter="16" justify="space-between">
			<u-line color="black" border-style="solid"/>
		</u-row>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				actionUrl: 'http://127.0.0.1:7001/upload',
				showUpload: false,
				fileList:[],
				userInfo: {
					avatarUrl:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1320602804,99817053&fm=26&gp=0.jpg',
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
				maxBirthdayDate : new Date().getFullYear(),
				lifePhotoListShow: true,
				uploadPhotoList: [
					{"url": 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1320602804,99817053&fm=26&gp=0.jpg' }
				]
				
				
					
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
		    },
		  // 预览图片
		  preAvatar() {
		  	wx.previewImage({
		  		current: '', // 当前显示图片的 http 链接
		  		urls: [this.userInfo.avatarUrl] // 需要预览的图片 http 链接列表
		  	})
		  },
		  //删除个人头像
		  deleteAvatar(){
			  this.showUpload = true;
			  this.userInfo.avatarUrl = ''
		  },
		  onAvatarChange(){
			  this.showUpload = false;
			  this.userInfo.avatarUrl = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1320602804,99817053&fm=26&gp=0.jpg'
		  },
		  deleteLifePhoto(index){
			  console.log('deleteLifePhoto')
		  },
		  uploadLifePhoto() {
			//上传照片list
			console.log(this.$refs.uUpload.lists)
		  	this.$refs.uUpload.upload();
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
		//小红标定位
		.u-delete-icon {
			position: absolute;
			top: 10rpx;
			right: 40rpx;
			z-index: 10;
			background-color: $u-type-error;
			border-radius: 100rpx;
			width: 44rpx;
			height: 44rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
		.pre-box {
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
		}
		
		.pre-item {
			flex: 0 0 48.5%;
			border-radius: 10rpx;
			height: 140rpx;
			overflow: hidden;
			position: relative;
			margin-bottom: 20rpx;
		}
</style>
