<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast :type="type" ref="uToast"></w-toast>
				<text class="no-mode-here">见弹出toast</text>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">主题</view>
				<w-subsection vibrateShort :current="4" :list="['primary', 'success', 'error', 'warning', 'default']" @change="typeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">结束后自动跳转</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="urlChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">位置</view>
				<w-subsection vibrateShort current="1" :list="['顶部', '中部', '底部']" @change="positionChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">显示图标</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="iconChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 'success',
				title: '桃花潭水深千尺',
				icon: true,
				position: 'center',
				url: '',
			}
		},
		methods: {
			typeChange(index) {
				this.type = index == 0 ? 'primary' : index == 1 ? 'success' : index == 2 ? 'error' : index == 3 ? 'warning'  : 'default';
				this.show();
			},
			positionChange(index) {
				this.position = index == 0 ? 'top' : index == 1 ? 'center' : 'bottom';
				this.show();
			},
			iconChange(index) {
				this.icon = index == 0 ? true : false;
				this.show();
			},
			urlChange(index) {
				this.url = index == 0 ? '/pages/components/button/index' : '';
				this.show();
			},
			show() {
				this.$refs.uToast.show({
					title: this.title,
					position: this.position,
					type: this.type,
					icon: this.icon,
					url: this.url,
				});
			},
			hide() {
				this.$refs.uToast.hide();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.no-mode-here {
		color: $w-tips-color;
		font-size: 28rpx;
	}
</style>
