<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="" :style="{
					display: !top ? 'block' : 'none'
				}">
					<view class="rect-block-1">第一个节点</view>
					<view class="rect-block-2">第2个节点</view>
					<view class="w-no-demo-here">节点信息为</view>
					<view class="w-demo-result-line">{{ JSON.stringify(result) }}</view>
				</view>
				<view class="jump-to-top">
					<w-button @click="scrollToTop" :style="{
						display: top ? 'block' : 'none'
					}">
						点我自动滚动到顶部
					</w-button>
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">参数配置</view>
			<view class="w-config-item">
				<view class="w-item-title">元素</view>
				<w-subsection vibrateShort :list="['第一个节点', '第2个节点']" @change="elChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">指定元素置顶</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="topChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			result: '',
			scrollTop: 0,
			top: false
		};
	},
	onReady() {
		this.elChange(0);
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	methods: {
		async elChange(index) {
			let el = index == 0 ? '.rect-block-1' : '.rect-block-2';
			this.result = await this.$w.getRect(el);
		},
		scrollToTop() {
			this.$w.getRect('.jump-to-top').then(res => {
				uni.pageScrollTo({
					scrollTop: this.scrollTop + res.top,
					duration: 0
				});
			});
		},
		topChange(index) {
			this.top = index == 0 ? true : false;
			if(index == 1) {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.w-demo {
	min-height: 200vh;
}	

.rect-block-1 {
	background-color: #a0cfff;
	padding: 26rpx 60rpx;
	color: #ffffff;
	display: inline-flex;
	margin: auto;
}

.rect-block-2 {
	background-color: #fcbd71;
	padding: 12rpx 8rpx;
	width: 60%;
	color: #ffffff;
	margin: 30rpx auto;
}
</style>
