<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-search v-model="value" @change="change" @custom="custom" @search="search" :shape="shape" :clearabled="clearabled" 
				:show-action="showAction" :input-align="inputAlign" @clear="clear"></w-search>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">初始值</view>
				<w-subsection vibrateShort :list="['空', '天山雪莲']" @change="valueChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">搜索框形状</view>
				<w-subsection vibrateShort :list="['圆形', '方形']" @change="shapeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">清除控件</view>
				<w-subsection vibrateShort :list="['启用', '关闭']" @change="clearabledChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">右侧控件</view>
				<w-subsection vibrateShort :list="['启用', '关闭']" @change="showActionChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">水平对齐方式</view>
				<w-subsection vibrateShort :list="['左', '中', '右']" @change="inputAlignChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				shape: 'round',
				clearabled: true,
				showAction: true,
				inputAlign: 'left'
			}
		},
		watch: {
			// 这里的演示为证明通过v-model绑定值，它是双向绑定的，意味着您无需监听change事件
			// 也能知道value值当前的内容
			value(val) {
				// console.log(val);
			}
		},
		methods: {
			valueChange(index) {
				this.value = index == 0 ? '' : '天山雪莲';
			},
			shapeChange(index) {
				this.shape = index == 0 ? 'round' : 'square';
			},
			clearabledChange(index) {
				this.clearabled = index == 0 ? true : false;
			},
			showActionChange(index) {
				this.showAction = index == 0 ? true : false;
			},
			inputAlignChange(index) {
				this.inputAlign = index == 0 ? 'left' : index == 1 ? 'center' : 'right';
			},
			change(value) {
				// 搜索框内容变化时，会触发此事件，value值为输入框的内容
				//console.log(value);
			},
			custom(value) {
				//console.log(value);
				this.$w.toast('输入值为：' + value)
			},
			search(value) {
				this.$refs.uToast.show({
					title: '搜索内容为：' + value,
					type: 'success'
				})
			},
			clear() {
				// console.log(this.value);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
