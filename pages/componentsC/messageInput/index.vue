<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-message-input :mode="mode" :maxlength="maxlength" :value="value"
				:breathe="breathe" :bold="bold" @finish="finish" :dot-fill="dotFill"></w-message-input>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式选择</view>
				<w-subsection vibrateShort :list="['方框', '下划线', '中划线']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">输入长度</view>
				<w-subsection vibrateShort :list="[4, 5, 6]" @change="maxLengthChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<!-- #ifdef MP-WEIXIN -->
				<view class="w-item-title">初始值(为满足演示需要，微信小程序切换会有抖动，非性能问题)</view>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<view class="w-item-title">初始值</view>
				<!-- #endif -->
				<w-subsection vibrateShort :list="['空', '23', '678']" @change="valueChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">呼吸灯效果</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="breatheChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">是否加粗</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="boldChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">点替代输入值</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="dotFillChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: 'box',
				maxlength: 4,
				value: '', 
				bold: true,
				breathe: true,
				dotFill: false,
			}
		},
		computed: {

		},
		onLoad() {

		},
		methods: {
			modeChange(index) {
				this.mode = index == 0 ? 'box' : index == 1 ? 'bottomLine' : 'middleLine';
			},
			maxLengthChange(index) {
				this.maxlength = index == 0 ? 4 : index == 1 ? 5 : 6;
			},
			valueChange(index) {
				this.value = index == 0 ? '' : index == 1 ? '23' : '678';
			},
			breatheChange(index) {
				this.breathe = index == 0 ? true : false;
			},
			boldChange(index) {
				this.bold = index == 0 ? true : false;
			},
			dotFillChange(index) {
				this.dotFill = index == 0 ? true : false;
			},
			finish(value) {
				this.$refs.uToast.show({
					title: '输入完成，值为：' + value,
					type: 'success'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
