<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-link :color="color" :font-size="fontSize" :under-line="underLine" :href="href">点此链接，跳转uView官网</w-link>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">下划线</view>
				<w-subsection vibrateShort :list="['显示', '隐藏']" @change="underLineChange"></w-subsection>
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
				href: 'https://www.uviewui.com',
				underLine: true,
				fontSize: 28,
				color: '#2979ff'
			}
		},
		methods: {
			underLineChange(index) {
				this.underLine = index == 0 ? true : false;
			},
			styleChange(index) {
				if(index == 0) {
					this.color = this.$w.color['tipsColor'];
					this.fontSize = 34;
				} else {
					this.color = this.$w.color['primary'];
					this.fontSize = 28;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
