<!--
 * @Desc: ---   ----
 * @Date: 2020-04-22 12:29:21
 * @LastEditors: 王
 * @LastEditTime: 2020-04-22 18:33:28
 -->
<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-gap :bg-color="bgColor" :height="height" :margin-top="marginTop" :margin-bottom="marginBottom"></w-gap>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">参数配置</view>
			<view class="w-config-item">
				<view class="w-item-title">背景颜色</view>
				<w-subsection vibrateShort :list="['default', 'primary', 'error', 'warning', 'success']" @change="bgColorChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">高度</view>
				<w-subsection vibrateShort :list="['30', '50', '70']" @change="heightChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">上下外边距</view>
				<w-subsection vibrateShort :list="['30', '50', '70']" @change="marginChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			height: 30,
			bgColor: this.$w.color.bgColor,
			marginTop: 30,
			marginBottom: 30
		};
	},
	methods: {
		bgColorChange(index) {
			let color = index == 0 ? 'default' : index == 1 ? 'primary' : index == 2 ? 'error' : index == 3 ? 'warning' : 'success';
			this.bgColor = color == 'default' ? this.$w.color['bgColor'] : this.$w.color[color];
		},
		heightChange(index) {
			this.height = index == 0 ? 30 : index == 1 ? 50 : 70;
		},
		marginChange(index) {
			this.marginTop = ['30', '50', '70'][index];
			this.marginBottom = this.marginTop;
		}
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	padding: 24rpx;
}
</style>
