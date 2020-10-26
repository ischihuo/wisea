<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<view class="w-no-demo-here">
					请点击弹出遮罩查看效果
				</view>
				<w-mask :show="show" @click="show = false" :zoom="zoom" :duration="duration">
					<view class="warp" v-if="content">
						<view class="rect" @tap.stop></view>
					</view>
				</w-mask>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">状态</view>
				<w-subsection vibrateShort :current="current" :list="['显示', '隐藏']" @change="showChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">缩放效果</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="zoomChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">内容填充</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="contentChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">动画时长(ms)</view>
				<w-subsection vibrateShort current="1" :list="['100', '300', '800']" @change="durationChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				zoom: true,
				duration: 300,
				content: false,
			}
		},
		computed: {
			current() {
				return this.show ? 0 : 1;
			}
		},
		methods: {
			showChange(index) {
				this.show = index == 0 ? true : false;
			},
			zoomChange(index) {
				this.zoom = index == 0 ? true : false;
				this.show = true;
			},
			durationChange(index) {
				this.duration = index == 0 ? 100 : index == 1 ? 300 : 800;
				this.show = true;
			},
			contentChange(index) {
				this.content = index == 0 ? true : false;
				this.show = true;
			}
		}
	}
</script>

<style scoped lang="scss">
	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 120px;
		height: 120px;
		background-color: #fff;
	}
</style>
