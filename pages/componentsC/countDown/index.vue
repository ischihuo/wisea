<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-count-down class="count-down-demo"  :timestamp="timestamp" :separator="separator" :showBorder="showBorder"
				:separator-color="separatorColor" :showDays="showDays" :fontSize="fontSize" @change="change" ref="uCountDown"
				:border-color="borderColor" :color="color" @end="end" bg-color="rgb(250, 250, 250)"></w-count-down>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">调整时间</view>
				<w-subsection vibrateShort :list="['60', '86400', '983272']" @change="timestampChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">分隔符</view>
				<w-subsection vibrateShort :list="['英文冒号', '中文名称']" @change="separatorChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义样式</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="styleChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">显示天</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="showDaysChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">字体大小</view>
				<w-subsection vibrateShort current="1" :list="['26', '30', '34']" @change="fontSizeChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			timestamp: 60,
			separator: 'colon',
			showBorder: false,
			borderColor: '#303133',
			color: '#303133',
			showDays: false,
			fontSize: 30,
			separatorColor: '#303133',
		};
	},
	methods: {
		timestampChange(index) {
			this.timestamp = index == 0 ? 60 : index == 1 ? 86400 : 983272;
		},
		separatorChange(index) {
			this.separator = index == 0 ? 'colon' : 'zh';
		},
		styleChange(index) {
			if(index == 0) {
				this.showBorder = true;
				this.borderColor = this.$w.color['primary'];
				this.color = this.$w.color['primary'];
				this.separatorColor = this.$w.color['primary'];
			} else {
				this.showBorder = false;
				this.borderColor = '#303133';
				this.color = '#303133';
				this.separatorColor = '#303133';
			}
		},
		showDaysChange(index) {
			this.showDays = index == 0 ? true : false;
		},
		fontSizeChange(index) {
			this.fontSize = index == 0 ? 26 : index == 1 ? 30 : 34;
		},
		end() {
			this.$refs.uToast.show({
				title: '倒计时结束',
				type: 'warning'
			})
		},
		change(timestamp) {
			// console.log(timestamp);
		},
		getSeconds() {
			// console.log(this.$refs.uCountDown.seconds);
		}
	}
};
</script>

<style scoped lang="scss">
.count-down-demo {
	justify-content: center;
}
</style>
