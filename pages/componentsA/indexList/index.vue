<template>
	<w-index-list :scrollTop="scrollTop" :index-list="indexList">
		<view v-for="(item, index) in list" :key="index">
			<w-index-anchor :index="item.letter" />
			<view class="list-cell w-border-bottom" v-for="(item1, index) in item.data" :key="index">
				{{item1.name}}
			</view>
		</view>
	</w-index-list>
</template>

<script>
	import indexList from "@/common/index.list.js";
	const letterArr = indexList.list.map(val => {
		return val.letter;
	})
	export default {
		data() {
			return {
				scrollTop: 0,
				indexList: letterArr,
				list: indexList.list
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss" scoped>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: $w-content-color;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
