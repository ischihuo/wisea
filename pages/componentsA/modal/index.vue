<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<view class="w-no-demo-here">请点击弹出弹窗查看效果</view>
				<w-modal ref="uModal" v-model="show" :show-cancel-button="true" 
					:show-title="showTitle" :async-close="asyncClose"
					@confirm="confirm" :content="content"
				>
					<!-- #ifndef MP-WEIXIN -->
					<view class="warp" style="margin: 30rpx;" v-if="contentSlot">
						<image class="logo" src="https://uviewui.com/common/logo.png" style="width: 220rpx;" mode="widthFix"></image>
					</view>
					<!-- #endif -->
				</w-modal>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">参数配置</view>
			<view class="w-config-item">
				<view class="w-item-title">状态</view>
				<w-subsection vibrateShort :current="current" :list="['显示', '隐藏']" @change="showChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">是否显示标题</view>
				<w-subsection vibrateShort current="0" :list="['是', '否']" @change="titleChange"></w-subsection>
			</view>
			<!-- #ifndef MP-WEIXIN -->
			<view class="w-config-item">
				<view class="w-item-title">自定义内容</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="contentChange"></w-subsection>
			</view>
			<!-- #endif -->
			<view class="w-config-item">
				<view class="w-item-title">异步关闭</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="asyncChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				zoom: false,
				content: '慈母手中线，游子身上衣',
				contentSlot: false,
				showTitle: true,
				asyncClose: false,
			};
		},
		computed: {
			current() {
				return this.show ? 0 : 1;
			}
		},
		methods: {
			showChange(index) {
				this.show = !index;
			},
			titleChange(index) {
				this.showTitle = !index;
				this.show = true;
			},
			contentChange(index) {
				this.contentSlot = !index;
				this.show = true;
			},
			asyncChange(index) {
				this.show = true;
				this.asyncClose = !index;
			},
			confirm() {
				setTimeout(() => {
					this.show = false;
				}, 2000)
			}
		}
	};
</script>

<style scoped lang="scss">
	.logo {
		height: auto;
		will-change: transform;
	}
</style>
