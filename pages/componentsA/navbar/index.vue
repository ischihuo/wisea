<template>
	<view class="">
		<w-navbar title-color="#fff" back-icon-color="#ffffff" :is-fixed="isFixed" :is-back="isBack" :background="background" :back-text-style="{color: '#fff'}" :title="title" :back-icon-name="backIconName" :back-text="backText">
			<view class="slot-wrap" v-if="useSlot">
				<view class="search-wrap" v-if="search">
					<!-- 如果使用w-search组件，必须要给v-model绑定一个变量 -->
					<w-search v-model="keyword" :show-action="showAction" height="56" :action-style="{color: '#fff'}"></w-search>
				</view>
				<view class="navbar-right" v-if="rightSlot">
					<view class="message-box right-item">
						<w-icon name="chat" size="38"></w-icon>
						<w-badge count="18" size="mini" :offset="[-15, -15]"></w-badge>
					</view>
					<view class="dot-box right-item">
						<w-icon name="calendar-fill" size="38"></w-icon>
						<w-badge size="mini" :is-dot="true" :offset="[-6, -6]"></w-badge>
					</view>
				</view>
				<view class="map-wrap" v-if="custom">
					<w-icon name="map" color="#ffffff" size="24"></w-icon>
					<text class="map-wrap-text">轻舟已过万重山</text>
					<w-icon name="arrow-down-fill" color="#ffffff" size="22"></w-icon>
				</view>
			</view>
			<view class="navbar-right" slot="right" v-if="slotRight">
				<view class="message-box right-item">
					<w-icon name="chat" size="38"></w-icon>
					<w-badge count="18" size="mini" :offset="[-15, -15]"></w-badge>
				</view>
				<view class="dot-box right-item">
					<w-icon name="calendar-fill" size="38"></w-icon>
					<w-badge size="mini" :is-dot="true" :offset="[-6, -6]"></w-badge>
				</view>
			</view>
		</w-navbar>
		<view class="w-demo">
			<view class="w-demo-wrap">
				<view class="w-demo-title">演示效果</view>
				<view class="w-demo-area">
					<w-toast ref="uToast"></w-toast>
					<view class="w-no-demo-here">查看顶部导航栏效果</view>
				</view> 
			</view>
			<view class="w-config-wrap">
				<view class="w-config-title w-border-bottom">
					参数配置
				</view>
				<view class="w-config-item">
					<view class="w-item-title">标题长度</view>
					<w-subsection vibrateShort :list="['短', '中', '长']" @change="titleChange"></w-subsection>
				</view>
				<view class="w-config-item">
					<view class="w-item-title">隐藏左侧返回区域</view>
					<w-subsection current="1" vibrateShort :list="['是', '否']" @change="backChange"></w-subsection>
				</view>
				<view class="w-config-item">
					<view class="w-item-title">自定义左侧内容</view>
					<w-subsection current="1" vibrateShort :list="['是', '否']" @change="leftChange"></w-subsection>
				</view>
				<view class="w-config-item">
					<view class="w-item-title">自定义右侧内容</view>
					<w-subsection :current="slotRightCurrent" vibrateShort :list="['是', '否']" @change="rightChange"></w-subsection>
				</view>
				<view class="w-config-item">
					<view class="w-item-title">传入整体slot</view>
					<w-subsection vibrateShort :list="['无', '搜索框', '搜索+按钮', '搜索+图标']" @change="searchChange"></w-subsection>
				</view>
				<view class="w-config-item">
					<view class="w-item-title">完全自定义传入内容</view>
					<w-subsection current="1" vibrateShort :list="['是', '否']" @change="customChange"></w-subsection>
				</view>
				<view class="w-config-item">
					<view class="w-item-title">背景色</view>
					<w-subsection vibrateShort :list="['渐变', '#39CCCC', '#B471CC', '#001f3f']" @change="bgColorChange"></w-subsection>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '新闻',
				backText: '返回',
				backIconName: 'nav-back',
				right: false,
				showAction: false,
				rightSlot: false,
				useSlot: false,
				background: {
					'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				isBack: true,
				search: false,
				custom: false,
				isFixed: true,
				keyword: '',
				// #ifdef MP
				slotRight: false,
				// #endif
				// #ifndef MP
				slotRight: true
				// #endif
			}
		},
		computed: {
			slotRightCurrent() {
				return this.slotRight ? 0 : 1;
			}
		},
		methods: {
			titleChange(index) {
				this.useSlot = false;
				this.title = index == 0 ? '新闻' : index == 1 ? '新闻列表' : '雨打梨花深闭门，忘了青春，误了青春';
			},
			leftChange(index) {
				if(index == 0) {
					this.backText = '';
					this.backIconName = 'arrow-leftward';
				} else {
					this.backText = '返回';
					this.backIconName = 'arrow-left';
				}
			},
			searchChange(index) {
				this.title = null;
				this.useSlot = true;
				this.search = false;
				this.custom = false;
				if(index == 0) {
					this.title = '新闻';
					this.useSlot = false;
					this.rightSlot = false;
				} else if(index == 1) {
					this.showAction = false;
					this.useSlot = true;
					this.rightSlot = false;
					this.search = true;
					this.slotRight = false;
				} else if(index == 2) {
					this.useSlot = true;
					this.showAction = true;
					this.rightSlot = false;
					this.search = true;
					this.slotRight = false;
				} else {
					this.useSlot = true;
					this.search = true;
					this.showAction = false;
					this.rightSlot = true;
					this.slotRight = false;
				}
			},
			backChange(index) {
				this.isBack = !!index;
			},
			bgColorChange(index) {
				this.background = {};
				if(index == 0) {
					this.background = {
						'background-image': 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
					}
				} else {
					let color = index == 1 ? '#39CCCC' : index == 2 ? '#B471CC' : '#001f3f';
					this.background = {
						background: color
					}
				}
				
			},
			rightChange(index) {
				if(index == 0) {
					this.slotRight = true;
					this.useSlot = false;
				} else {
					this.slotRight = false;
				}
			},
			customChange(index) {
				this.search = false;
				this.rightSlot = false;
				if(index == 0) {
					this.custom = true;
					this.title = null;
					this.isBack = false;
					this.useSlot = true;
				} else {
					this.useSlot = false;
					this.title = '新闻';
					this.isBack = true;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {
		//height: 200vh;
		height: calc(100% - 44px);
		height: calc(100% - 44px - constant(safe-area-inset-top));
		height: calc(100% - 44px - env(safe-area-inset-top));
	}
	
	.wrap {
		padding: 24rpx;
	}
	
	.navbar-right {
		margin-right: 24rpx;
		display: flex;
	}
	
	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
	
	.right-item {
		margin: 0 12rpx;
		position: relative;
		color: #ffffff;
		display: flex;
	}
	
	.message-box {
		
	}
	
	.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
	}
	
	.map-wrap {
		display: flex;
		align-items: center;
		padding: 4px 6px;
		background-color: rgba(240,240, 240, 0.35);
		color: #fff;
		font-size: 22rpx;
		border-radius: 100rpx;
		margin-left: 30rpx;
	}
	
	.map-wrap-text {
		padding: 0 6rpx;
	}
</style>

