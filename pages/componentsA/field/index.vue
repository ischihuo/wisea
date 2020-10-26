<template>
	<view class="w-demo">
		<view class="w-demo-wrap" style="background-color: #FFFFFF;">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-field
					v-model="mobile"
					label="手机号"
					:error-message="errorMessage"
					placeholder="请填写手机号"
					:required="required"
					:icon="icon1"
					:type="type"
				>
				</w-field>
				<w-field
					v-model="code"
					label="验证码"
					placeholder="请填写验证码"
					:required="required"
					:icon="icon2"
				>
					<w-button v-if="showBtn" slot="right" size="mini" type="success">发送验证码</w-button>
				</w-field>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">右侧按钮</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="showBtnChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">显示错误信息</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="errorMessageChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">是否必填</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="requiredChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">显示左图标和右箭头</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="customChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">第一个输入框为textarea类型</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="textareaChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				code: '',
				errorMessage: '',
				required: false,
				placeholderColor: this.$w.color['tipsColor'],
				arrow: false,
				showBtn: false,
				icon1: '',
				icon2: '',
				type: 'text',
			}
		},
		methods: {
			showBtnChange(index) {
				this.showBtn = index == 0 ? true : false;
			},
			errorMessageChange(index) {
				this.errorMessage = index == 0 ? '手机号有误' : false
			},
			requiredChange(index) {
				this.required = index == 0 ? true : false;
			},
			customChange(index) {
				if(index == 0) {
					this.icon1 = 'map';
					this.icon2 = 'photo';
					this.arrow = true;
				} else {
					this.icon1 = '';
					this.icon2 = '';
					this.arrow = false;
				}
			},
			textareaChange(index) {
				this.type = index == 0 ? 'textarea' : 'text';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {
		
	}
</style>
