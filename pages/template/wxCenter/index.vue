<template>
	<view>
		<w-navbar :is-back="false" title="　" :border-bottom="false">
			<view class="w-flex w-row-right" style="width: 100%;">
				<view class="camera w-flex w-row-center">
					<w-icon name="camera-fill" color="#000000" size="48"></w-icon>
				</view>
			</view>
		</w-navbar>
		<view class="w-flex user-box w-p-l-30 w-p-r-20 w-p-b-30">
			<view class="w-m-r-10">
				<w-avatar :src="pic" size="140"></w-avatar>
			</view>
			<view class="w-flex-1">
				<view class="w-font-18 w-p-b-20">uView ui</view>
				<view class="w-font-14 w-tips-color">微信号:helang_uView</view>
			</view>
			<view class="w-m-l-10 w-p-10">
				<w-icon name="scan" color="#969799" size="28"></w-icon>
			</view>
			<view class="w-m-l-10 w-p-10">
				<w-icon name="arrow-right" color="#969799" size="28"></w-icon>
			</view>
		</view>
		
		<view class="w-m-t-20">
			<w-cell-group>
				<w-cell-item icon="rmb-circle" title="支付"></w-cell-item>
			</w-cell-group>
		</view>
		
		<view class="w-m-t-20">
			<w-cell-group>
				<w-cell-item icon="star" title="收藏"></w-cell-item>
				<w-cell-item icon="photo" title="相册"></w-cell-item>
				<w-cell-item icon="coupon" title="卡券"></w-cell-item>
				<w-cell-item icon="heart" title="关注"></w-cell-item>
			</w-cell-group>
		</view>
		
		<view class="w-m-t-20">
			<w-cell-group>
				<w-cell-item icon="setting" title="设置"></w-cell-item>
			</w-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'https://uviewui.com/common/logo.png',
				show:true
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>
