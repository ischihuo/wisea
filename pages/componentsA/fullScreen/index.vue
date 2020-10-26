<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					通过压窗屏打开的模态框，可以遮盖顶部原生的导航栏和底部tabbar栏。
					注意：压窗屏只对APP有效，其他端无效。
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">状态</view>
				<w-subsection vibrateShort :current="current" :list="['打开', '关闭']" @change="openModal"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1
			}
		},
		onShow() {
			this.$nextTick(() => {
				this.current = 1;
			})
		},
		methods: {
			openModal(index) {
				// 可以传递参数
				if(index == 0) {
					this.$w.route("/wisea-ui/components/w-full-screen/w-full-screen?id=1");
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
