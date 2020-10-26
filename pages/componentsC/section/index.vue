<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-section :title="title" :right="right" :bold="bold" :color="color" :show-line="false"></w-section>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">更换主标题</view>
				<w-subsection vibrateShort :current="1" :list="['是', '否']" @change="titleChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">是否显示右边部分</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="rightChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">主标题粗体</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="boldChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">主标题颜色</view>
				<w-subsection vibrateShort :list="['默认', '自定义']" @change="colorChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '红豆生南国',
				bold: true,
				right: true,
				color: this.$w.color['mainColor']
			}
		},
		methods: {
			titleChange(index) {
				if(index == 0) this.title = '春来发几枝';
				else  this.title = '红豆生南国';
			},
			rightChange(index) {
				this.right = index == 0 ? true : false;
			},
			boldChange(index) {
				this.bold = index == 0 ? true : false;
			},
			colorChange(index) {
				this.color = index == 0 ? this.$w.color['mainColor'] : this.$w.color['primary'];
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
