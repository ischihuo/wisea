<template>
	<view class="wrap">
		<w-time-line>
			<w-time-line-item nodeTop="2">
				<template v-slot:node>
					<view class="w-node" style="background: #19be6b;">
						<w-icon name="pushpin-fill" color="#fff" :size="24"></w-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="w-order-title">待取件</view>
						<view class="w-order-desc">[自提柜]您的快件已放在楼下侧门，直走前方53.6米，左拐约10步，再右拐直走，见一红灯笼停下，叩门三下，喊“芝麻开门”即可。</view>
						<view class="w-order-time">2019-05-08 12:12</view>
					</view>
				</template>
			</w-time-line-item>
			<w-time-line-item nodeTop="2">
				<template v-slot:node>
					<view class="w-node">
						<w-icon name="account-fill" color="#fff" :size="24"></w-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="w-order-title unacive">派送中</view>
						<view class="w-order-desc">【深圳市】快件已到达目的地，派件员为国产锦衣卫007号，电话：<text class="tel">13833882438</text>，请留意快递信息</view>
						<view class="w-order-time">2019-05-08 06:03</view>
					</view>
				</template>
			</w-time-line-item>
			<w-time-line-item nodeTop="2">
				<template v-slot:node>
					<view class="w-node">
						<w-icon name="car-fill" color="#fff" :size="24"></w-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="w-order-title unacive">运输中</view>
						<view class="w-order-desc">【深圳市】快递已到达 深圳固戍一部</view>
						<view class="w-order-time">2019-05-07 08:05</view>
					</view>
				</template>
			</w-time-line-item>
			<w-time-line-item>
				<template v-slot:content>
					<view>
						<view class="w-order-desc">【深圳市】快件已从深圳运转中心发出，正在发往深圳宝安一部</view>
						<view class="w-order-time">2019-12-06 22:30</view>
					</view>
				</template>
			</w-time-line-item>
			<w-time-line-item>
				<template v-slot:content>
					<view>
						<view class="w-order-desc">【深圳市】快件已到达 深圳运转中心</view>
						<view class="w-order-time">2019-12-04 16:42</view>
					</view>
				</template>
			</w-time-line-item>
			<w-time-line-item>
				<template v-slot:content>
					<view>
						<view class="w-order-desc">【郑州市】快件已从郑州运转中心出发，正在发往深圳运转中心</view>
						<view class="w-order-time">2019-12-02 12:55</view>
					</view>
				</template>
			</w-time-line-item>
			<w-time-line-item>
				<template v-slot:content>
					<view>
						<view class="w-order-desc">【郑州市】快件已到达 郑州运转中心</view>
						<view class="w-order-time">2019-12-02 08:23</view>
					</view>
				</template>
			</w-time-line-item>
			<w-time-line-item nodeTop="0">
				<template v-slot:node>
					<view class="w-node">
						<w-icon name="file-text-fill" color="#fff" :size="24"></w-icon>
					</view>
				</template>
				<template v-slot:content>
					<view>
						<view class="w-order-desc">您购买的商品【尚方宝剑，先斩后奏】，经由北京军区仓库发货，国内快递承运人【中南海保镖】。</view>
						<view class="w-order-time">2019-12-01 07:00</view>
					</view>
				</template>
			</w-time-line-item>
		</w-time-line>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx 24rpx 24rpx 40rpx;
	}
	
	.w-node {
		width: 44rpx;
		height: 44rpx;
		border-radius: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #d0d0d0;
	}
	
	.w-order-title {
		color: #333333;
		font-weight: bold;
		font-size: 32rpx;
	}
	
	.w-order-title.unacive {
		color: rgb(150, 150, 150);
	}
	
	.w-order-desc {
		color: rgb(150, 150, 150);
		font-size: 28rpx;
		margin-bottom: 6rpx;
	}
	
	.w-order-time {
		color: rgb(200, 200, 200);
		font-size: 26rpx;
	}
	
	.tel {
		color: $w-type-primary;
	}
</style>
