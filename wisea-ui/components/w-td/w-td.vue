<template>
	<view class="w-td" :style="[tdStyle]">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * td td单元格
	 * @description 表格组件一般用于展示大量结构化数据的场景（搭配w-table使用）
	 * @tutorial https://www.uviewui.com/components/table.html#td-props
	 * @property {String Number} width 单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分tr的长度（默认auto）
	 * @example <w-td>二年级</w-td>
	 */
	export default {
		name: "w-td",
		props: {
			// 宽度，百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比
			width: {
				type: [Number, String],
				default: 'auto'
			}
		},
		inject: ['uTable'],
		computed: {
			tdStyle() {
				let style = {};
				if (this.width != "auto") style.flex = `0 0 ${this.width}`;
				style.textAlign = this.uTable.align;
				style.fontSize = this.uTable.fontSize + 'rpx';
				style.padding = this.uTable.padding;
				style.borderBottom = `solid 1px ${this.uTable.borderColor}`;
				style.borderRight = `solid 1px ${this.uTable.borderColor}`;
				style.color = this.uTable.color;
				return style;
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.w-td {
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		font-size: 28rpx;
		color: $w-content-color;
		align-self: stretch;
		box-sizing: border-box;
	}

	.w-col-1 {
		flex: 0 0 calc(100%/12);
	}

	.w-col-2 {
		flex: 0 0 calc(100%/12 * 2);
	}

	.w-col-3 {
		flex: 0 0 calc(100%/12 * 3);
	}

	.w-col-4 {
		flex: 0 0 calc(100%/12 * 4);
	}

	.w-col-5 {
		flex: 0 0 calc(100%/12 * 5);
	}

	.w-col-6 {
		flex: 0 0 calc(100%/12 * 6);
	}

	.w-col-7 {
		flex: 0 0 calc(100%/12 * 7);
	}

	.w-col-8 {
		flex: 0 0 calc(100%/12 * 8);
	}

	.w-col-9 {
		flex: 0 0 calc(100%/12 * 9);
	}

	.w-col-10 {
		flex: 0 0 calc(100%/12 * 10);
	}

	.w-col-11 {
		flex: 0 0 calc(100%/12 * 11);
	}

	.w-col-12 {
		flex: 0 0 calc(100%/12 * 12);
	}
</style>
