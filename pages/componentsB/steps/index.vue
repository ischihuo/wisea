<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-steps :direction="direction" :current="current" :list="steps" :mode="mode" :icon="icon"></w-steps>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式</view>
				<w-subsection vibrateShort :list="['number', 'dot']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">方向</view>
				<w-subsection vibrateShort :list="['横向', '竖向']" @change="directionChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义图标</view>
				<w-subsection vibrateShort :list="['否', '是']" @change="iconChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">当前步值</view>
				<w-subsection vibrateShort :list="['1', '2', '3', '4']" @change="stepChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				steps: [{
					name: '下单'
				}, {
					name: '出库'
				}, {
					name: '运输'
				}, {
					name: '签收'
				}, ],
				current: 0,
				icon: 'checkmark',
				mode: 'number',
				direction: 'row'
			}
		},
		methods: {
			modeChange(index) {
				this.mode = index == 0 ? 'number' : 'dot';
			},
			stepChange(index) {
				this.current = [0, 1, 2, 3][index];
			},
			iconChange(index) {
				this.icon = index == 0 ? 'checkmark' : 'map-fill';
			},
			directionChange(index) {
				this.direction = index == 0 ? 'row' : 'column';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.box {
		margin: 50rpx 0;
	}
</style>
