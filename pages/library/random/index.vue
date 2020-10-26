<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
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
				<view class="w-item-title">操作</view>
				<w-subsection vibrateShort :list="['min=0, max=5', 'min=541, max=8164']" @change="paramsChange"></w-subsection>
				<view class="w-btn-wrap">
					<w-button @click="getResult">执行</w-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				min: 0,
				max: 5,
				result: ''
			}
		},
		onLoad() {
			this.getResult();
		},
		methods: {
			paramsChange(index) {
				if(index == 0) {
					this.min = 0;
					this.max = 5;
				} else {
					this.min = 541;
					this.max = 8164;
				}
				this.getResult();
			},
			getResult() {
				this.result = this.$w.random(this.min, this.max);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-btn-wrap {
		margin-top: 50rpx;
	}
</style>
