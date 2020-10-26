<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					此处为演示vuex全局变量的使用
				</view>
				<view class="w-demo-result-line">
					{{vuex_demo}}
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">修改vuex变量为如下值</view>
				<w-subsection vibrateShort :list="['墨绿', '黛蓝', '浅紫']" @change="vuexChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			vuexChange(index) {
				let val = index == 0 ? '墨绿' : index == 1 ? '黛蓝' : '浅紫';
				// 通过this.$w.vuex使用，方法见uView文档
				this.$w.vuex('vuex_demo', val);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>