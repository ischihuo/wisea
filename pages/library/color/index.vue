<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here" style="text-align: left;">
					此处演示为通过JS调用框架内置颜色值，此外还可以通过scss变量调用。
				</view>
				<view class="w-demo-result-line" :style="{color: color, backgroundColor: '#ffffff'}">
					晓镜但愁云鬓改，夜吟应觉月光寒
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">主题</view>
				<w-subsection vibrateShort :list="['primary', 'success', 'error', 'warning', 'info']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">常用颜色</view>
				<w-subsection vibrateShort :list="['主要文字', '常规文字', '次要文字', '占位文字', '边框颜色']" @change="colorChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				color: this.$w.color['primary'],
			}
		},
		methods: {
			modeChange(index) {
				let colorName = index == 0 ? 'primary' : index == 1 ? 'success' : index == 2 ? 'error' : index == 3 ? 'warning'  : 'info';
				this.color = this.$w.color[colorName];
			},
			colorChange(index) {
				this.color = index == 0 ? '#303133' : index == 1 ? '#606266' : index == 2 ? '#909399' : index == 3 ? '#c0c4cc' : '#e4e7ed';
			},
			getResult() {
				this.result = this.$w.trim(this.string, this.pos);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
