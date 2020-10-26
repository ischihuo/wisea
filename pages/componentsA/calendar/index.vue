<template>
	<view class="w-demo">
		<view class="w-demo-wrap" style="background-color: #FFFFFF;">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-calendar :show="showPicker" :endDate='endDate' :beginDate='beginDate' :type="type" :value="value" :show-tips="true" :show-seconds="true" @confirm="onSelected" @cancel="onCancel"
				>
				</w-calendar>
				<view class="w-demo-result-line">
					{{result}}
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">状态</view>
				<w-subsection vibrateShort :current="showBtnStatus" :list="['显示', '隐藏']" @change="showChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式</view>
				<w-subsection vibrateShort current="0" :list="['单个日期', '日期范围']" @change="modeChange"></w-subsection>
			</view>
			<!-- <view class="w-config-item">
				<view class="w-item-title">自定义样式</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="styleChange"></w-subsection>
			</view> -->
			<view class="w-config-item" style="color: red;">
				注:更多规则请参考在线文档
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: '2019/01/01',
				showPicker: false,
				type: 'date',
				endDate:'',
				beginDate:'',
				value:'',
				result:''
			}
		},
		computed: {
			showBtnStatus() {
				return this.showPicker ? 0 : 1;
			}
		},
		methods: {
			showChange(index) {
				this.showPicker = !index;
			},
			modeChange(index) {
				console.log(index)
				this.type = index == 0 ? 'date' : 'rangetime';
				this.showPicker = true;
			},
			onSelected(e) {
				this.showPicker = false;
				if(Array.isArray(e.value)){
					this.result = e.value[0] + '至' + e.value[1]
				}else{
					this.result = e.value
				}
			},
			onCancel(e) {
				this.showPicker = false;
				console.log(e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.w-demo {
		
	}
</style>
