<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-toast ref="uToast"></w-toast>
				<w-swiper @change="change" :height="250" :list="list" :title="title" :effect3d="effect3d" 
				:indicator-pos="indicatorPos" :mode="mode" :interval="3000" @click="click"></w-swiper>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">指示器模式</view>
				<w-subsection vibrateShort :list="['round', 'rect', 'number', 'none']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">标题</view>
				<w-subsection vibrateShort current="1" :list="['显示', '隐藏']" @change="titleChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">指示器位置</view>
				<w-subsection vibrateShort current="3" :list="['上左', '上右', '下左', '下中', '下右']" @change="indicatorPosChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">3D效果</view>
				<w-subsection vibrateShort current="1" :list="['开启', '关闭']" @change="effect3dChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				title: false,
				mode: 'round',
				indicatorPos: 'bottomCenter',
				effect3d: false,
				
			}
		},
		methods: {
			titleChange(index) {
				this.title = index == 0 ? true : false;
			},
			modeChange(index) {
				this.mode = index == 0 ? 'round' : index == 1 ? 'rect' : index == 2 ? 'number' : 'none';
			},
			indicatorPosChange(index) {
				this.indicatorPos = index == 0 ? 'topLeft' : index == 1 ? 'topRight' : index == 2 ? 'bottomLeft' : index == 3 ? 'bottomCenter'  : 'bottomRight';
			},
			effect3dChange(index) {
				this.effect3d = index == 0 ? true : false;
			},
			click(index) {
				this.$refs.uToast.show({
					title: `点击了第${index + 1}张图片`,
					type: 'success'
				})
			},
			change(index) {
				// console.log(index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item {
		margin: 30rpx 0;
	}
</style>
