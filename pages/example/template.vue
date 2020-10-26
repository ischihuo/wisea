<template>
	<view class="wrap">
		<page-nav :desc="desc"></page-nav>
		<view class="list-wrap">
			<w-cell-group title-bg-color="rgb(243, 244, 246)" :title="item.groupName" v-for="(item, index) in list" :key="index">
				<w-cell-item :titleStyle="{fontWeight: 500}" @click="openPage(item1.path)" :title="item1.title" v-for="(item1, index1) in item.list" :key="index1">
					<image slot="icon" class="w-cell-icon" :src="getIcon(item1.icon)" mode="widthFix"></image>
				</w-cell-item>
			</w-cell-group>
		</view>
		<w-gap height="70"></w-gap>
		<w-tabbar :list="vuex_tabbar" :mid-button="true"></w-tabbar>
	</view>
</template>

<script>
	import list from "./template.config.js";
	export default {
		data() {
			return {
				list: list,
				desc: '收集众多的常用页面和布局，减少开发者的重复工作，让你专注逻辑，事半功倍'
			}
		},
		computed: {
			getIcon() {
				return path => {
					return 'https://cdn.uviewui.com/uview/example/' + path + '.png';
				}
			}
		},
		methods: {
			openPage(path) {
				this.$w.route({
					url: path.indexOf('/page') == 0 ? path : '/pages/template/' + path + '/index'
				})
			}
		}
	}
</script>

<style>
	/* page {
		background-color: rgb(240, 242, 244);
	} */
</style>

<style lang="scss" scoped>
	.w-cell-icon {
		width: 36rpx;
		height: 36rpx;
		margin-right: 8rpx;
	}
</style>
