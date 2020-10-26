<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-button @click="openPage">点击跳转</w-button>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">类型</view>
				<w-subsection vibrateShort :list="['navigateTo', 'switchTab', 'navigateBack']" @change="typeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">携带参数(针对type=navigateTo)</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="paramsChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">窗口动画(App且type=navigateTo||navigateBack时有效)</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="animateChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'to',
				params: {
					age: 22,
					name: '李商隐'
				},
				animate: 'slide-in-bottom',
				url: ''
			}
		},
		computed: {
			jumpUrl() {
				let url = '';
				if(this.type == 'to') {
					url = '/pages/library/route/routeTo';
				} else if(this.type == 'tab') {
					url = '/pages/example/template';
				}
				return url;
			}
		},
		methods: {
			openPage() {
				this.$w.route({
					type: this.type,
					params: this.params,
					url: this.jumpUrl,
					animationType: this.animate
				});
			},
			typeChange(index) {
				this.type = index == 0 ? 'to' : index == 1 ? 'tab' : 'back';
			},
			paramsChange(index) {
				if(!index) {
					this.params = {
						age: 22,
						name: '李商隐'
					}
				} else {
					this.params = {}
				}
			},
			animateChange(index) {
				this.animate = index == 0 ? 'slide-in-bottom' : '';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
</style>
