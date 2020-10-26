<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<view class="pre-box" v-if="!showUploadList">
					<view class="pre-item" v-for="(item, index) in lists" :key="index">
						<image class="pre-item-image" :src="item.url" mode="aspectFill"></image>
						<view class="w-delete-icon" @tap.stop="deleteItem(index)">
							<w-icon name="close" size="20" color="#ffffff"></w-icon>
						</view>
						<w-line-progress v-if="item.progress > 0 && !item.error" :show-percent="false" height="16" class="w-progress"
						 :percent="item.progress"></w-line-progress>
					</view>
				</view>
				<w-upload ref="uUpload" :custom-btn="customBtn" :show-upload-list="showUploadList" :action="action" :auto-upload="autoUpload"
				 :file-list="fileList" :show-progress="showProgress" :deletable="deletable" :max-count="maxCount" @on-list-change="onListChange">
					<view v-if="customBtn" slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
						<w-icon name="photo" size="60" :color="$w.color['lightColor']"></w-icon>
					</view>
				</w-upload>
				<w-button :custom-style="{marginTop: '20rpx'}" @click="upload">上传</w-button>
				<w-button :custom-style="{marginTop: '40rpx'}" @click="clear">清空列表</w-button>
				<!-- <w-button :custom-style="{marginTop: '40rpx'}" @click="reUpload">重新上传</w-button> -->
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">上传方式</view>
				<w-subsection vibrateShort current="1" :list="['自动上传', '手动上传']" @change="autoUploadChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义控件(进度条和删除按钮)</view>
				<w-subsection vibrateShort :list="['显示', '隐藏']" @change="controlChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">最大上传数量</view>
				<w-subsection vibrateShort current="1" :list="['1', '2', '4']" @change="maxCountChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义样式(预览区域和上传按钮)</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="customStyleChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				action: 'http://www.tp5.com',
				// 预置上传列表
				fileList: [],
				// fileList: [{
				// 	url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg',
				// 	error: false,
				// 	progress: 100
				// }],
				showUploadList: true,
				customBtn: false,
				autoUpload: false,
				showProgress: true,
				deletable: true,
				customStyle: false,
				maxCount: 2,
				lists: [], // 组件内部的文件列表
			}
		},
		onLoad() {

		},
		methods: {
			reUpload() {
				this.$refs.uUpload.reUpload();
			},
			clear() {
				this.$refs.uUpload.clear();
			},
			autoUploadChange(index) {
				this.autoUpload = index == 0 ? true : false;
			},
			controlChange(index) {
				if (index == 0) {
					this.showProgress = true;
					this.deletable = true;
				} else {
					this.showProgress = false;
					this.deletable = false;
				}
			},
			maxCountChange(index) {
				this.maxCount = index == 0 ? 1 : index == 1 ? 2 : 4;
			},
			customStyleChange(index) {
				if (index == 0) {
					this.showUploadList = false;
					this.customBtn = true;

				} else {
					this.showUploadList = true;
					this.customBtn = false;
				}
			},
			upload() {
				// this.$w.uploadFile({
				// 	'type': 'video'
				// }).then(res => {
				// 	console.log(res)

				// }).catch(err => {
				// 	console.log(err)
				// })
				this.$refs.uUpload.upload();
			},
			deleteItem(index) {
				this.$refs.uUpload.remove(index);
			},
			onOversize(file, lists) {
				// console.log('onOversize', file, lists);
			},
			onPreview(url, lists) {
				// console.log('onPreview', url, lists);
			},
			onRemove(index, lists) {
				// console.log('onRemove', index, lists);
			},
			onSuccess(data, index, lists) {
				// console.log('onSuccess', data, index, lists);
			},
			onChange(res, index, lists) {
				// console.log('onChange', res, index, lists);
			},
			error(res, index, lists) {
				// console.log('onError', res, index, lists);
			},
			onProgress(res, index, lists) {
				// console.log('onProgress', res, index, lists);
			},
			onUploaded(lists) {
				// console.log('onUploaded', lists);
			},
			onListChange(lists) {
				// console.log('onListChange', lists);
				this.lists = lists;
			},
		}
	}
</script>

<style lang="scss">
	.w-demo-wrap {
		background-color: #FFFFFF;
		padding: 40rpx 8rpx;
		margin-left: -14rpx;
		margin-right: -14rpx;
	}

	.w-add-wrap {
		flex-direction: column;
		color: $w-content-color;
		font-size: 28rpx;
	}

	/deep/ .slot-btn {
		width: 329rpx;
		height: 140rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(244, 245, 246);
		border-radius: 10rpx;
	}

	.slot-btn__hover {
		background-color: rgb(235, 236, 238);
	}

	.pre-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.pre-item {
		flex: 0 0 48.5%;
		border-radius: 10rpx;
		height: 140rpx;
		overflow: hidden;
		position: relative;
		margin-bottom: 20rpx;
	}

	.w-progress {
		position: absolute;
		bottom: 10rpx;
		left: 8rpx;
		right: 8rpx;
		z-index: 9;
		width: auto;
	}

	.pre-item-image {
		width: 100%;
		height: 140rpx;
	}

	.w-delete-icon {
		position: absolute;
		top: 10rpx;
		right: 10rpx;
		z-index: 10;
		background-color: $w-type-error;
		border-radius: 100rpx;
		width: 44rpx;
		height: 44rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
