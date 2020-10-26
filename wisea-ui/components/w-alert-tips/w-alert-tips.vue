<template>
	<view class="w-alert-tips" v-if="show" :class="[
		!show ? 'w-close-alert-tips': '',
		type ? 'w-alert-tips--bg--' + type + '-light' : '',
		type ? 'w-alert-tips--border--' + type + '-disabled' : '',
	]" :style="{
		backgroundColor: bgColor,
		borderColor: borderColor
	}">
		<view class="w-icon-wrap">
			<w-icon v-if="showIcon" :name="$w.type2icon(type)" :size="description ? 40 : 32" class="w-icon" :color="type"></w-icon>
		</view>
		<view class="w-alert-content" @tap.stop="click">
			<view class="w-alert-title" :style="{fontWeight: description ? 500 : 'normal'}">
				{{title}}
			</view>
			<view v-if="description" class="w-alert-desc">
				{{description}}
			</view>
		</view>
		<view class="w-icon-wrap">
			<w-icon @click="close" v-if="closeAble && !closeText" hoverClass="w-type-error-hover-color" name="close" color="#c0c4cc"
			 :size="22" class="w-close-icon" :style="{
				top: description ? '18rpx' : '24rpx'
			}"></w-icon>
		</view>
		<text v-if="closeAble && closeText" class="w-close-text" :style="{
			top: description ? '18rpx' : '24rpx'
		}">{{closeText}}</text>
	</view>
</template>

<script>
	/**
	 * alertTips 警告提示
	 * @description 警告提示，展现需要关注的信息
	 * @tutorial https://uviewui.com/components/alertTips.html
	 * @property {String} title 显示的标题文字
	 * @property {String} description 辅助性文字，颜色比title浅一点，字号也小一点，可选
	 * @property {String} type 关闭按钮(默认为叉号icon图标)
	 * @property {String} close-able 用文字替代关闭图标，close-able为true时有效
	 * @property {Boolean} show-icon 是否显示左边的辅助图标
	 * @property {Boolean} show 显示或隐藏组件
	 * @event {Function} click 点击组件时触发
	 * @event {Function} close 点击关闭按钮时触发
	 */
	export default {
		name: 'w-alert-tips',
		props: {
			// 显示文字
			title: {
				type: String,
				default: ''
			},
			// 主题，success/warning/info/error
			type: {
				type: String,
				default: 'warning'
			},
			// 辅助性文字
			description: {
				type: String,
				default: ''
			},
			// 是否可关闭
			closeAble: {
				type: Boolean,
				default: false
			},
			// 关闭按钮自定义文本
			closeText: {
				type: String,
				default: ''
			},
			// 是否显示图标
			showIcon: {
				type: Boolean,
				default: false
			},
			// 文字颜色，如果定义了color值，icon会失效
			color: {
				type: String,
				default: ''
			},
			// 背景颜色
			bgColor: {
				type: String,
				default: ''
			},
			// 边框颜色
			borderColor: {
				type: String,
				default: ''
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
		methods: {
			// 点击内容
			click() {
				this.$emit('click');
			},
			// 点击关闭按钮
			close() {
				this.$emit('close');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.w-alert-tips {
		display: flex;
		align-items: center;
		padding: 16rpx 30rpx;
		border-radius: 8rpx;
		position: relative;
		transition: all 0.3s linear;
		border: 1px solid #fff;
		
		&--bg--primary-light {
			background-color: $w-type-primary-light;
		}
		
		&--bg--info-light {
			background-color: $w-type-info-light;
		}
		
		&--bg--success-light {
			background-color: $w-type-success-light;
		}
		
		&--bg--warning-light {
			background-color: $w-type-warning-light;
		}
		
		&--bg--error-light {
			background-color: $w-type-error-light;
		}
		
		&--border--primary-disabled {
			border-color: $w-type-primary-disabled;
		}
		
		&--border--success-disabled {
			border-color: $w-type-success-disabled;
		}
		
		&--border--error-disabled {
			border-color: $w-type-error-disabled;
		}
		
		&--border--warning-disabled {
			border-color: $w-type-warning-disabled;
		}
		
		&--border--info-disabled {
			border-color: $w-type-info-disabled;
		}
	}

	.w-close-alert-tips {
		opacity: 0;
		visibility: hidden;
	}

	@keyframes myfirst {
		from {
			height: 100%;
		}

		to {
			height: 0
		}
	}

	.w-icon {
		margin-right: 16rpx;
	}

	.w-alert-title {
		font-size: 28rpx;
		color: $w-main-color;
	}

	.w-alert-desc {
		font-size: 26rpx;
		text-align: left;
		color: $w-content-color;
	}

	.w-close-icon {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
	}

	.w-close-hover {
		color: red;
	}
	
	.w-close-text {
		font-size: 24rpx;
		color: $w-tips-color;
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		line-height: 1;
	}
</style>
