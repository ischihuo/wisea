<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area w-flex w-row-center">
				<w-line :border-style="borderStyle" color="red" :color="color" :length="length" :direction="direction" :hair-line="hairLine"></w-line>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">颜色</view>
				<w-subsection vibrateShort :list="['primary', 'success', 'warning', 'error', 'info']" @change="colorChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">线条类型</view>
				<w-subsection vibrateShort :list="['实线', '方形虚线', '圆点虚线']" @change="borderStyleChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">细边</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="hairLineChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">方向</view>
				<w-subsection vibrateShort :list="['水平', '垂直']" @change="directionChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				direction: 'row',
				hairLine: true,
				length: '100%',
				color: this.$w.color['primary'],
				borderStyle: 'solid'
			}
		},
		methods: {
			colorChange(index) {
				this.color = this.$w.color[['primary', 'success', 'warning', 'error', 'info'][index]];
			},
			hairLineChange(index) {
				this.hairLine = !index;
			},
			directionChange(index) {
				this.direction = index == 0 ? 'row' : 'col';
				if(index == 0) this.length = '100%';
				else this.length = '50rpx';
			},
			borderStyleChange(index) {
				this.borderStyle = ['solid', 'dashed', 'dotted'][index];
			}
		}
	}
</script>

<style scoped lang="scss">
	.w-demo-area {
		
	}
</style>
