<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here" style="text-align: left;">
					此处为演示定义在main.js中的"Vue.prototype"全局变量的使用，它不是动态响应的，修改后本页面和上一个页面的值，都不会自动刷新
				</view>
				<view class="w-demo-result-line">
					{{vuePrototype}}
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">修改vuePrototype为如下值</view>
				<w-subsection vibrateShort :list="['鹅黄', '橙黄', '茶绿']" @change="vuePrototypeChange"></w-subsection>
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
			
		},
		methods: {
			vuePrototypeChange(index) {
				// 你会发现，此处修改/main.js中通过Vue.prototype绑定的值，它是静态的
				// 此页面修改后，返回上一个页面，无法全局响应
				this.vuePrototype = index == 0 ? '鹅黄' : index == 1 ? '橙黄' : '茶绿';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
