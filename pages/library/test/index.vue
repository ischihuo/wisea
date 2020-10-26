<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<view class="w-no-demo-here" style="text-align: left;">
					这里仅对部分验证规则进行演示，目前总的验证规则有如下：
				</view>
				<w-table style="margin-top: 20rpx;">
					<w-tr>
						<w-td>邮箱号</w-td>
						<w-td>手机号</w-td>
						<w-td>URL</w-td>
						<w-td>普通日期</w-td>
					</w-tr>
					<w-tr>
						<w-td>十进制数</w-td>
						<w-td>身份证号</w-td>
						<w-td>车牌号</w-td>
						<w-td>金额</w-td>
					</w-tr>
					<w-tr>
						<w-td>汉字</w-td>
						<w-td>字母</w-td>
						<w-td>字母|数字</w-td>
						<w-td>包含值</w-td>
					</w-tr>
					<w-tr>
						<w-td>数值范围</w-td>
						<w-td>长度范围</w-td>
						<w-td width="50%"></w-td>
					</w-tr>
				</w-table>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">邮箱</view>
				<w-subsection vibrateShort :list="email" @change="emailChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">手机号</view>
				<w-subsection vibrateShort :list="mobile" @change="mobileChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">中文</view>
				<w-subsection vibrateShort :list="chinese" @change="chineseChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">整数</view>
				<w-subsection vibrateShort :list="digits" @change="digitsChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email: ['google@gmail.com', 'google艾特gmail.com'],
				mobile: ['13478561273', '0778-3423082'],
				chinese: ['天青色等烟雨', 'Beat it'],
				digits: [283, '下雨的声音']
			}
		},
		methods: {
			toast(type) {
				this.$refs.uToast.show({
					type: type ? 'success' : 'error',
					title: type ? '验证通过' : '验证失败'
				})
			},
			emailChange(index)  {
				this.toast(this.$w.test.email(this.email[index]));
			},
			mobileChange(index) {
				this.toast(this.$w.test.mobile(this.mobile[index]));
			},
			chineseChange(index) {
				this.toast(this.$w.test.chinese(this.chinese[index]));
			},
			digitsChange(index) {
				this.toast(this.$w.test.digits(this.digits[index]));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
