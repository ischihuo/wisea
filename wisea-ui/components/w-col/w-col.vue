<template>
	<view class="w-col" :class="[
		'w-col-' + span
	]" :style="{
		padding: `0 ${Number(gutter)/2 + 'rpx'}`,
		marginLeft: 100 / 12 * offset + '%',
		flex: `0 0 ${100 / 12 * span}%`,
		alignItems: uAlignItem,
		justifyContent: uJustify,
		textAlign: textAlign
	}" @tap.stop.prevent="click">
		<slot></slot>
	</view>
</template>

<script>
	/**
	 * col 布局单元格
	 * @description 通过基础的 12 分栏，迅速简便地创建布局（搭配<w-row>使用）
	 * @tutorial https://www.uviewui.com/components/layout.html
	 * @property {String Number} span 栅格占据的列数，总12等分（默认0）
	 * @property {String} text-align 文字水平对齐方式（默认left）
	 * @property {String Number} offset 分栏左边偏移，计算方式与span相同（默认0）
	 * @example <w-col span="3"><view class="demo-layout bg-purple"></view></w-col>
	 */
	export default {
		name: "w-col",
		props: {
			// 占父容器宽度的多少等分，总分为12份
			span: {
				type: [Number, String],
				default: 12
			},
			// 指定栅格左侧的间隔数(总12栏)
			offset: {
				type: [Number, String],
				default: 0
			},
			// 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
			justify: {
				type: String,
				default: 'start'
			},
			// 垂直对齐方式，可选值为top、center、bottom
			align: {
				type: String,
				default: 'center'
			},
			// 文字对齐方式
			textAlign: {
				type: String,
				default: 'left'
			}
		},
		inject: ['gutter'],
		computed: {
			uJustify() {
				if (this.justify == 'end' || this.justify == 'start') return 'flex-' + this.justify;
				else if (this.justify == 'around' || this.justify == 'between') return 'space-' + this.justify;
				else return this.justify;
			},
			uAlignItem() {
				if (this.align == 'top') return 'flex-start';
				if (this.align == 'bottom') return 'flex-end';
				else return this.align;
			}
		},
		methods: {
			click() {
				this.$emit('click');
			}
		}
	}
</script>

<style lang="scss">
	@import "../../libs/css/style.components.scss";
	.w-col {
		/* #ifdef MP-WEIXIN */
		float: left;
		/* #endif */
	}

	.w-col-0 {
		width: 0;
	}

	.w-col-1 {
		width: calc(100%/12);
	}

	.w-col-2 {
		width: calc(100%/12 * 2);
	}

	.w-col-3 {
		width: calc(100%/12 * 3);
	}

	.w-col-4 {
		width: calc(100%/12 * 4);
	}

	.w-col-5 {
		width: calc(100%/12 * 5);
	}

	.w-col-6 {
		width: calc(100%/12 * 6);
	}

	.w-col-7 {
		width: calc(100%/12 * 7);
	}

	.w-col-8 {
		width: calc(100%/12 * 8);
	}

	.w-col-9 {
		width: calc(100%/12 * 9);
	}

	.w-col-10 {
		width: calc(100%/12 * 10);
	}

	.w-col-11 {
		width: calc(100%/12 * 11);
	}

	.w-col-12 {
		width: calc(100%/12 * 12);
	}
</style>
