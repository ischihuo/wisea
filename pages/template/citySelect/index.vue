<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<city-select v-model="value" @city-change="cityChange"></city-select>
				<view class="w-demo-result-line">{{ input ? input : 'Picker值' }}</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">参数配置</view>
			<view class="w-config-item">
				<view class="w-item-title">状态</view>
				<w-button @click="value = true">打开Picker</w-button>
			</view>
		</view>
	</view>
</template>

<script>
import citySelect from './w-city-select.vue';
export default {
	components: {
		citySelect
	},
	data() {
		return {
			height: 30,
			bgColor: this.$w.color.bgColor,
			marginTop: 30,
			marginBottom: 30,
			value: false,
			input: '',
		};
	},
	methods: {
		cityChange(e) {
			this.input = e.province.label + '-' + e.city.label + '-' + e.area.label;
		}
	}
};
</script>

<style scoped>
	.btn-wrap {
		margin: 100rpx 30rpx;
	}
</style>
