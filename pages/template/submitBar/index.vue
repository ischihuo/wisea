<template>
	<view class="navigation">
		<view class="left">
			<view class="item">
				<w-icon name="server-fill" :size="40" :color="$w.color['contentColor']"></w-icon>
				<view class="text w-line-1">客服</view>
			</view>
			<view class="item">
				<w-icon name="home" :size="40" :color="$w.color['contentColor']"></w-icon>
				<view class="text w-line-1">店铺</view>
			</view>
			<view class="item car">
				<w-badge class="car-num" :count="9" type="error" :offset="[-3, -6]"></w-badge>
				<w-icon name="shopping-cart" :size="40" :color="$w.color['contentColor']"></w-icon>
				<view class="text w-line-1">购物车</view>
			</view>
		</view>
		<view class="right">
			<view class="cart btn w-line-1">加入购物车</view>
			<view class="buy btn w-line-1">立即购买</view>
		</view>
	</view>
</template>

<script>
export default {
	
};
</script>

<style lang="scss" scoped>
.navigation {
	display: flex;
	margin-top: 100rpx;
	border: solid 2rpx #f2f2f2;
	background-color: #ffffff;
	padding: 16rpx 0;
	.left {
		display: flex;
		font-size: 20rpx;
		.item {
			margin: 0 30rpx;
			&.car {
				text-align: center;
				position: relative;
				.car-num {
					position: absolute;
					top: -10rpx;
					right: -10rpx;
				}
			}
		}
	}
	.right {
		display: flex;
		font-size: 28rpx;
		align-items: center;
		.btn {
			line-height: 66rpx;
			padding: 0 30rpx;
			border-radius: 36rpx;
			color: #ffffff;
		}
		.cart {
			background-color: #ed3f14;
			margin-right: 30rpx;
		}
		.buy {
			background-color: #ff7900;
		}
	}
}
</style>
