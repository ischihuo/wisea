<template>
	<view>
		<view class="w-padding-40">
			<w-button type="success" @click="showPop(true)">
				<w-icon name="red-packet"></w-icon>
				<text class="w-padding-left-10">发送1.00元红包</text>
			</w-button>
		</view>		
		<w-keyboard 
			default=""
			ref="uKeyboard" 
			mode="number" 
			:mask="true" 
			:mask-close-able="false"
			:dot-enabled="false" 
			v-model="show"
			:safe-area-inset-bottom="true"
			:tooltip="false"
			@change="onChange"
			@backspace="onBackspace">
			<view>
				<view class="w-text-center w-padding-20 money">
					<text>1.00</text>
					<text class="w-font-20 w-padding-left-10">元</text>
					<view class="w-padding-10 close" data-flag="false" @tap="showPop(false)">
						<w-icon name="close" color="#333333" size="28"></w-icon>
					</view>
				</view>
				<view class="w-flex w-row-center">
					<w-message-input 
						mode="box" 
						:maxlength="6"
						:dot-fill="true"
						v-model="password"
						:disabled-keyboard="true"
						@finish="finish"
					></w-message-input>
				</view>
				<view class="w-text-center w-padding-top-10 w-padding-bottom-20 tips">支付键盘</view>
			</view>
		</w-keyboard>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				password:''
			}
		},
		onLoad() {
			
		},
		methods: {
			onChange(val){
				if(this.password.length<6){
					this.password += val;
				}
				
				if(this.password.length>=6){
					this.pay();
				}
			},
			onBackspace(e){
				if(this.password.length>0){
					this.password = this.password.substring(0,this.password.length-1);
				}
			},
			pay(){
				uni.showLoading({
					title:'支付中'
				})
				
				setTimeout(()=>{
					uni.hideLoading();
					this.show = false;
					uni.showToast({
						icon:'success',
						title:'支付成功'
					})
				},2000);
			},
			showPop(flag = true){
				this.password = '';
				this.show = flag;
			},
			finish(){
				console.log(11111)
			}
		}
	}
</script>

<style lang="scss">
	.money{
		font-size: 80rpx;
		color: $w-type-warning;
		position: relative;
		
		.close{
			position: absolute;
			top: 20rpx;
			right: 20rpx;
			line-height: 28rpx;
			font-size: 28rpx;
		}
	}
	.tips{
		color:$w-tips-color;
	}
</style>