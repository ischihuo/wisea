<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-button @click="btnClick">唤起弹窗</w-button>
				<w-popup border-radius="10" v-model="show" 
					@close="close" @open="open" :mode="mode" 
					length="50%" :mask="mask"
					:closeable="closeable"
					:close-icon-pos="closeIconPos"
				>
					<view v-if="mode == 'center'" style="height: 400rpx">
						<view class="close-btn">
							<w-button @click="show = false;" size="medium">关闭弹窗</w-button>
						</view>
					</view>
					<view class="close-btn" v-if="mode != 'center'">
						<w-button size="medium" @click="show = false;">关闭弹窗</w-button>
					</view>
				</w-popup>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">状态</view>
				<w-subsection vibrateShort :current="show == false ? 1 : 0" :list="['打开', '关闭']" @change="showChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">弹出方向</view>
				<w-subsection vibrateShort :current="2" :list="['上', '下', '左', '右', '中']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">关闭按钮</view>
				<w-subsection vibrateShort :list="['显示', '隐藏']" @change="closeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">关闭按钮位置</view>
				<w-subsection vibrateShort :current="1" :list="['左上角', '右上角', '左下角', '右下角']" @change="closePosChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				mode: 'left',
				mask: true, // 是否显示遮罩
				closeable: true,
				closeIconPos: 'top-right'
			}
		},
		watch: {
			show(n) {
				// console.log(n);
			}
		},
		methods: {
			modeChange(index) {
				this.mode = index == 0 ? 'top' : index == 1 ? 'bottom' : index == 2 ? 'left' : index == 3 ? 'right' : 'center';
				this.show = true;
			},
			showChange(index) {
				this.show = index == 0 ? true : false;
			},
			closeChange(index) {
				this.closeable = !index;
			},
			closePosChange(index) {
				this.closeIconPos = ['top-left', 'top-right', 'bottom-left', 'bottom-right'][index];
			},
			close() {
				// console.log('close');
			},
			open() {
				// console.log('open');
			},
			btnClick() {
				this.show = true;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.close-btn {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
