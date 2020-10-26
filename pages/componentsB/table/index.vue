<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-table :align="align" :borderColor="borderColor">
					<w-tr>
						<w-th>姓名</w-th>
						<w-th>年龄</w-th>
						<w-th>籍贯</w-th>
						<w-th>性别</w-th>
					</w-tr>
					<w-tr>
						<w-td>吕布</w-td>
						<w-td>22</w-td>
						<w-td>楚河</w-td>
						<w-td>男</w-td>
					</w-tr>
					<w-tr>
						<w-td>项羽</w-td>
						<w-td>28</w-td>
						<w-td>汉界</w-td>
						<w-td>男</w-td>
					</w-tr>
					<w-tr>
						<w-td>木兰</w-td>
						<w-td>24</w-td>
						<w-td>南国</w-td>
						<w-td>女</w-td>
					</w-tr>
				</w-table>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">边框颜色</view>   
				<w-subsection vibrateShort :list="['gray', 'primary', 'warning']" @change="borderColorChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">对齐方式</view>
				<w-subsection vibrateShort current="1" :list="['左', '中', '右']" @change="alignChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: false,
				borderColor: '#e4e7ed',
				align: 'center',
				index: 0,
			}
		},
		methods: {
			modeChange(index) {
				// #ifdef MP-WEIXIN
				return this.$w.toast('微信小程序暂不支持单元格合并')
				// #endif
				this.mode = index == 0 ? true : false;
				this.key ++;
			},
			borderColorChange(index) {
				this.borderColor = index == 0 ? '#e4e7ed' : index == 1 ? '#2979ff' : '#ff9900';
			},
			alignChange(index) {
				this.align = index == 0 ? 'left' : index == 1 ? 'center' : 'right';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
</style>
