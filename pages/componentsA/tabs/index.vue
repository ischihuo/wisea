<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-tabs v-if="control" bg-color="#fafafa" :bold="bold" :active-color="activeColor" :list="list" 
				@change="change" :current="current" :is-scroll="isScroll"></w-tabs>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式选择</view>
				<w-subsection vibrateShort :current="sectionCurrent" :list="['滚动', '非滚动']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">标签个数(非滚动模式)</view>
				<w-subsection vibrateShort :list="['2', '3',  '4']" @change="countChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">活动选项字颜色</view>
				<w-subsection vibrateShort mode="button" :list="['primary', 'success', 'error', 'warning']" @change="colorChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">字体加粗</view>
				<w-subsection vibrateShort mode="button" :list="['是', '否']" @change="boldChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				data: [{
					name: '关注'
				}, {
					name:  '推荐'
				}, {
					name: '电影'
				},{
					name: '电视剧'
				},{
					name: '小视频'
				}, {
					name:  '游戏'
				}, {
					name: '校园'
				},{
					name: '影视'
				},{
					name: '音乐'
				}],
				current: 0,
				sectionCurrent: 0,
				isScroll: true,
				tabCountIndex: 0,
				activeColor: this.$w.color['primary'],
				bold: true,
				control: true
			}
		},
		onLoad() {
			this.list = this.data;
		},
		methods: {
			countChange(index) {
				this.sectionCurrent = 1;
				if(index == 0) {
					this.list = [];
					this.list.push(this.data[0]);
					this.list.push(this.data[1]);
				} else if(index == 1) {
					this.list = [];
					this.list.push(this.data[0]);
					this.list.push(this.data[1]);
					this.list.push(this.data[2]);
				} else {
					this.list = [];
					this.list.push(this.data[0]);
					this.list.push(this.data[1]);
					this.list.push(this.data[2]);
					this.list.push(this.data[3]);
				}
				this.tabCountIndex = index;
				this.isScroll = false;
			},
			change(index) {
				this.current = index;
			},
			modeChange(index) {
				this.control = false;
				this.current = 0;
				if(index == 0) {
					this.isScroll = true;
					this.list = this.data;
				} else {
					this.isScroll = false;
					this.countChange(this.tabCountIndex);
				}
				this.$nextTick(() => {
					this.control = true;
				})
			},
			colorChange(e) {
				let color = 'primary';
				switch(e) {
					case 0:
						color = 'primary';break;
					case 1:
						color = 'success';break;
					case 2:
						color = 'error';break;
					case 3:
						color = 'warning';break;
				}
				this.activeColor = this.$w.color[color];
			},
			boldChange(e) {
				switch(e) {
					case 0:
						this.bold = true;break;
					case 1:
						this.bold = false;break;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-config-wrap {
		
	}
</style>
