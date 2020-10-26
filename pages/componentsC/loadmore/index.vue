<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast" />
				<w-loadmore :status="status" bg-color="rgb(250, 250, 250)" :loadText="loadText"
				:icon-type="iconType" :is-dot="isDot" @loadmore="loadmore"/>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式选择</view>
				<w-subsection :current="current" vibrateShort :list="['加载前', '加载中', '加载后', '没有更多']" @change="statusChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义提示语</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="loadTextChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">加载中图标样式</view>
				<w-subsection vibrateShort :list="['circle', 'flower']" @change="styleChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">没有更多时用点替代</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="isDotChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'loadmore',
				iconType: 'circle',
				isDot: false,
				loadText: {
					loadmore: '点击或上拉加载更多',
					loading: '正在加载...',
					nomore: '没有更多了'
				},
				current: 0
			}
		},
		onReachBottom() {
			// 在此请求下一页
		},
		methods: {
			statusChange(index) {
				this.current = index;
				this.status = index == 0 ? 'loadmore' : index == 1 ? 'loading' : index == 2 ? 'loadmore' : 'nomore';
			},
			loadTextChange(index) {
				if(index == 0) {
					this.loadText = {
						loadmore: '用力往上拉',
						loading: '正在加载，请喝杯茶...',
						nomore: '我也是有底线的'
					}
				} else {
					this.loadText = {
						loadmore: '点击或上拉加载更多',
						loading: '正在加载...',
						nomore: '没有更多了'
					}
				}
			},
			styleChange(index) {
				this.current = 1;
				this.statusChange(1);
				this.iconType = index == 0 ? 'circle' : 'flower';
			},
			isDotChange(index) {
				this.current = 3;
				this.statusChange(3);
				this.isDot = index == 0 ? true : false;
			},
			// 点击组件，触发加载更多事件(status为'loadmore'状态下才触发)
			loadmore() {
				this.$refs.uToast.show({
					title: '点击触发加载更多',
					type: 'success'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>