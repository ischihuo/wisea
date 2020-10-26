<template>
	<view class="w-tr">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * tr 表格行标签
	 * @description 表格组件一般用于展示大量结构化数据的场景（搭配<w-table>使用）
	 * @tutorial https://www.uviewui.com/components/table.html
	 * @example <w-tr></w-tr>
	 */
	export default {
		name: "w-tr",
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.w-tr {
		display: flex;
	}
</style>
