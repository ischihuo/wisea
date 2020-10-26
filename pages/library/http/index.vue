<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="no-mode-here">
					请求结果为：
				</view>
				<view class="w-demo-result-line">
					{{JSON.stringify(result)}}
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">请求方式</view>
				<w-subsection vibrateShort :list="['get', 'post']" @change="getResult"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result: {}
			}
		},
		onLoad() {
			this.getGet();
		},
		methods: {
			getGet() {
				this.$w.get('/ebapi/store_api/hot_search', {
					id: 2
				}).then(res => {
					this.result = res;
				})
			},
			getPost() {
				this.$w.post('/ebapi/public_api/index', {
					id: 1
				}).then(res => {
					this.result = res.banner;
				})
			},
			getResult(index) {
				index == 0 ? this.getGet() : this.getPost();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
