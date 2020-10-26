<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					源数组为：[1, 2, 3, 4, 5]
				</view>
				<view class="w-demo-result-line">
					{{`[${result.join(', ')}]`}}
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">操作</view>
				<w-button @click="getResult">执行</w-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orginArray: [1, 2, 3, 4, 5],
				result: [],
			}
		},
		onLoad() {
			this.getResult();
		},
		methods: {
			getResult() {
				this.result = this.$w.randomArray(this.orginArray);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
