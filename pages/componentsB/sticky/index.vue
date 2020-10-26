<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-sticky :offset-top="offsetTop" :enable="enable" @fixed="fixed" @unfixed="unfixed">
					<view class="sticky">
						宝剑锋从磨砺出,梅花香自苦寒来
					</view>
				</w-sticky>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">吸顶高度</view>
				<w-subsection vibrateShort :list="[0, 120, 200]" @change="offsetTopChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">状态</view>
				<w-subsection vibrateShort :list="['允许吸顶', '禁止吸顶']" @change="enableChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				offsetTop: 0,
				enable: true,
			}
		},
		methods: {
			offsetTopChange(index) {
				this.offsetTop = index == 0 ? 0 : index == 1 ? 120 : 200;
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				})
			},
			enableChange(index) {
				this.enable = index == 0 ? true : false;
			},
			fixed() {
				this.$refs.uToast.show({
					type: 'warning',
					title: '触发吸顶'
				})
			},
			unfixed() {
				this.$refs.uToast.show({
					type: 'success',
					title: '取消吸顶'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo-area {
		overflow: hidden;
	}
	
	.w-config-wrap {
		height: 200vh;
	}
	
	.w-demo-title {
		margin-bottom: 140rpx;
	}
	
	.sticky {
		background-color: $w-type-primary;
		color: #fff;
		padding: 24rpx;
		margin: auto;
		font-size: 28rpx;
		line-height: 1;
		border-radius: 5px;
	}
</style>
