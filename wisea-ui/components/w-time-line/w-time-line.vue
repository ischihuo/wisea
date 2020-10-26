<template>
	<view class="w-time-axis">
		<slot />
	</view>
</template>

<script>
	/**
	 * timeLine 时间轴
	 * @description 时间轴组件一般用于物流信息展示，各种跟时间相关的记录等场景。
	 * @tutorial https://www.uviewui.com/components/timeLine.html
	 * @example <w-time-line></w-time-line>
	 */
	export default {
		name: "w-time-line",
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.w-time-axis {
		padding-left: 40rpx;
		position: relative;
	}

	.w-time-axis::before {
		content: " ";
		position: absolute;
		left: 0;
		top: 12rpx;
		width: 1px;
		bottom: 0;
		border-left: 1px solid #ddd;
		transform-origin: 0 0;
		transform: scaleX(0.5);
	}
</style>
