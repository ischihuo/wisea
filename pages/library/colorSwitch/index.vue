<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-demo-result-line">
					{{result}}
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">GRB转HEX</view>
				<w-subsection vibrateShort :list="['rgb(12,57,231)', 'rgb(15,148,32)', 'rgb(91,52,210)']" @change="rgbToHexChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">HEX转GRB</view>
				<w-subsection vibrateShort :list="['#0edc8a', '#d0a73c', '#3308dd']" @change="hexToRgbChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">颜色渐变(rgb(21,21,21)-rgb(56,56,56)，分10份)</view>
				<w-button @click="colorGradientChange">执行</w-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: null
			}
		},
		onLoad() {
			this.result = this.$w.rgbToHex('rgb(12,57,231)')
		},
		methods: {
			rgbToHexChange(index) {
				let color = index == 0 ? 'rgb(12,57,231)' : index == 1 ? 'rgb(15,148,32)' : 'rgb(91,52,210)';
				this.result = this.$w.rgbToHex(color)
			},
			hexToRgbChange(index) {
				let color = index == 0 ? '#0edc8a' : index == 1 ? '#d0a73c' : '#3308dd';
				this.result = this.$w.hexToRgb(color)
			},
			colorGradientChange(index) { 
				this.result = JSON.stringify(this.$w.colorGradient('rgb(21,21,21)', 'rgb(56,56,56)', 10))
			},
			getResult() {
				this.result = this.$w.guid(this.length, this.firstU, this.radix);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
