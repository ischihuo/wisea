<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					收到的参数为：{{paramsStr}}
				</view>
				<view class="w-btn-wrap">
					<w-button @click="back">返回</w-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default { 
		data() {
			return {
				params: {}
			}
		},
		onLoad(option) {
			this.params = option;
		},
		computed: {
			paramsStr() {
				return JSON.stringify(this.params);
			}
		},
		methods: {
			back() {
				this.$w.route({
					type: 'back',
					animationType: 'slide-in-top'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.w-btn-wrap {
		margin-top: 50rpx;
	}
</style>
