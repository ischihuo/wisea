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
				<view class="w-item-title">长度</view>
				<w-subsection vibrateShort current="2" :list="['10', '16', '32', 'rfc4122标准']" @change="lengthChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">首字符为"u"</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="fristUChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">取值基数(进制)</view>
				<w-subsection vibrateShort current="3" :list="['二', '八', '十', '六十二']" @change="radixChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				length: 32,
				firstU: true,
				radix: 62,
				result: null
			}
		},
		onLoad() {
			this.getResult();
		},
		methods: {
			lengthChange(index) {
				this.length = index == 0 ? 10 : index == 1 ? 16 : index == 2 ? 32 : null;
				this.getResult();
			},
			fristUChange(index) {
				this.firstU = index == 0 ? true : false;
				this.getResult();
			},
			radixChange(index) {
				this.radix = index == 0 ? 2 : index == 1 ? 8 : index == 2 ? 10 : 62;
				this.getResult();
			},
			getResult() {
				this.result = this.$w.guid(this.length, this.firstU, this.radix);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
