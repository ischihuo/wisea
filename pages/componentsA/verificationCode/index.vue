<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-verification-code :keep-running="true" :seconds="seconds" @end="end" @start="start" ref="uCode" 
				@change="codeChange" :startText="startText" :changeText="changeText" 
				:endText="endText"></w-verification-code>
				<w-button @click="getCode">{{tips}}</w-button>
				<w-button :custom-style="{marginTop: '30rpx'}" @tap="reset" style="margin-top: 30rpx;">重置</w-button>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">倒计时间</view>
				<w-subsection vibrateShort :current="0" :list="['60s', '10s', '5s']" @change="secondsChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义提示语</view>
				<w-subsection vibrateShort :current="1" :list="['是', '否']" @change="textChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: '',
				seconds: 60,
				refCode: null,
				startText: '获取验证码',
				changeText: 'X秒重新获取',
				endText: '重新获取'
			}
		},
		onReady() {
			// 注意这里为错误示例，目前微信小程序最新稳定版开发工具如此
			// 赋值会报错，很诡异，其他端无此问题
			// this.refCode = this.$refs.uCode;
		},
		methods: {
			codeChange(text) {
				// console.log(text);
				this.tips = text;
			},
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$w.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$w.toast('倒计时结束后再发送');
				}
			},
			secondsChange(index) {
				this.seconds = index == 0 ? 60 : index == 1 ? 10 : 5;
			},
			textChange(index) {
				if(index == 0) {
					this.startText = '点一下获取',
					this.changeText = '重新获取Xs',
					this.endText = '再次获取'
				} else {
					this.startText = '获取验证码',
					this.changeText = 'X秒重新获取',
					this.endText = '重新获取'
				}
			},
			end() {
				this.$w.toast('倒计时结束');
			},
			start() {
				this.$w.toast('倒计时开始');
			},
			reset() {
				this.$refs.uCode.reset();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
