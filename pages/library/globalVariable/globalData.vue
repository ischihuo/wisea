<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					此处为演示globalData全局变量的使用，需手动更新
				</view>
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
				<view class="w-item-title">修改globalData为如下值</view>
				<w-subsection vibrateShort :list="['雅蓝', '皓白', '橘黄']" @change="globalDataChange"></w-subsection>
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
		onShow() {
			// 对globalData的使用，应在onShow生命周期，而不是onLoad生命周期
			this.result = getApp().globalData.username;
		},
		methods: {
			globalDataChange(index) {
				getApp().globalData.username = index == 0 ? '雅蓝' : index == 1 ? '皓白' : '橘黄';
				// 在此改变了globalData，想要再次触发本页内容更细，还必须手动操作
				this.result = getApp().globalData.username;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
