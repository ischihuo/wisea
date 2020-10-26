<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<view class="w-no-demo-here" style="text-align: left;">
					根据当前时间，返回类似"刚刚，5分钟前，8小时前，3天前"等字样
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
				<view class="w-item-title">时间</view>
				<w-subsection vibrateShort :list="timeArr1" @change="timeArr1Change"></w-subsection>
				<w-gap></w-gap>
				<w-subsection vibrateShort style="margin-top: 40rpx;" :list="timeArr2" @change="timeArr2Change"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				timeArr1: [0, 0],
				timeArr2: [0, 0],
				result: null
			}
		},
		onLoad() {
			this.getRandomTime();
			this.timeArr1Change(0);
		},
		methods: {
			getRandomTime() {
				let nowTime = Number(+ new Date());
				let threeDayAgo = nowTime - 2 * 86400000;
				this.timeArr1.map((val, index) => {
					this.timeArr1[index] = this.$w.timeFormat(this.$w.random(threeDayAgo, nowTime), 'yyyy/mm/dd hh:MM:ss');
					this.timeArr2[index] = this.$w.timeFormat(this.$w.random(threeDayAgo, nowTime), 'yyyy/mm/dd hh:MM:ss');
				})
			},
			timeArr1Change(index) {
				this.result = this.$w.timeFrom((new Date(this.timeArr1[index])).getTime());
			},
			timeArr2Change(index) {
				this.result = this.$w.timeFrom((new Date(this.timeArr2[index])).getTime());
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {}
</style>
