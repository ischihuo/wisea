<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-divider :type="type" :borderColor="borderColor" :bg-color="bgColor" @click="click"
				:half-width="halfWidth" :color="color" :font-size="fontSize">{{text}}</w-divider>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">提示内容</view>
				<w-subsection vibrateShort :list="['没有更多了', '到底了']" @change="textChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">单边线宽</view>
				<w-subsection vibrateShort current="1" :list="['50', '150', '250']" @change="halfWidthChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">横线颜色</view>
				<w-subsection vibrateShort :list="['#dcdfe6', 'primary', 'error', 'warning', 'success']" @change="borderColorChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">内容样式</view>
				<w-subsection vibrateShort :list="['默认', '自定义']" @change="contentChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: '没有更多了',
				bgColor: '#fafafa',
				halfWidth: 150,
				borderColor: '#dcdfe6',
				type: 'primary',
				color: '#909399',
				fontSize: '26'
			}
		},
		methods: {
			textChange(index) {
				this.text = index == 0 ? '没有更多了' : '到底了';
			},
			halfWidthChange(index) {
				this.halfWidth = index == 0 ? 50 : index == 1 ? 150 : 250;
			},
			borderColorChange(index) {
				if(index == 0) {
					this.borderColor = '#dcdfe6';
				} else {
					// 因为border-color参数优先级高于type，要让type起作用，就需要设置border-color为空
					this.borderColor = '';
					this.type = index == 1 ? 'primary' : index == 2 ? 'error' : index == 3 ? 'warning' : 'success';
				}
			},
			contentChange(index) {
				if(index == 0) {
					 this.color = '#909399';
					 this.fontSize = 26;
				} else {
					this.color = this.$w.color['primary'];
					this.fontSize = 30;
				}
			},
			click() {
				console.log('click');
			}
		}
	}
</script>

<style scoped lang="scss">
	.w-demo {}
</style>
