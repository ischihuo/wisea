<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-top-tips ref="uTips"></w-top-tips>
				<text class="w-no-demo-here">点击参数配置查看效果</text>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">主题选择</view>
				<w-subsection vibrateShort :list="['primary', 'success', 'error', 'warning', 'info']" @change="typeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">显示时间</view>
				<w-subsection vibrateShort current="1" :list="['长', '正常', '短']" @change="durationChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				duration: 2000,
				title: '忽如一夜春风来，千树万树梨花开',
				type: 'primary'
			}
		},
		methods: {
			showTips() {
				this.$refs.uTips.show({
					duration: this.duration,
					title: this.title,
					type: this.type
				});
			},
			typeChange(index) {
				this.type = index == 0 ? 'primary' : index == 1 ? 'success' : index == 2 ? 'error' : index == 3 ? 'warning'  : 'info';
				this.showTips();
			},
			durationChange(index) {
				this.duration = index == 0 ? 4000 : index == 1 ? 2000 : 500;
				this.showTips();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>