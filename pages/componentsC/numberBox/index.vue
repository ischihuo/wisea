<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-number-box v-model="value" :bg-color="bgColor" :color="color" :min="0"
				:step="step" :disabled="disabled" @change="change"></w-number-box>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">初始值</view>
				<w-subsection vibrateShort :list="[1, 5, 18]" @change="valueChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义样式</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="styleChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">是否禁用</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="disabledChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">步进值</view>
				<w-subsection vibrateShort :list="[1, 3, 5, 8]" @change="stepChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: 1,
			bgColor: "#F2F3F5",
			color: '#323233',
			disabled: false,
			step: 1,
			
		};
	},
	methods: {
		valueChange(index) {
			this.value = index == 0 ? 1 : index == 1 ? 5 : 18;
		},
		styleChange(index) {
			if(index == 0) {
				this.bgColor = '#ff6d00';
				this.color = '#fff';
			} else {
				this.bgColor = "#F2F3F5";
				this.color = '#323233';
			}
		},
		disabledChange(index) {
			this.disabled = index == 0 ? true : false;
		},
		stepChange(index) {
			this.step = index == 0 ? 1 : index == 1 ? 3 : index == 2 ? 5 : 8;
		},
		change(e) {
			//console.log(e.value);
		}
	}
};
</script>

<style lang="scss" scoped>
.w-demo {}
</style>
