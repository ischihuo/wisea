<script>
	export default {
		// 此处globalData为了演示其作用，不是uView框架的一部分
		globalData: {
			username: '白居易'
		},
		onLaunch() {
			// 1.1.0版本之前关于http拦截器代码，已平滑移动到/common/http.interceptor.js中
			// 注意，需要在/main.js中实例化Vue之后引入如下(详见文档说明)：
			// import httpInterceptor from '@/common/http.interceptor.js'
			// Vue.use(httpInterceptor, app)
			uni.setStorageSync('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjMTExMTExIiwidXNlcl9uYW1lIjoiYzExMTExMSIsIm9wZW5JZCI6IjI1MzBiY2I4NGE0MjQ2OTViN2EwYzVmYTlhZGY5N2M5IiwidXNlcklkIjoxMTk2NDkwNjY5OTM4NDAxMjk0LCJhdXRob3JpdGllcyI6WyJST0xFX2FjY291bnQiLCJST0xFX3VzZXIiXSwiZXhwIjoxNTk5MTQyMTk1fQ.QDLfmrD3ajYPyQG0XQttLwMZ1DpX5Y4OAt3guFZegh6tUTlDlTu0hNE5wJiy9hzT41GKoU3wB2rDhYLGsaldEQkr6a3_-kn2H-tEJBpWcpMUL9y0A8JKfoVBIiSb3h2IlLoibxTLAt-jYTEKBXQPnpmeveduqiN5tw0rjfN7oMg')
		},
		onShow() {
			console.log('show')
		}
	}
</script>

<style lang="scss">
	@import "wisea-ui/index.scss";
	@import "common/demo.scss";
	/*每个页面公共css */
</style>