<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					源对象1为："{info: {name: 'mary'}}"
					<view class="">
						
					</view>
					源对象2为："{info: {age: '22'}}"
				</view>
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
				<view class="w-item-title">模式</view>
				<w-subsection vibrateShort :list="['浅拷贝', '深拷贝']" @change="modeChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				obj1: {
					info: {
						name: 'mary'
					}
				},
				obj2: {
					info: {
						age: '22'
					}
				},
				// obj1和obj3一样，原因是Object.assign(this.obj1, this.obj2)会修改obj1的值
				obj3: {
					info: {
						name: 'mary'
					}
				},
				result: ''
			}
		},
		onLoad() {
			this.result = Object.assign(this.obj1, this.obj2);
			// 重新修改obj1为原来的值
			this.obj1 = this.$w.deepClone(this.obj3);
		},
		methods: {
			modeChange(index) {
				if(!index) {
					this.result = Object.assign(this.obj1, this.obj2);
					// 重新修改obj1为原来的值
					this.obj1 = this.$w.deepClone(this.obj3);
				} else {
					this.result = this.$w.deepMerge(this.obj1, this.obj2);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
