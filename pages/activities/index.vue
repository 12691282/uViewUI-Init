<template>
	<view class="active_content">
		<u-parse :html="detail.show_content"></u-parse>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				detail: {
					show_content:'',
					content_one: `
					    <div style="background-color: #ffffff;padding: 10px;border-radius: 10px;">
						<p>英特尔于今年的 CES 发布了四款 NUC 11 系列迷你主机，最高配可搭载 RTX 2060 独立显卡，均采用英特尔 11 代移动处理器，配备 Xe 锐炬显卡。</p>
						<img data-loadfunc="0" style="margin:10px;height: 90%;width:90%" 
						src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3992317784,1645129093&fm=26&gp=0.jpg" data-loaded="0">
						<br/>
						<p>该系列包含的型号有：</p>
						<p>NUC 11 Enthusiast Mini PC</p>
						<p>NUC 11 Performance Mini PC</p>
						<p>NUC 11 Pro Mini PC</p>
						<p>NUC 11 Compute Element 计算单元</p>
						<br/>
						<img data-loadfunc="0" style="margin:10px;height: 90%;width:90%"
						src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3439304221,1149404197&fm=26&gp=0.jpg" data-loaded="0">
						
						<p>英特尔 NUC 11 Pro 迷你主机采用双面 PCB 设计，CPU 放置在主板下方。此款电脑支持双槽笔记本内存，搭载三个 M.2 插槽，其中一个 PCIe x4 Gen 4: M.2 2280 用来安装固态硬盘，一个 PCIe x1 Gen 3: M.2 2230 用来安装无线网卡，还有一个 2242 接口用来扩展额外的设备。</p>
						<br/>
						<p>设计 TDP 为 40W。CPU 搭载 i7-1185G7 处理器，4 核 8 线程，主频最大 4.8GHz，支持 DDR4-3200 以及 AVX-512 指令集。具备 Type-C 口，其中一个支持 USB 4 以及雷电 4，另一个支持雷电 3。除此之外还有 3 个 USB 3.2 Type-A 接口、HDMI 2.0b 以及 DP 1 .4a 输出。</p>
						<!--repaste.body.end-->                    
						</div>
					`
				}
			 
			}
		},
		//接受参数
		onLoad (option) {
			console.log('accept params id:', option.id)
			if(option.id == '1'){
				this.detail.show_content = this.detail.content_one
			}else{
				this.detail.show_content = '<div> id : '+  option.id + '</div>';
			}
		},
		mounted() {
			console.log('activites mounted')
		},
		methods: {
		 
		}
	}
	
</script>

<style lang="scss" scoped>
	.active_content {
		background-color: #dcdcdc;
		padding: 10px;
		font-size: 12px;
	}
</style>
