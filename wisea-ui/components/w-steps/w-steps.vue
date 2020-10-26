<template>
	<view class="">
		<view
			class="w-steps"
			:style="{
				flexDirection: direction
			}"
		>
			<view class="w-steps__item" 
				:class="['w-steps__item--' + direction]" 
				v-for="(item, index) in list" :key="index"
			>
				<view
					class="w-steps__item__num"
					v-if="mode == 'number'"
					:style="{
						backgroundColor: current < index ? 'transparent' : activeColor,
						borderColor: current < index ? unActiveColor : activeColor
					}"
				>
					<text v-if="current < index" :style="{
						color: current < index ? unActiveColor : activeColor,
					}">
						{{ index + 1 }}
					</text>
					<w-icon v-else size="22" color="#ffffff" :name="icon"></w-icon>
				</view>
				<view class="w-steps__item__dot" v-if="mode == 'dot'" :style="{ 
					backgroundColor: index <= current ? activeColor : unActiveColor 
				}"></view>
				<text :style="{ 
					color: index <= current ? activeColor : unActiveColor,
				}" :class="['w-steps__item__text--' + direction]">
					{{ item.name }}
				</text>
				<view class="w-steps__item__line" :class="['w-steps__item__line--' + mode]" v-if="index < list.length - 1">
					<w-line :direction="direction" length="100%" :hair-line="false" :color="unActiveColor"></w-line>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
/**
 * steps 步骤条
 * @description 该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。
 * @tutorial https://www.uviewui.com/components/steps.html
 * @property {String} mode 设置模式（默认dot）
 * @property {Array} list 数轴条数据，数组。具体见上方示例
 * @property {String} type type主题（默认primary）
 * @property {String} direction row-横向，column-竖向（默认row）
 * @property {Number String} current 设置当前处于第几步
 * @property {String} active-color 已完成步骤的激活颜色，如设置，type值会失效
 * @property {String} un-active-color 未激活的颜色，用于表示未完成步骤的颜色（默认#606266）
 * @example <w-steps :list="numList" active-color="#fa3534"></w-steps>
 */
export default {
	name: 'w-steps',
	props: {
		// 步骤条的类型，dot|number
		mode: {
			type: String,
			default: 'dot'
		},
		// 步骤条的数据
		list: {
			type: Array,
			default() {
				return [];
			}
		},
		// 主题类型, primary|success|info|warning|error
		type: {
			type: String,
			default: 'primary'
		},
		// 当前哪一步是激活的
		current: {
			type: [Number, String],
			default: 0
		},
		// 激活步骤的颜色
		activeColor: {
			type: String,
			default: '#2979ff'
		},
		// 未激活的颜色
		unActiveColor: {
			type: String,
			default: '#909399'
		},
		// 自定义图标
		icon: {
			type: String,
			default: 'checkmark'
		},
		// step的排列方向，row-横向，column-竖向
		direction: {
			type: String,
			default: 'row'
		}
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import '../../libs/css/style.components.scss';

$w-steps-item-number-width: 44rpx;
$w-steps-item-dot-width: 20rpx;

.w-steps {
	display: flex;
	
	.w-steps__item {
		flex: 1;
		text-align: center;
		position: relative;
		min-width: 100rpx;
		font-size: 26rpx;
		color: #8799a3;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		
		&--row {
			display: flex;
			flex-direction: column;
			
			.w-steps__item__line {
				position: absolute;
				z-index: 0;
				left: 75%;
				width: 50%;
				
				&--dot {
					top: calc(#{$w-steps-item-dot-width} / 2);
				}
				
				&--number {
					top: calc(#{$w-steps-item-number-width} / 2);
				}
			}
		}
		
		&--column {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			min-height: 120rpx;
			
			.w-steps__item__line {
				position: absolute;
				z-index: 0;
				height: 50%;
				top: 75%;
				
				&--dot {
					left: calc(#{$w-steps-item-dot-width} / 2);
				}
				
				&--number {
					left: calc(#{$w-steps-item-number-width} / 2);
				}
			}
		}
		
		&__num {
			display: flex;
			align-items: center;
			justify-content: center;
			width: $w-steps-item-number-width;
			height: $w-steps-item-number-width;
			border: 1px solid #8799a3;
			border-radius: 50%;
			overflow: hidden;
		}
		
		&__dot {
			width: $w-steps-item-dot-width;
			height: $w-steps-item-dot-width;
			display: flex;
			border-radius: 50%;
		}
		
		&__text--row {
			margin-top: 14rpx;
		}
		
		&__text--column {
			margin-left: 14rpx;
		}
	}
}
</style>
