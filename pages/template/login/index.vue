<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录美团</view>
			<input class="w-border-bottom" type="number" v-model="tel" placeholder="请输入手机号" />
			<view class="tips">未注册的手机号验证后自动创建美团账号</view>
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">获取短信验证码</button>
			<view class="alternative">
				<view class="password">密码登录</view>
				<view class="issue">遇到问题</view>
			</view>
		</view>
		<view class="buttom">
			<view class="loginType">
				<view class="wechat item">
					<view class="icon"><w-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></w-icon></view>
					微信
				</view>
				<view class="QQ item">
					<view class="icon"><w-icon size="70" name="qq-fill" color="rgb(17,183,233)"></w-icon></view>
					QQ
				</view>
			</view>
			<view class="hint">
				登录代表同意
				<text class="link">美团点评用户协议、隐私政策，</text>
				并授权使用您的美团点评账号信息（如昵称、头像、收获地址）以便您统一管理
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tel: ''
		}
	},
	computed: {
		inputStyle() {
			let style = {};
			if(this.tel) {
				style.color = "#fff";
				style.backgroundColor = this.$w.color['warning'];
			}
			return style;
		}
	},
	methods: {
		submit() {
			if(this.$w.test.mobile(this.tel)) {
				this.$w.route({
					url: 'pages/template/login/code'
				})
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: $w-type-info;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: $w-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $w-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $w-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $w-tips-color;
			
			.link {
				color: $w-type-warning;
			}
		}
	}
}
</style>
