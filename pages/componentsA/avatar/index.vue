<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-avatar 
					:mode="mode" 
					:size="size" 
					:src="src" 
					:text="text"
					:showLevel="showLevel"
					:showSex="showSex"
					:sexIcon="sexIcon"
					:bgColor='bgColor'
				></w-avatar>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式选择</view>
				<w-subsection vibrateShort :list="['圆形', '圆角方形']" @change="modeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">性别选择</view>
				<w-subsection vibrateShort :list="['男', '女', '不显示']" @change="sexChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">等级</view>
				<w-subsection vibrateShort :list="['显示', '不显示']" @change="levelChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">自定义内容</view>
				<w-subsection vibrateShort current="0" :list="['图片', '文字']" @change="styleChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">尺寸</view>
				<w-subsection vibrateShort current="1" :list="['large', 'default', 'mini', 160]" @change="sizeChange"></w-subsection>
			</view> 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mode: 'circle',
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				text: '', // 优先级比src高
				size: '90',
				showLevel: true,
				showSex: true,
				sexIcon: 'man',
				bgColor: '#fcbd71'
			}
		},
		methods: {
			modeChange(index) {
				this.mode = index == 0 ? 'circle' : 'square';
			},
			styleChange(index) {
				if(index == 0) {
					this.text = '';
					this.src = 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg';
				} else {
					this.text = '无头像';
				}
			},
			sizeChange(index) {
				this.size = index == 0 ? 'large' : index == 1 ? 'default' : index == 2 ? 'mini' : 160;
			},
			sexChange(index) {
				this.showSex = true;
				if(index == 0) this.sexIcon = 'man';
				if(index == 1) this.sexIcon = 'woman';
				if(index == 2) this.showSex = false;
			},
			levelChange(index) {
				this.showLevel = !index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
