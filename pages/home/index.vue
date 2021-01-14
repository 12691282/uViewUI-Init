<template>
	<view class="wrap">
		<view class="u-page">
			<u-swiper :list="swiperList" :effect3d="true" :title="true" @click="clickSwiper" ></u-swiper>
			<u-line color="green" margin="20rpx" border-style="dashed"/>
		</view>
		<view class="daily-title-class">
			每日推荐
		</view>
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<u-back-top :scroll-top="scrollTop"></u-back-top>
			<template v-slot:left="{ leftList }">
				
				<view class="water-item-class" v-for="(item, index) in leftList" :key="index" @click="selectRecommendDetail(item)">
					<!-- 微信小程序需要hx2.8.11版本才支持在template中引入其他组件，比如下方的u-lazy-load组件 -->
					<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title">{{ item.title }}</view>
					<view >
						<span class="district-class" >{{ item.district }}</span> <span class="constellation-class"> {{ item.constellation }} </span>
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">成熟</view>
						<view class="demo-tag-text">细心</view>
					</view>
				</view>
			</template>
			<template v-slot:right="{ rightList }">
				<view class="water-item-class" v-for="(item, index) in rightList" :key="index" @click="selectRecommendDetail(item)">
					<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title">{{ item.title }}</view>
					<view>
						<span class="district-class" >{{ item.district }}</span> <span class="constellation-class"> {{ item.constellation }} </span>
					</view>
					<view class="demo-tag">
						<view class="demo-tag-owner">自信</view>
						<view class="demo-tag-text">坦诚</view>
					</view>
				</view>
			</template>
		</u-waterfall>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				loadData: false,
				scrollTop: 0,
				swiperList : [{
						path: '/pages/activities/index',
						id:'1',
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					  },
					  {
						path: '/pages/activities/index',
						id:'2',
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					  },
					  {
						path: '/pages/activities/index',
						id:'3',
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					   }],
				waterfallData: [{
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
					},
					{
						district:'青羊区',
						constellation:'双鱼座',
						title: '须晴日，看红装素裹，分外妖娆',
						image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.sinaimg.cn%2Fqc%2F2010%2F0111%2F201011194221.jpg&refer=http%3A%2F%2Fi1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613026949&t=c4ea01793dd46ec26f727d8dddbf0abb'
					},
					{
						district:'青羊区',
						constellation:'射手座',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic24.nipic.com%2F20120922%2F9527735_155039411000_2.jpg&refer=http%3A%2F%2Fpic24.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613026949&t=2d91c0a3df532cdab88493a267c22098'
					},
					{
						district:'高薪区',
						constellation:'射手座',
						title: '惜秦皇汉武，略输文采',
						image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201205%2F15%2F152011zser9o5oa9ee9xx6.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613027307&t=da100b636f431c52cbb9f117b17dcea6'
					},
					{
						district:'高薪区',
						constellation:'白羊座',
						title: '唐宗宋祖，稍逊风骚',
						image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201407%2F09%2F204529sy3yzyr56qkqgqas.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613027307&t=2dd78f788b64b9890ea388be49ed5a3c'
					},
					{
						district:'高薪区',
						constellation:'双鱼座',
						title: '一代天骄，成吉思汗',
						image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.paopaoche.net%2Fup%2F2015-8%2F14393898533242963.jpg&refer=http%3A%2F%2Fpic.paopaoche.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613027826&t=0d682e4e885229684c0e9a8f61d06ed8'
					},
					{
						district:'锦江区',
						constellation:'水瓶座',
						title: '只识弯弓射大雕',
						image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181004%2F280a2c4773824a0e96383b29b3b1ddad.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613027826&t=95540e58df61fb60e5d546ec6a1b8e32'
					},
					{
						district:'锦江区',
						constellation:'狮子座',
						title: '俱往矣，数风流人物，还看今朝',
						image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3471580072,3546180251&fm=26&gp=0.jpg'
					}
				],	   
				flowList: [],
				loadStatus: 'loadmore'
			}
		},
		mounted() {
			 this.addRandomData();
		},
	 
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			clickSwiper(_index){
				let listObj = this.swiperList[_index];
				let path = listObj.path
				let id = listObj.id
				let params = path + '?id=' + id
				uni.navigateTo({
					url: params
				})
			},
			addRandomData() {
				let dataLenth = this.waterfallData.length
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0,  dataLenth - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.waterfallData[index]));
					this.flowList.push(item);
				}
			},
			selectRecommendDetail(_item){
				let data =  encodeURIComponent(JSON.stringify(_item))
				let url = '/pages/recommendDetail/index?data='+data
				uni.navigateTo({
					url: url
				})
				
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	@import "home.css"
</style>
