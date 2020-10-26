<template>
	<view v-if="show" :class="[
		disabled ? 'w-disabled' : '',
		'w-size-' + size,
		'w-shape-' + shape,
		'w-mode-' + mode + '-' + type
	]"
	 class="w-tag" :style="[customStyle]" @tap="clickTag">
		{{text}}
		<view class="w-icon-wrap" @tap.stop>
			<w-icon @click="close" size="22" v-if="closeable" :color="closeIconColor" 
			name="close" class="w-close-icon" :style="[iconStyle]"></w-icon>
		</view>
	</view>
</template>

<script>
	/**
	 * tag 提示
	 * @description 该组件一般用于标记和选择
	 * @tutorial https://www.uviewui.com/components/tag.html
	 * @property {String} type 主题类型（默认primary）
	 * @property {String} size 标签大小（默认default）
	 * @property {String} shape 标签形状（默认square）
	 * @property {String} text 标签的文字内容
	 * @property {String} bg-color 自定义标签的背景颜色
	 * @property {String} border-color 标签的边框颜色
	 * @property {String} close-color 关闭按钮的颜色
	 * @property {String Number} index 点击标签时，会通过click事件返回该值
	 * @property {String} mode 模式选择，见官网说明（默认light）
	 * @property {Boolean} closeable 是否可关闭，设置为true，文字右边会出现一个关闭图标（默认false）
	 * @property {Boolean} show 标签显示与否（默认true）
	 * @event {Function} click 点击标签触发
	 * @event {Function} close closeable为true时，点击标签关闭按钮触发
	 * @example <w-tag text="雪月夜" type="success" />
	 */
	export default {
		name: 'w-tag',
		// 是否禁用这个标签，禁用的话，会屏蔽点击事件
		props: {
			// 标签类型info、primary、success、warning、error
			type: {
				type: String,
				default: 'primary'
			},
			disabled: {
				type: [Boolean, String],
				default: false
			},
			// 标签的大小，分为default（默认），mini（较小）
			size: {
				type: String,
				default: 'default'
			},
			// tag的形状，circle（两边半圆形）, square（方形，带圆角），circleLeft（左边是半圆），circleRight（右边是半圆）
			shape: {
				type: String,
				default: 'square'
			},
			// 标签文字
			text: {
				type: [String, Number],
				default: ''
			},
			// 背景颜色，默认为空字符串，即不处理
			bgColor: {
				type: String,
				default: ''
			},
			// 标签字体颜色，默认为空字符串，即不处理
			color: {
				type: String,
				default: ''
			},
			// 镂空形式标签的边框颜色
			borderColor: {
				type: String,
				default: ''
			},
			// 关闭按钮图标的颜色
			closeColor: {
				type: String,
				default: ''
			},
			// 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了
			index: {
				type: [Number, String],
				default: ''
			},
			// 模式选择，dark|light|plain
			mode: {
				type: String,
				default: 'light'
			},
			// 是否可关闭
			closeable: {
				type: Boolean,
				default: false
			},
			// 是否显示
			show: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			}
		},
		computed: {
			customStyle() {
				let style = {};
				// 文字颜色（如果有此值，会覆盖type值的颜色）
				if(this.color) style.color = this.color+"!important";
				// tag的背景颜色（如果有此值，会覆盖type值的颜色）
				if(this.bgColor) style.backgroundColor = this.bgColor+"!important";
				// 如果是镂空型tag，没有传递边框颜色（borderColor）的话，使用文字的颜色（color属性）
				if(this.mode == 'plain' && this.color && !this.borderColor) style.borderColor = this.color;
				else style.borderColor = this.borderColor;
				return style;
			},
			iconStyle() {
				if(!this.closeable) return ;
				let style = {};
				if(this.size == 'mini') style.fontSize = '20rpx';
				else style.fontSize = '22rpx';
				if(this.mode == 'plain' || this.mode == 'light') style.color = this.type;
				else if(this.mode == 'dark')  style.color = "#ffffff";
				if(this.closeColor) style.color = this.closeColor;
				return style;
			},
			// 关闭图标的颜色
			closeIconColor() {
				// 如果定义了关闭图标的颜色，就用此值，否则用字体颜色的值
				// 如果上面的二者都没有，如果是dark深色模式，图标就为白色
				// 最后如果上面的三者都不合适，就返回type值给图标获取颜色
				let color = '';
				if(this.closeColor) return this.closeColor;
				else if(this.color) return this.color;
				else if(this.mode == 'dark') return '#ffffff';
				else return this.type;
			}
		},
		methods: {
			// 标签被点击
			clickTag() {
				// 如果是disabled状态，不发送点击事件
				if(this.disabled) return ;
				this.$emit('click', this.index);
			},
			// 点击标签关闭按钮
			close() {
				this.$emit('close', this.index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.w-tag {
		box-sizing: border-box;
		align-items: center;
		border-radius: 6rpx;
		display: inline-block;
		line-height: 1;
	}
	
	.w-size-default {
		font-size: 22rpx;
		padding: 12rpx 22rpx;
	}
	
	.w-size-mini {
		font-size: 20rpx;
		padding: 6rpx 12rpx;
	}

	.w-mode-light-primary {
		background-color: $w-type-primary-light;
		color: $w-type-primary;
		border: 1px solid $w-type-primary-disabled;
	}
	
	.w-mode-light-success {
		background-color: $w-type-success-light;
		color: $w-type-success;
		border: 1px solid $w-type-success-disabled;
	}
	
	.w-mode-light-error {
		background-color: $w-type-error-light;
		color: $w-type-error;
		border: 1px solid $w-type-error-disabled;
	}
	
	.w-mode-light-warning {
		background-color: $w-type-warning-light;
		color: $w-type-warning;
		border: 1px solid $w-type-warning-disabled;
	}
	
	.w-mode-light-info {
		background-color: $w-type-info-light;
		color: $w-type-info;
		border: 1px solid $w-type-info-disabled;
	}
	
	.w-mode-dark-primary {
		background-color: $w-type-primary;
		color: #FFFFFF;
	}
	
	.w-mode-dark-success {
		background-color: $w-type-success;
		color: #FFFFFF;
	}
	
	.w-mode-dark-error {
		background-color: $w-type-error;
		color: #FFFFFF;
	}
	
	.w-mode-dark-warning {
		background-color: $w-type-warning;
		color: #FFFFFF;
	}
	
	.w-mode-dark-info {
		background-color: $w-type-info;
		color: #FFFFFF;
	}
	
	.w-mode-plain-primary {
		background-color: #FFFFFF;
		color: $w-type-primary;
		border: 1px solid $w-type-primary;
	}
	
	.w-mode-plain-success {
		background-color: #FFFFFF;
		color: $w-type-success;
		border: 1px solid $w-type-success;
	}
	
	.w-mode-plain-error {
		background-color: #FFFFFF;
		color: $w-type-error;
		border: 1px solid $w-type-error;
	}
	
	.w-mode-plain-warning {
		background-color: #FFFFFF;
		color: $w-type-warning;
		border: 1px solid $w-type-warning;
	}
	
	.w-mode-plain-info {
		background-color: #FFFFFF;
		color: $w-type-info;
		border: 1px solid $w-type-info;
	}
	
	.w-disabled {
		opacity: 0.55;
	}

	.w-shape-circle {
		border-radius: 100rpx;
	}
	
	.w-shape-circleRight {
		border-radius:  0 100rpx 100rpx 0;
	}

	.w-shape-circleLeft {
		border-radius: 100rpx 0 0 100rpx;
	}
	
	.w-close-icon {
		margin-left: 14rpx;
		font-size: 22rpx;
		color: $w-type-success;
	}
	
	.w-icon-wrap {
		display: inline-flex;
		transform: scale(0.86);
	}
</style>
