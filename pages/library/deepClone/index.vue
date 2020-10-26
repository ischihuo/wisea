<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					源对象为："{info: {name: 'mary'}}"
				</view>
				<view class="w-demo-result-line">
					{{result}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				obj: {
					info: {
						name: 'mary'
					}
				},
				result: ''
			}
		},
		onLoad() {
			this.result = this.$w.deepClone(this.obj);
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
