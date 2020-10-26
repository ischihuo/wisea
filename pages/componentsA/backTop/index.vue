<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">滚动页面即可在右下角看到返回顶部的按钮</view>
			</view>
			<w-back-top :scrollTop="scrollTop" :mode="mode"
			:bottom="bottom" :right="right" :top="top" :icon="icon" :custom-style="customStyle"
			:icon-style="iconStyle" :tips="tips"
			>
			</w-back-top>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式</view>
				<w-subsection vibrateShort :list="['圆形', '方形']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">组件位置</view>
				<w-subsection vibrateShort :list="['默认', '自定义']" @change="positionChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">显示组件的滚动条距离</view>
				<w-subsection vibrateShort current="1" :list="['200', '400', '600']" @change="scrollTopChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义样式</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="styleChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				mode: 'circle',
				bottom: 200,
				right: 40,
				top: 400,
				icon: 'arrow-upward',
				iconStyle: {
					color: '#909399',
					fontSize: '38rpx'
				},
				customStyle: {},
				tips: ''
			}
		},
		methods: {
			modeChange(index) {
				this.mode = !index ? 'circle' : 'square';
			},
			positionChange(index) {
				if(index == 0) {
					this.bottom = 200;
					this.right = 40;
				} else {
					this.bottom = 400;
					this.right = 80;
				}
			},
			scrollTopChange(index) {
				this.top = [200, 400, 600][index];
			},
			styleChange(index) {
				if(index == 0) {
					this.icon = 'arrow-up';
					this.iconStyle = {
						color: '#2979ff',
						fontSize: '34rpx'
					};
					this.customStyle = {
						backgroundColor: '#a0cfff',
						color: '#2979ff'
					};
					this.tips = '顶部';
				} else {
					this.icon = 'arrow-upward';
					this.iconStyle = {
						color: '#909399',
						fontSize: '38rpx'
					};
					this.customStyle = {};
					this.tips = '';
				}
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {
		height: 200vh;
	}
</style>
