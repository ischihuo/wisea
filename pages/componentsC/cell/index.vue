<template>
	<view class="w-demo">
		<view class="w-demo-wrap" style="padding-left:0;padding-right:0;margin-left: -40rpx;margin-right: -40rpx;">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-cell-group title="读万卷书">
					<w-cell-item center :is-link="true" :label="label" value="铁马冰河入梦来" i
						ndex="index" @click="click" :hover-class="hoverClass" 
						:arrow="arrow" :title="title"
						:icon="icon"
					>
						<w-badge :absolute="false" v-if="rightSlot == 'badge'" count="105" slot="right-icon"></w-badge>
						<w-switch v-if="rightSlot == 'switch'" slot="right-icon" v-model="checked"></w-switch>
					</w-cell-item>
					<w-cell-item :border-bottom="false" value="" title="铁马冰河入梦来" value="行万里路" :arrow="false">
						<w-icon slot="icon" size="34" name="calendar" style="margin-right: 5px;"></w-icon>
						<w-icon slot="right-icon" size="34" name="calendar"></w-icon>
						<w-field slot="value"></w-field>
					</w-cell-item>
				</w-cell-group>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">更换图标</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="iconChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义右侧内容</view>
				<w-subsection vibrateShort :list="['文字', 'Switch组件', 'Badge组件']" @change="rightSlotChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">描述信息</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="lableChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">更换标题</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="titleChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">右侧箭头</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="arrowChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			icon: 'setting',
			arrow: true,
			label: '',
			title: '青山一道同云雨',
			rightSlot: true,
			checked: false,
		}
	},
	computed: {
		hoverClass() {
			// 如果右侧是switch步进器组件的话，去掉cell的点击反馈，因为这个时候点击的反馈应该在switch上
			return this.rightSlot == 'switch' ? 'none' : 'w-cell-hover';
		}
	},
	methods: {
		iconChange(index) {
			this.icon = index == 0 ? 'setting' : 'file-text'
		},
		arrowChange(index) {
			this.arrow = index == 0 ? true : false
		},
		lableChange(index) {
			this.label = index == 0 ? '岂曰无衣，与子同裳' : ''
		},
		titleChange(index) {
			this.title = index == 0 ? '青山一道同云雨' : '明月何曾是两乡'
		},
		rightSlotChange(index) {
			this.rightSlot = index == 0 ? 'text' : index == 1 ? 'switch' : 'badge'
			if(index == 0) this.arrow = true;
			else this.arrow = false;
		},
		click(index) {
			// console.log(index);
		}
	}
};
</script>

<style lang="scss" scoped>
	
.gab {
	background-color: rgb(245, 245, 245);
	height: 20rpx;
}

.wrap {
	height: 100vh;
	background-color: rgb(241, 241, 241);
}

.box {
	padding: 30rpx 00rpx;
	font-size: 28rpx;
	color: $w-type-info;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
