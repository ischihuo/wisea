<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<view class="w-avatar-wrap">
					<image @tap="preAvatar" class="w-avatar-demo" v-if="avatar" :src="avatar" mode="aspectFill"></image>
				</view>
				<w-button @click="chooseAvatar">选择图片</w-button>
			</view>
		</view>
		<!-- <view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">生成图片质量</view>
				<w-subsection vibrateShort :current="1" :list="['0.3', '0.7', '1']" @change="qualityChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义参数</view>
				<w-subsection vibrateShort :current="1" :list="['是', '否']" @change="styleChange"></w-subsection>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: 'https://cdn.uviewui.com/uview/common/logo.png',
			}
		},
		created() {
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				// 可以在此上传到服务端
				// uni.uploadFile({
				// 	url: 'http://192.168.100.17/index.php/index/index/upload',
				// 	filePath: path,
				// 	name: 'file',
				// 	complete: (res) => {
				// 		console.log(res);
				// 	}
				// });
			})
		},
		methods: {
			chooseAvatar() {
				this.$w.route({
					url: '/wisea-ui/components/w-avatar-cropper/w-avatar-cropper',
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 300,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 200,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
			},
			qualityChange(index) {
				this.quality = index == 0 ? 0.3 : index == 1 ? 0.7 : 1;
			},
			styleChange(index) {
				if (index == 0) {
					this.rectHeight = this.rectWidth = this.destHeight = this.destWidth = 200;
					this.boundStyle = {
						lineWidth: 8,
						borderColor: this.$w.color['error'],
						mask: 'rgba(0, 0, 0, 0.8)'
					}
				} else {
					this.rectHeight = this.rectWidth = this.destHeight = this.destWidth = 400;
					this.boundStyle = {
						lineWidth: 4,
						borderColor: 'rgb(245, 245, 245)',
						mask: 'rgba(0, 0, 0, 0.35)'
					}
				}
			},
			// 预览图片
			preAvatar() {
				wx.previewImage({
					current: '', // 当前显示图片的 http 链接
					urls: [this.avatar] // 需要预览的图片 http 链接列表
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}

	.w-avatar-wrap {
		overflow: hidden;
		margin-bottom: 20rpx;
	}

	.w-avatar-demo {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100rpx;
	}
</style>
