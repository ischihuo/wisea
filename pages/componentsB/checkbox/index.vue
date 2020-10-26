<template>
	<view class="w-demo">
		<view class="w-demo-wrap">
			<view class="w-demo-title">演示效果</view>
			<view class="w-demo-area">
				<view class="">
					<w-checkbox-group :size="size" :width="width" 
						:wrap="wrap" :max="max" 
						@change="checkboxGroupChange" 
						:activeColor="activeColor"
					>
						<w-checkbox @change="checkboxChange"
							v-model="item.checked" v-for="(item, index) in list" 
							:key="index" :name="item.name"
							:shape="shape"
							:disabled="item.disabled"
						>{{item.name}}</w-checkbox>
					</w-checkbox-group>
				</view>
				<view class="w-demo-result-line">
					{{result.length ? `选中了"${getResult}"` : '请选择'}}
				</view>
			</view>
		</view>
		<view class="w-config-wrap">
			<view class="w-config-title w-border-bottom">
				参数配置
			</view>
			<view class="w-config-item">
				<view class="w-item-title">形状</view>
				<w-subsection vibrateShort :list="['方形', '圆形']" @change="shapeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">整体大小(单位rpx)</view>
				<w-subsection vibrateShort current="1" :list="['30', '40', '50']" @change="sizeChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">激活颜色</view>
				<w-subsection vibrateShort :list="['primary', 'error', 'warning', 'success', 'info']" @change="activeColorChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">默认选中第一个</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="defaultChooseChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">每个占一行</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="wrapChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">每个宽度50%</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="widthChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">最大选择数量</view>
				<w-subsection vibrateShort current="2" :list="['1', '2', '3']" @change="maxChange"></w-subsection>
			</view>
			<view class="w-config-item">
				<view class="w-item-title">禁用第一个</view>
				<w-subsection vibrateShort current="1" :list="['是', '否']" @change="disabledChange"></w-subsection>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: '荔枝',
						checked: false,
						disabled: false
					},
					{
						name: '香蕉',
						checked: false,
						disabled: false
					},
					{
						name: '橙子',
						checked: false,
						disabled: false
					},
					{
						name: '草莓',
						checked: false,
						disabled: false
					}
				],
				disabled: false,
				checked: true,
				result: [],
				shape: 'square',
				max: 3,
				activeColor: '#2979ff',
				size: 34,
				wrap: false,
				width: 'auto'
			}
		},
		computed: {
			getResult() {
				return this.result.join(",");
			}
		},
		methods: {
			shapeChange(index) {
				this.shape = index == 0 ? 'square' : 'circle';
			},
			sizeChange(index) {
				this.size = index == 0 ? 30 : index == 1 ? 40 : 50;
			},
			defaultChooseChange(index) {
				// 特别处理对第一个选的选中的情况，涉及到提示语，选中状态等
				// 实际开发中不会存在这些情况，只是演示用
				if(index == 0) {
					this.list[0].checked = true;
					this.result = [this.list[0].name];
				} else {
					this.list[0].checked = false;
					this.result.splice(this.result.indexOf(this.list[0].name), 1);
				}
			},
			maxChange(index) {
				this.max = index + 1;
			},
			disabledChange(index) {
				if(index == 0) {
					this.list[0].disabled = true;
				} else {
					this.list[0].disabled = false;
				}
			},
			activeColorChange(index) {
				// 如果用户尚未勾选任何checkbox，切换颜色时，默认选中第一个让用户看到效果，因为勾选了才有效果
				if(!this.result.length) this.list[0].checked = true;
				let theme = index == 0 ? 'primary' : index == 1 ? 'error' : index == 2 ? 'warning' : index == 3 ? 'success' : 'info';
				this.activeColor = this.$w.color[theme];
			},
			// 选中某个复选框时，由checkbox时触发
			checkboxChange(e) {
				// console.log(e);
			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				this.result = e;
			},
			widthChange(index) {
				this.width = index == 0 ? '50%' : '';
			},
			wrapChange(index) {
				this.wrap = !index;
			}
		}
	}
</script>

<style scoped lang="scss">
	.w-demo {}
</style>
