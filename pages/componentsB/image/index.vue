<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area w-flex w-row-center">
				<w-image border-radius="100%" :shape="shape" ref="uImage" :width="width" :height="height" :src="src" mode="aspectFill">
					<w-loading size="44" mode="flower" slot="loading" v-if="loadingSlot"></w-loading>
					<view v-if="errorSlot" slot="error" style="font-size: 24rpx;">加载失败</view>
				</w-image>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">参数配置</view>
			<view class="w-config-item">
				<view class="w-item-title">状态</view>
				<w-subsection :current="statusCurrent" vibrateShort :list="['加载成功', '加载中', '加载失败']" @change="statusChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">加载中状态</view>
				<w-subsection vibrateShort :list="['默认', '自定义']" @change="loadingChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">加载失败状态</view>
				<w-subsection vibrateShort :list="['默认', '自定义']" @change="errorChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">形状</view>
				<w-subsection vibrateShort :list="['方形', '圆形']" @change="shapeChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			src: 'https://cdn.uviewui.com/uview/example/fade.jpg',
			width: '200',
			height: '200',
			loadingSlot: false,
			statusCurrent: 0,
			errorSlot: false,
			shape: 'square'
		};
	},
	computed: {
		// statusCurrent() {
		// }
	},
	methods: {
		statusChange(index) {
			// 此处通过ref操作组件内部状态，仅是为了演示使用，实际中无需这些操作，由内部的图片加载事件自动完成
			if (index == 0) {
				this.src = 'http://img5.imgtn.bdimg.com/it/u=2438062088,2808868405&fm=26&gp=0.jpg';
				this.$refs.uImage.loading = false;
				this.$refs.uImage.isError = false;
			} else if (index == 1) {
				this.$refs.uImage.loading = true;
			} else {
				this.$refs.uImage.loading = false;
				this.$refs.uImage.isError = true;
			}
		},
		loadingChange(index) {
			this.statusCurrent = 1;
			this.statusChange(1);
			if (index == 0) {
				this.loadingSlot = false;
			} else {
				this.loadingSlot = true;
			}
		},
		errorChange(index) {
			this.statusCurrent = 2;
			this.statusChange(2);
			if (index == 0) {
				this.errorSlot = false;
			} else {
				this.errorSlot = true;
			}
		},
		shapeChange(index) {
			this.shape = index == 0 ? 'square' : 'circle';
		}
	}
};
</script>

<style scoped lang="scss">
.w-demo-area {
}
</style>
