<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-empty :mode="mode">
					<w-button v-if="slot" slot="bottom" size="medium">
						slot按钮
					</w-button>
				</w-empty>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式选择</view>
				<w-table>
					<w-tr>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('car')">购物车为空</w-button>
						</w-td>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('page')">页面不存在</w-button>
						</w-td>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('search')">没有搜索结果</w-button>
						</w-td>
					</w-tr>
					<w-tr>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('address')">没有收货地址</w-button>
						</w-td>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('wifi')">没有WiFi</w-button>
						</w-td>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('order')">订单为空</w-button>
						</w-td>
					</w-tr>
					<w-tr>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('coupon')">没有优惠券</w-button>
						</w-td>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('favor')">没有收藏</w-button>
						</w-td>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('permission')">无权限</w-button>
						</w-td>
					</w-tr>
					<w-tr>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('history')">无历史记录</w-button>
						</w-td>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('news')">无新闻列表</w-button>
						</w-td>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('message')">消息列表为空</w-button>
						</w-td>
					</w-tr>
					<w-tr>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('list')">列表为空</w-button>
						</w-td>
						<w-td>
							<w-button :hair-line="false" size="mini" @click="modeChange('data')">数据为空</w-button>
						</w-td>
						<w-td>
							待扩展
						</w-td>
					</w-tr>
				</w-table>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">传入slot</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="slotChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: 'data',
				slot: false
			}
		},
		methods: {
			modeChange(mode = 'data') {
				this.mode = mode;
			},
			slotChange(index) {
				this.slot = !index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo-area {
		height: 160px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.w-demo-area .w-empty {
		padding-top: 0;
	}
</style>
