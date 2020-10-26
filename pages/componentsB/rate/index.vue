<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-rate v-model="value" :count="count" @change="change"
				:active-color="activeColor" :inaction-color="inactiveColor"
				:active-icon="activeIcon" :inactive-icon="inactiveIcon"
				:disabled="disabled"></w-rate>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">初始值</view>
				<w-subsection vibrateShort :list="[1, 2, 3, 4]" @change="currentChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">镂空状态</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="plainChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义样式</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="styleChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义图标</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="iconChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">是否禁用</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="disabledChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">星星数量</view>
				<w-subsection vibrateShort current="1" :list="[4, 5, 6]" @change="countChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 1.4.5后推荐使用v-model双向绑定，弃用current
				// current: 1,
				activeColor: '#FA3534',
				inactiveColor: '#b2b2b2',
				disabled: false,
				count: 5,
				customIcon: false,
				plain: false,
				value: 0
			}
		},
		watch: {
			value(n) {
				// console.log(n);
			}
		},
		computed: {
			activeIcon() {
				let icon = this.customIcon ? 'heart' : 'star';
				return this.plain ? icon : icon + '-fill'
			},
			inactiveIcon() {
				let icon = this.customIcon ? 'heart' : 'star';
				return this.plain ? icon : icon + '-fill'
			}
		},
		methods: {
			currentChange(index) {
				this.current = index == 0 ? 1 : index == 1 ? 2 : index == 2 ? 3 : 4;
			},
			plainChange(index) {
				this.plain = !index;
			},
			disabledChange(index) {
				this.disabled = index == 0 ? true : false;
			},
			countChange(index) {
				this.count = index == 0 ? 4 : index == 1 ? 5 : 6;
			},
			styleChange(index) {
				if(index == 0) {
					this.activeColor = this.$w.color['primary'];
					this.inactiveColor = this.$w.color['info'];
				} else {
					this.activeColor = '#FA3534';
					this.inactiveColor = '#b2b2b2';
				}
			},
			iconChange(index) {
				this.customIcon = !index;
			},
			change(val) {
				// console.log(val);
			}
		}
	}
</script>

<style scoped lang="scss">
	.w-demo {}
</style>
