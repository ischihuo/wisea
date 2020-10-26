<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					源字符串：{{`"${string}"`}}
				</view>
				<view class="w-demo-result-line">
					{{`"${result}"`}}
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式选择</view>
				<w-subsection vibrateShort :list="['左空格', '全部空格', '两边空格', '右空格']" @change="modeChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				string: "  我用十年  青春，赴你  最后之约  ",
				result: '',
				pos: 'left'
			}
		},
		onLoad() {
			this.getResult();
		},
		methods: {
			paramsChange(index) {
				if(index == 0) {
					this.min = 0;
					this.max = 5;
				} else {
					this.min = 541;
					this.max = 8164;
				}
				this.getResult();
			},
			modeChange(index) {
				this.pos = index == 0 ? 'left' : index == 1 ? 'all' : index == 2 ? 'both' : 'right';
				this.getResult();
			},
			getResult() {
				this.result = this.$w.trim(this.string, this.pos);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
