<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">源对象：{{JSON.stringify(params)}}</view>
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
				<view class="w-item-title">是否带问号</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="prefixChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				prefix: true,
				params: {
					name: '典韦',
					age: 32
				},
				result: ''
			}
		},
		onLoad() {
			this.getResult();
		},
		methods: {
			prefixChange(index) {
				this.prefix = index == 0 ? true : false;
				this.getResult();
			},
			async getResult() {
				this.result = this.$w.queryParams(this.params, this.prefix)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
