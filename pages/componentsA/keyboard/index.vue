<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="input-wrap">
					<input class="input" disabled type="text" :value="input" placeholder="来自键盘的输入内容" />
					<w-button :custom-style="{height: '32px'}" :hairLine="false" class="clear-btn" @tap="input = ''">清空</w-button>
				</view>
				<w-keyboard :mask="mask" ref="uKeyboard" safe-area-inset-bottom @confirm="confirm" 
				:random="random" :dotEnable="false" :mode="mode"
				:confirmBtn="true" :cancelBtn="true" :tooltip="tooltip" v-model="show" 
				@change="change" @backspace="backspace"></w-keyboard>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置 
			</view>
			<view class="w-config-item">
				<view class="w-item-title">键盘开关</view>
				<w-subsection vibrateShort :current="show == true ? 0 : 1" :list="['开', '关']" @change="statusChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">键盘类型</view>
				<w-subsection vibrateShort :list="['数字键盘', '身份证键盘', '车牌号键盘']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">打乱顺序</view>
				<w-subsection vibrateShort :current="1" :list="['是', '否']" @change="randomChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">上方工具条</view>
				<w-subsection vibrateShort :list="['显示', '隐藏']" @change="tooltipChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">是否显示遮罩</view>
				<w-subsection vibrateShort :list="['显示', '隐藏']" @change="maskChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				input: '', 
				mode: 'number',
				random: false,
				tooltip: true,
				mask: true,
				
			}
		},
		methods: {
			statusChange(index) {
				this.show = index == 0 ? true : false;
			},
			modeChange(index) {
				if(index == 0) this.mode = 'number';
				if(index == 1) this.mode = 'card';
				if(index == 2) this.mode = 'car';
				this.show = true;
			},
			randomChange(index) {
				this.random = index == 0 ? true : false;
				this.show = true;
			},
			tooltipChange(index) {
				this.tooltip = index == 0 ? true : false;
				this.show = true;
			},
			maskChange(index) {
				this.show = true;
				this.mask = !index;
			},
			// 点击退格键
			backspace() {
				if(this.input.length) this.input = this.input.substr(0, this.input.length - 1);
			},
			// 键盘按键发生变化
			change(detail) {
				this.input += detail;
			},
			confirm(e) {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input {
		border: 1px solid $w-light-color;
		border-radius: 4px;
		margin-bottom: 20px;
		height: 32px;
		font-size: 26rpx;
		flex: 1;
		box-sizing: border-box;
	}
	
	.input-wrap {
		display: flex;
	}
	
	.clear-btn {
		margin-left: 10px;
		font-size: 28rpx;
	}
</style>
