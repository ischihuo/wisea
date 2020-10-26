<template>
	<view class="wrap">
		<view class="item">
			<w-circle-progress type="warning" :percent="percent">
				<view class="w-progress-content">
					<view class="w-progress-dot"></view>
					<text class='w-progress-info'>查找中</text>
				</view>
			</w-circle-progress>
			<w-circle-progress type="warning" :width="150" :percent="percent">
				<view class="w-progress-content">
					<view class="w-progress-dot"></view>
					<text class='w-progress-info'>查找中</text>
				</view>
			</w-circle-progress>
		</view>
		<view class="item">
			<w-line-progress></w-line-progress>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				percent: 33
			}
		},
		onLoad() {
			setTimeout(() => {
				this.percent = 50;
			}, 1500);
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.w-progress-content {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.w-progress-dot {
		width: 16rpx;
		height: 16rpx;
		border-radius: 50%;
		background-color: #fb9126;
	}
	
	.w-progress-info {
		font-size: 28rpx;
		padding-left: 16rpx;
		letter-spacing: 2rpx
	}
</style>
