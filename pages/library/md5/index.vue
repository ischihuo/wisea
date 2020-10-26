<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-demo-result-line">
					{{result}}
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">源字符串</view>
				<w-subsection vibrateShort :list="['Take me', 'to', 'your heart']" @change="getResult"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	import md5Libs from "wisea-ui/libs/function/md5";
	export default {
		data() {
			return {
				result: null,
				string: 'Take me'
			}
		},
		onLoad() {
			this.getResult();
		},
		methods: {
			getResult(index) {
				this.string = index == 0 ? 'Take me' : index == 1 ? 'to' : 'you heart';
				this.result = md5Libs.md5(this.string);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
