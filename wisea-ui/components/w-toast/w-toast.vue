<template>
	<view class="w-toast" :class="[isShow ? 'w-show' : '', 'w-type-' + config.type, 'w-position-' + config.position]" :style="{
		zIndex: uZIndex
	}">
		<view class="w-icon-wrap">
			<w-icon v-if="config.icon" class="w-icon" :name="iconName" :size="30" :color="config.type"></w-icon>
		</view>
		<text class="w-text">{{config.title}}</text>
	</view>
</template>

<script>
	/**
	 * toast 消息提示
	 * @description 此组件表现形式类似uni的uni.showToastAPI，但也有不同的地方。
	 * @tutorial https://www.uviewui.com/components/toast.html
	 * @property {String} z-index toast展示时的z-index值
	 * @event {Function} show 显示toast，如需一进入页面就显示toast，请在onReady生命周期调用
	 * @example <w-toast ref="uToast" />
	 */
	export default {
		name: "w-toast",
		props: {
			// z-index值
			zIndex: {
				type: [Number, String],
				default: ''
			},
		},
		data() {
			return {
				isShow: false,
				timer: null, // 定时器
				config: {
					params: {}, // URL跳转的参数，对象
					title: '', // 显示文本
					type: '', // 主题类型，primary，success，error，warning，black
					duration: 2000, // 显示的时间，毫秒
					isTab: false, // 是否跳转tab页面
					url: '', // toast消失后是否跳转页面，有则跳转，优先级高于back参数
					icon: true, // 显示的图标
					position: 'center', // toast出现的位置
					callback: null, // 执行完后的回调函数
					back: false, // 结束toast是否自动返回上一页
				}
			};
		},
		computed: {
			iconName() {
				// 只有不为none，并且type为error|warning|succes|info时候，才显示图标
				if (['error', 'warning', 'success', 'info'].indexOf(this.config.type) >= 0 && this.config.icon) {
					let icon = this.$w.type2icon(this.config.type);
					return icon;
				}
			},
			uZIndex() {
				// 显示toast时候，如果用户有传递z-index值，有限使用
				return this.isShow ? (this.zIndex ? this.zIndex : this.$w.zIndex.toast) : '999999';
			}
		},
		methods: {
			// 显示toast组件，由父组件通过this.$refs.xxx.show(options)形式调用
			show(options) {
				this.config = this.$w.deepMerge(this.config, options);
				if (this.timer) {
					// 清除定时器
					clearTimeout(this.timer);
					this.timer = null;
				}
				this.isShow = true;
				this.timer = setTimeout(() => {
					// 倒计时结束，清除定时器，隐藏toast组件
					this.isShow = false;
					clearTimeout(this.timer);
					this.timer = null;
					// 判断是否存在callback方法，如果存在就执行
					typeof(this.config.callback) === 'function' && this.config.callback();
					this.timeEnd();
				}, this.config.duration);
			},
			// 隐藏toast组件，由父组件通过this.$refs.xxx.hide()形式调用
			hide() {
				this.isShow = false;
				if (this.timer) {
					// 清除定时器
					clearTimeout(this.timer);
					this.timer = null;
				}
			},
			// 倒计时结束之后，进行的一些操作
			timeEnd() {
				// 如果带有url值，根据isTab为true或者false进行跳转
				if (this.config.url) {
					// 如果url没有"/"开头，添加上，因为uni的路由跳转需要"/"开头
					if (this.config.url[0] != '/') this.config.url = '/' + this.config.url;
					// 判断是否有传递显式的参数
					if (Object.keys(this.config.params).length) {
						// 判断用户传递的url中，是否带有参数
						// 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
						// 如果有params参数，转换后无需带上"?"
						let query = '';
						if (/.*\/.*\?.*=.*/.test(this.config.url)) {
							// object对象转为get类型的参数
							query = this.$w.queryParams(this.config.params, false);
							this.config.url = this.config.url + "&" + query;
						} else {
							query = this.$w.queryParams(this.config.params);
							this.config.url += query;
						}
					}
					// 如果是跳转tab页面，就使用uni.switchTab
					if (this.config.isTab) {
						uni.switchTab({
							url: this.config.url
						});
					} else {
						uni.navigateTo({
							url: this.config.url
						});
					}
				} else if(this.config.back) {
					// 回退到上一页
					this.$w.route({
						type: 'back'
					})
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	@import "../../libs/css/style.components.scss";
	
	.w-toast {
		position: fixed;
		z-index: -1;
		transition: opacity 0.3s;
		text-align: center;
		color: #fff;
		border-radius: 8rpx;
		background: #585858;
		height: 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		opacity: 0;
		pointer-events: none;
		padding:0 40rpx;
	}

	.w-toast.w-show {
		opacity: 1;
	}

	.w-text {
		word-break: keep-all;
		white-space: nowrap;
		line-height: normal;
	}

	.w-icon {
		margin-right: 10rpx;
		display: flex;
		align-items: center;
		line-height: normal;
	}

	.w-position-center {
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}

	.w-position-top {
		left: 50%;
		top: 20%;
		transform: translateX(-50%) translateY(-50%);
	}

	.w-position-bottom {
		left: 50%;
		bottom: 20%;
		transform: translateX(-50%) translateY(-50%);
	}

	.w-type-primary {
		color: $w-type-primary;
		background-color: $w-type-primary-light;
		border: 1px solid rgb(215, 234, 254);
	}

	.w-type-success {
		color: $w-type-success;
		background-color: $w-type-success-light;
		border: 1px solid #BEF5C8;
	}

	.w-type-error {
		color: $w-type-error;
		background-color: $w-type-error-light;
		border: 1px solid #fde2e2;
	}

	.w-type-warning {
		color: $w-type-warning;
		background-color: $w-type-warning-light;
		border: 1px solid #faecd8;
	}

	.w-type-info {
		color: $w-type-info;
		background-color: $w-type-info-light;
		border: 1px solid #ebeef5;
	}

	.w-type-default {
		color: #fff;
		background-color: #585858;
	}
</style>
