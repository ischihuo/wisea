<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-subsection v-if="change" :bold="bold" :active-color="activeColor" :current="current" :mode="mode" :list="['代付款', '待收货', '待评价']"></w-subsection>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式选择(为满足演示需要，切换会有抖动，非性能问题)</view>
				<w-subsection vibrateShort mode="button" :list="['button', 'subsection']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">Current值</view>
				<w-subsection vibrateShort mode="button" :list="[0, 1, 2]" @change="currentChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">活动选项字颜色</view>
				<w-subsection vibrateShort mode="button" :list="['primary', 'success', 'error', 'warning']" @change="colorChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">字体加粗</view>
				<w-subsection vibrateShort mode="button" :list="['是', '否']" @change="boldChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: 'button',
				current: 0,
				activeColor: this.$w.color['warning'],
				bold: true,
				change: true,
			}
		},
		methods: {
			modeChange(e) {
				switch(e) {
					case 0:
						this.mode = 'button';break;
					case 1:
						this.mode = 'subsection';break;
				}
				this.change = false;
				this.$nextTick(() => {
					this.change = true;
				})
			},
			currentChange(e) {
				this.current = e;
			},
			colorChange(e) {
				let color = 'primary';
				switch(e) {
					case 0:
						color = 'primary';break;
					case 1:
						color = 'success';break;
					case 2:
						color = 'error';break;
					case 3:
						color = 'warning';break;
				}
				this.activeColor = this.$w.color[color];
			},
			boldChange(e) {
				switch(e) {
					case 0:
						this.bold = true;break;
					case 1:
						this.bold = false;break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
