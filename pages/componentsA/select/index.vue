<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<w-select @click="show = true" :defaultValue="defaultValue" :labelName='labelName' :valueName='valueName' :mode="mode" v-model="show" :list="list" @confirm="confirm"></w-select>
				<view class="w-demo-result-line">select值：{{ result }}</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">参数配置</view>
			<view class="w-config-item">
				<view class="w-item-title">状态</view>
				<w-subsection vibrateShort :current="current" :list="['打开', '收起']" @change="statusChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">模式</view>
				<w-subsection vibrateShort :list="['单列', '多列独立', '多列联动','地区']" @change="modeChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			result: '尚未选择',
			defaultValue: [3],
			mode: 'single-column', // single-column, mutil-column, mutil-column-auto
			list: [],
			list1: [
			],
			list2: [
				[
					{
						value: '1',
						label: '昔'
					},
					{
						value: '2',
						label: '去'
					},
					{
						value: '3',
						label: '雪'
					},
					{
						value: '4',
						label: '如'
					},
					{
						value: '5',
						label: '花'
					}
				],
				[
					{
						value: '6',
						label: '今'
					},
					{
						value: '7',
						label: '来'
					},
					{
						value: '8',
						label: '花'
					},
					{
						value: '9',
						label: '似'
					},
					{
						value: '10',
						label: '雪'
					}
				]
			],
			list3: [
				{
					label: '中国',
					value: '1',
					children: [
						{
							label: '广西',
							value: '2',
							children: [
								{
									label: '南宁',
									value: '3'
								},
								{
									label: '梧州',
									value: '4'
								},
								{
									label: '柳州',
									value: '5'
								}
							]
						},
						{
							label: '广东',
							value: '2',
							children: [
								{
									label: '深圳',
									value: '3'
								},
								{
									label: '惠州',
									value: '4'
								},
								{
									label: '清远',
									value: '5'
								}
							]
						}
					]
				},
				{
					label: '美国',
					value: '1',
					children: [
						{
							label: '纽约',
							value: '2',
							children: [
								{
									label: '皇后街道',
									value: '3'
								}
							]
						}
					]
				}
			],
			labelName:'label',
			valueName:'value',
			valList:['','',''],
			singleValue:[],
			mutilValue:[]
		};
	},
	onLoad() {
		this.list1 = this.$w.getDictType('sex_type')
		console.log(this.list1)
		this.list = this.list1;
	},
	computed: {
		current() {
			return this.show ? 0 : 1;
		}
	},
	methods: {
		statusChange(index) {
			this.show = !index;
			if(this.mode == 'address-column'){
				this.labelName = 'name';
				this.valueName = 'code';
				this.defaultValue = this.valList
			}else{
				this.labelName = 'label';
				this.valueName = 'value';
				// if(this.mode == 'single-column'){
				// 	this.defaultValue = this.singleValue
				// }else if(this.mode == 'mutil-column'){
				// 	this.defaultValue = this.mutilValue
				// }
			}
		},
		modeChange(index) {
			let type = ['single-column', 'mutil-column', 'mutil-column-auto', 'address-column'];
			this.mode = type[index];
			if(this.mode == 'address-column'){
				this.labelName = 'name';
				this.valueName = 'code';
				this.defaultValue = this.valList
			}else{
				if(this.mode == 'single-column'){
					this.defaultValue = ['3']
					
				}
				this.labelName = 'label';
				this.valueName = 'value';
				this.list = index == 0 ? this.list1 : index == 1 ? this.list2 : this.list3;
			}
			this.show = true;
		},
		confirm(e) {
			this.result = '';
			this.valList = []
			this.defaultValue = []
			this.mutilValue = []
			e.map((val, index) => {
				this.result += this.result == '' ? val.label : '-' + val.label;
				if(this.mode=='address-column'){
					this.valList.push(val.value)
				}else{
					if(this.mode == 'single-column'){
						this.singleValue.push(val.value)
					}else if(this.mode == 'mutil-column'){
						this.mutilValue.push(val.value)
					}
					
				}
				
			})
			console.log(this.valList)
		}
	}
};
</script>

<style scoped lang="scss">
.badge-button {
	padding: 4rpx 6rpx;
	background-color: $w-type-error;
	color: #fff;
	border-radius: 10rpx;
	font-size: 22rpx;
	line-height: 1;
}
</style>
