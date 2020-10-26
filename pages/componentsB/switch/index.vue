<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-switch v-model="checked" :loading="loading" 
					:size="size" @change="change" 
					:active-color="activeColor"
					:disabled="disabled"
					:activeValue="100"
					:inactiveValue="1"
				></w-switch>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">状态</view>
				<w-subsection vibrateShort :list="['关闭', '打开']" @change="modelChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">颜色</view>
				<w-subsection vibrateShort :list="['primary', 'error', 'warning', 'success']" @change="colorChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">尺寸(单位rpx)</view>
				<w-subsection vibrateShort current="1" :list="['40', '60', '80']" @change="sizeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">加载中</view>
				<w-subsection vibrateShort :list="['否', '是']" @change="loadingChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">禁用</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="disabledChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">异步控制</view>
				<w-subsection vibrateShort :list="['关闭', '打开']" @change="asyncChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				activeColor: '#2979ff',
				size: 50,
				loading: false,
				disabled: false
			}
		},
		methods: {
			modelChange(index) {
				// 两个!!可以把0变成false，1变成true
				this.checked = !!index;
			},
			colorChange(index) {
				let color = index == 0 ? 'primary' : index == 1 ? 'error' : index == 2 ? 'warning' : 'success';
				this.activeColor = this.$w.color[color];
			},
			sizeChange(index) {
				this.size = index == 0 ? '40' : index == 1 ? '60' : '80';
			},
			loadingChange(index) {
				this.loading = !!index;
			},
			disabledChange(index) {
				this.disabled = index == 0 ? true : false;
			},
			asyncChange(index) {
				if(this.checked && index == 1) {
					this.$w.toast('请先关闭选择器');
					return;
				}
				if(!this.checked && index == 0) {
					this.$w.toast('请先打开选择器');
					return;
				}
				let str = index == 0 ? '是否要关闭？' : '是否要打开？';
				this.loading = true;
				let oldStatus = this.checked;
				this.checked = true;
				uni.showModal({
					title: '提示',
					content: str,
					complete: (res) => {
						this.loading = false;
						if(res.confirm) {
							if(oldStatus) this.checked = false;
							else this.checked = true;
						} else {
							if(!oldStatus) this.checked = false;
							else this.checked = true;
						}
					}
				})
			},
			change(value) {
				// console.log(value);
			}
		}
	}
</script>

<style scoped lang="scss">
	.w-demo {}
</style>
