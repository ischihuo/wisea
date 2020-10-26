<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">时间戳为：{{timestamp}}</view>
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
				<view class="w-item-title">格式</view>
				<w-subsection vibrateShort :list="['yyyy-mm-dd', 'yyyy年-mm月-dd日']" @change="format1Change"></w-subsection>
				<view style="margin-top: 50rpx;">
					<w-subsection vibrateShort  :list="['mm-dd', 'yyyy-mm-dd hh:MM']" @change="format2Change"></w-subsection>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timestamp: '1582711721',
				result: null
			}
		},
		onLoad() {
			// 本时间格式化方法，也支持模板中过滤器形式写法，如
			// {{1585926095536 | date('yyyy-mm-dd')}} 或者 {{1585926095536 | date}}，因为'yyyy-mm-dd'为默认的参数
			this.getResult('yyyy-mm-dd');
		},
		methods: {
			format1Change(index) {
				let format = index == 0 ? 'yyyy-mm-dd' : 'yyyy年-mm月-dd日';
				this.getResult(format);
			},
			format2Change(index) {
				let format = index == 0 ? 'mm-dd' : 'yyyy-mm-dd hh:MM';
				this.getResult(format);
			},
			getResult(format) {
				this.result = this.$w.timeFormat(this.timestamp, format);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
