<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-line-progress v-if="mode == 'line'" :percent="percent" :active-color="activeColor" 
				:striped="striped" :stripedActive="stripedActive"></w-line-progress>
				<w-circle-progress v-else :percent="percent" :active-color="activeColor" 
				bg-color="rgb(250, 250, 250)">
					<view class="w-progress-content">
						<view class="w-progress-dot"></view>
						<text class='w-progress-info'>查找中</text>
					</view>
				</w-circle-progress>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式选择</view>
				<w-subsection vibrateShort :current="current" :list="['线型', '圆型']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">增减</view>
				<w-subsection vibrateShort :list="['减少30%', '增加30%']" @change="calcChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义样式(线型时有效)</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="styleChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">动态条纹(线型时有效)</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="stripedChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				percent: 50,
				mode: 'line',
				activeColor: '#19be6b',
				striped: false,
				stripedActive: false,
				current: 0,
			}
		},
		methods: {
			modeChange(index) {
				this.current = index;
				this.mode = index == 0 ? 'line' : 'circle';
			},
			calcChange(index) {
				this.percent = index == 0 ? (this.percent - 30) : (this.percent + 30);
				if(this.percent > 100) this.percent = 100;
				if(this.percent < 0) this.percent = 0;
			},
			styleChange(index) {
				this.activeColor = index == 0 ? this.$w.color['error'] : '#19be6b';
				if(index == 0) {
					this.mode = 'line';
					this.current = 0;
				}
			},
			stripedChange(index) {
				this.striped = index == 0 ? true : false;
				this.stripedActive = this.striped;
				if(index == 0) {
					this.mode = 'line';
					this.current = 0;
				}
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	.w-progress-content {
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
