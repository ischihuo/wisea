<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-button @click="showAction">唤起ActionSheet</w-button>
				<w-action-sheet :cancel-btn="cancel" :mask-close-able="maskClick" :tips="tips" 
				@click="click" :list="list" v-model="show" :safe-area-inset-bottom="true"></w-action-sheet>
			</view> 
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">取消按钮</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="cancelChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">点击遮罩关闭</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="maskClickChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					text: '最是人间留不住',
				}, {
					text: '朱颜辞镜花辞树',
					disabled: true
				}, {
					text: '正是江南好风景'
				}, {
					text: '落花时节又逢君'
				}],
				tips: {
					text: ''
				},
				show: false,
				cancel: true,
				maskClick: true
			}
		},
		methods: {
			showAction() {
				this.show = true;
			},
			click(index) {
				this.$refs.uToast.show({
					type: 'success',
					title: '点击了第' + (index + 1) + '项'
				})
			},
			tipsChange(index) {
				if(index == 0) this.show = true;
				this.tips.text = index == 0 ? '请谨慎执行您的操作' : ''
			},
			cancelChange(index) {
				this.show = true;
				this.cancel = index == 0 ? true : false
			},
			maskClickChange(index) {
				if(index == 1) this.cancel = true;
				this.show = true;
				this.maskClick = index == 0 ? true : false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
</style>
