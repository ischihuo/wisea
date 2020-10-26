<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					globalData方案的值为(曲折实现，全局动态响应)
				</view>
				<view class="w-demo-result-line">
					{{globalData}}
				</view>
			</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					Vue.prototype方案的值为(非动态响应，微信小程序无效)
				</view>
				<view class="w-demo-result-line">
					{{vuePrototype}}
				</view>
			</view>
			<view class="w-demo-area">
				<view class="w-no-demo-here">
					vuex方案的值为(全局动态响应，推荐)
				</view>
				<view class="w-demo-result-line">
					{{vuex_demo}}
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">实现方式</view>
				<view class="btn-wrap">
					<w-button @click="modeChange(0)">globalData</w-button>
				</view>
				<view class="btn-wrap">
					<w-button @click="modeChange(1)">Vue.prototype</w-button>
				</view>
				<view class="btn-wrap">
					<w-button @click="modeChange(2)">vuex</w-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalData: ''
			}
		},
		onShow() {
			// 对globalData的使用，应在onShow生命周期，而不是onLoad生命周期
			this.globalData = getApp().globalData.username;
		},
		methods: {
			modeChange(index) {
				let url = '';
				if(index == 0) url = '/pages/library/globalVariable/globalData'; 
				if(index == 1) url = '/pages/library/globalVariable/prototype';
				if(index == 2) url = '/pages/library/globalVariable/vuex';
				this.$w.route(url);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo-area {
		margin-top: 50rpx;
	}
	
	.btn-wrap {
		margin-top: 40rpx;
		padding: 0 10%;
	}
</style>
