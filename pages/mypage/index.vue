<template>
	<view class="wrap">
		<view v-if="userlogin">
			<u-row gutter="16">
				<u-col span="5">
					<div style="margin-top: 30px;" class="head-marge">头像</div>
				</u-col>
				<u-col span="7">
					<view class="userinfo">
							<!--u-skeleton-circle 绘制圆形-->
							<view v-if="!showUpload">
								<image class="userinfo-avatar" :src="userInfo.avatarUrl" @tap="preAvatar"  mode="aspectFill"></image>
								<!-- <view class="u-delete-icon" @tap.stop="deleteAvatar()">
									<u-icon name="close" size="20" color="#ffffff"></u-icon>
								</view> -->
							</view>
							 <u-upload v-if="showUpload" :show-upload-list="false" :showProgress="false"
							 :action="avatarActionUrl" :auto-upload="true" :file-list="fileList" :show-progress="false" max-count="1" 
							 @on-change="onAvatarChange">
							</u-upload>
							
					</view>
				</u-col>
			</u-row>
			<u-row>
				<u-line margin="10rpx 20rpx 30rpx 25rpx" length="92%" color="black"/>
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
			
			<u-row>
				<u-line margin="10rpx 20rpx 30rpx 25rpx" length="92%" color="black"/>
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
				 
				<u-action-sheet :list="sexlist" v-model="sexSheetShow" @click="sexSheetCallback"></u-action-sheet>
				 
			</u-row>
			
			<u-line margin="10rpx 20rpx 30rpx 25rpx" length="92%" color="black" />
			
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
			
			<u-line margin="10rpx 20rpx 30rpx 25rpx" length="92%" color="black" />
			
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
			
			<u-line margin="10rpx 20rpx 30rpx 25rpx" length="92%" color="black" />
			
			<u-row gutter="16" justify="space-between">
				 <u-col span="5">
				 	<span class="head-marge">出生年月</span>
				 </u-col>
				 <u-col span="7">
				 	<view class="userinfo">
				 		<block>
				 			<!--u-skeleton-fillet 绘制圆角矩形-->
							<u-input class="input-marge" placeholder="请输入出生年月"   v-model="userInfo.birthday" @click="changeBirthday" disabled/>
							
							<u-calendar v-model="birthdateCalendar" :max-date="maxBirthdayDate" @change="changeDate"></u-calendar>
							
				 		</block>
				 	</view>
				 </u-col>
			</u-row>
			
			<u-line margin="10rpx 20rpx 30rpx 25rpx" length="92%" color="black" />
			
			<u-row gutter="16" justify="space-between">
				 <u-col span="4">
				 	<span class="head-marge">生活照片</span>
				 </u-col>
				 <u-col span="8" style="padding: 0px 0px;">
					<u-upload @on-list-change="deleteLifePhoto" ref="uUpload" :show-upload-list="lifePhotoListShow" :action="lifePhotoActionUrl"  
					  :auto-upload="false" :file-list="uploadPhotoList" :show-progress="false" :max-count="6" >
					</u-upload>
					<u-button v-if="isShowUploadButton"  type="success" size="medium" :custom-style="{marginTop: '20rpx',marginLeft:'220rpx'}" @click="uploadLifePhoto">上传</u-button>
				 </u-col>
			</u-row>
				
			<u-line margin="10rpx 20rpx 30rpx 25rpx" length="92%" color="black" />
			<u-button type="primary" size="medium" :custom-style="{marginLeft: '20rpx',marginBottom:'40rpx'}" @click="updateUserInfo()">更新</u-button>
			
		</view>
			<view class="head">
				<view  v-if="!userlogin">
					<u-row gutter="16">
						<u-col span="10" style="padding: 0px 0px;">
								<view >
									<u-top-tips ref="uTips"></u-top-tips>
									<u-button type="error" shape="circle"  open-type="getUserInfo" @getuserinfo="checkUserInfo"
									:custom-style="{marginLeft: '150rpx'}"  plain>登陆</u-button>
									
								</view>
						</u-col>
						
					</u-row>
				</view>
		   </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarActionUrl: 'http://127.0.0.1:7001/upload',
				lifePhotoActionUrl: 'http://127.0.0.1:7001/uploadLifePhoto',
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
				birthdateCalendar: false,
				maxBirthdayDate : '',
				lifePhotoListShow: true,
				uploadPhotoList: [],
				photoListLength: 0,
				canIUse: wx.canIUse('button.open-type.getUserInfo'),
				userlogin:false,
				hasUserInfo: false,
			}
		},
		onShow() {
			if (uni.getStorageSync("hasLogin")) {
				this.getUserInfo();
				this.hasLogin = true;
			}
		},
		mounted() {
			//设置可选时间
			if(this.globalData.userInfo != null){
				this.userlogin = true
				this.setLoginUserInfo()
				let today = new Date()
				let year = today.getFullYear()+20 
				let month = today.getMonth()+1
				let date = today.getDate()
				this.maxBirthdayDate =  year +'-'+ month +'-'+date
				this.uploadPhotoList.push(
						{"url": 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1320602804,99817053&fm=26&gp=0.jpg' }
				)
				this.photoListLength =  this.uploadPhotoList.length
			}
		},
		computed:{
			isShowUploadButton(){
				if(this.photoListLength > 0){
					return true;
				}else{
					return false;
				}
			}
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
			   this.userInfo.birthday =  e.year + '年'+ e.month + '月' + e.day + '日' 
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
				  this.photoListLength =  this.$refs.uUpload.lists.length
				  console.log('deleteLifePhoto')
			},
			uploadLifePhoto() {
				//上传照片list
				//console.log(this.$refs.uUpload.lists)
				this.$refs.uUpload.upload();
			},
			updateUserInfo(){
				  
				  
			},
			checkUserInfo(e){
				let self = this;
				wx.checkSession({
					success () {
						//session_key 未过期，并且在本生命周期一直有效
						console.log('checkSession success')
						self.getWechartInfo();
					},
					fail () {
						console.log('checkSession fail')
						// session_key 已经失效，需要重新执行登录流程
						self.onLoginWechat();
					}
			   })
			},
			onLoginWechat(){
				let self = this;
				wx.login({
				    success (res) {
				      if (res.code) {
				        self.getWechartInfo();
				      }
				    }
				})
			},
			getWechartInfo(){
				let self = this;
				wx.getUserInfo({
				    success (res) {
						self.globalData.userInfo = res.userInfo
						self.userlogin = true
						self.setLoginUserInfo()
				    }
				})
			},
			setLoginUserInfo(){
				this.userInfo.avatarUrl = this.globalData.userInfo.avatarUrl
				this.userInfo.nickName = this.globalData.userInfo.nickName
			}
		}
	}
	
</script>

<style lang="scss">
	@import  "mypage.css"
</style>
