<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-grid :col="col" @click="click" v-if="!isSwiper" :border="border">
					<w-grid-item name="item1" :index="0" @click="itemClick">
						<w-badge count="9" :offset="[col == 3 ? 20 : 14, col == 3 ? 30 : 20]"></w-badge>
						<w-icon name="photo" :size="46"></w-icon>
						<view class="grid-text">图片</view>
					</w-grid-item>
					<w-grid-item :index="1">
						<w-icon name="lock" :size="46"></w-icon>
						<view class="grid-text">锁头</view>
					</w-grid-item>
					<w-grid-item :index="2">
						<image src="https://cdn.uviewui.com/uview/grid/hot5.png" :style="{
							top: col == 3 ? '14rpx' : '8rpx',
							right: col == 3 ? '40rpx' : '28rpx'
						}" style="width: 34rpx;height: 34rpx;" class="badge-icon" mode="widthFix"></image>
						<w-icon name="hourglass" :size="46"></w-icon>
						<view class="grid-text">沙漏</view>
					</w-grid-item>
					<w-grid-item :index="3">
						<w-icon name="home" :size="46"></w-icon>
						<view class="grid-text">首页</view>
					</w-grid-item>
					<w-grid-item :index="4">
						<w-icon name="star" :size="46"></w-icon>
						<view class="grid-text">星星</view>
					</w-grid-item>
					<w-grid-item :index="5">
						<w-icon name="volume-up" :size="46"></w-icon>
						<view class="grid-text">音量</view>
					</w-grid-item>
					<w-grid-item :index="6">
						<image src="https://cdn.uviewui.com/uview/grid/hot6.png" style="width: 44rpx;height: 44rpx;top:0;right:0;" class="badge-icon"></image>
						<w-icon name="trash" :size="46"></w-icon>
						<view class="grid-text">回收站</view>
					</w-grid-item>
					<w-grid-item :index="7">
						<w-icon name="rewind-right" :size="46"></w-icon>
						<view class="grid-text">快进</view>
					</w-grid-item>
					<w-grid-item :index="8">
						<w-icon name="shopping-cart" :size="46"></w-icon>
						<view class="grid-text">购物车</view>
					</w-grid-item>
				</w-grid>
				<swiper class="swiper" v-else @change="change">
					<swiper-item>
						<w-grid :border="border" :col="col" @click="click" hover-class="hover-class">
							<w-grid-item v-for="(item, index) in list" :index="index" :key="index">
								<w-icon :name="item" :size="46"></w-icon>
								<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
							</w-grid-item>
						</w-grid>
					</swiper-item>
					<swiper-item>
						<w-grid :border="border" :col="col" @click="click">
							<w-grid-item v-for="(item, index) in list" :index="index + 9" :key="index">
								<w-icon :name="item" :size="46"></w-icon>
								<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
							</w-grid-item>
						</w-grid>
					</swiper-item>
					<swiper-item>
						<w-grid :border="border" :col="col" @click="click">
							<w-grid-item v-for="(item, index) in list" :index="index + 18" :key="index">
								<w-icon :name="item" :size="46"></w-icon>
								<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
							</w-grid-item>
						</w-grid>
					</swiper-item>
				</swiper>
				<view class="indicator-dots" v-if="isSwiper">
					<view class="indicator-dots-item" :class="[current == 0 ? 'indicator-dots-active' : '']">
					</view>
					<view class="indicator-dots-item" :class="[current == 1 ? 'indicator-dots-active' : '']">
					</view>
					<view class="indicator-dots-item" :class="[current == 2 ? 'indicator-dots-active' : '']">
					</view>
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">是否显示边框</view>
				<w-subsection vibrateShort :list="['是', '否']" @change="borderChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">是否可滑动</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="isSwiperChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">修改列数</view>
				<w-subsection vibrateShort :list="['3', '4']" @change="colChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['integral', 'kefw-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email', 'list'],
				isSwiper: false,
				current: 0,
				border: true,
				col: 3
			};
		},
		methods: {
			isSwiperChange(index) {
				this.isSwiper = index == 0 ? true : false;
			},
			borderChange(index) {
				this.border = index == 0 ? true : false;
			},
			colChange(index) {
				this.col = index == 0 ? 3 : 4;
			},
			click(index) {
				this.$refs.uToast.show({
					title: `点击了第${index + 1}宫格`,
					type: 'warning'
				})
			},
			change(e) {
				this.current = e.detail.current;
			},
			// 针对单个grid-item的事件
			itemClick(index) {
				// console.log(index);
			}
		}
	};
</script>

<style scoped lang="scss">
.grid-text {
	font-size: 28rpx;
	margin-top: 4rpx;
	color: $w-type-info;
}

.badge-icon {
	position: absolute;
	width: 40rpx;
	height: 40rpx;
}

.swiper {
	height: 480rpx;
}

.indicator-dots {
	margin-top: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}

.indicator-dots-item {
	background-color: $w-tips-color;
	height: 6px;
	width: 6px;
	border-radius: 10px;
	margin: 0 3px;
}

.indicator-dots-active {
	background-color: $w-type-primary;
}
</style>
