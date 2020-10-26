// let env = 'dev';//环境配置  开发dev 测试test 正式forma
import config from '../config/config.js'
let type = '';
let ip = ''
let jpgShow = ''
let imgShow = ''
if (config.env == 'dev') {
	ip = 'http://203.86.72.240:8650';
	imgShow = 'http://203.86.72.240:8650/sr/';
} else if (config.env == 'test') {
	
}
// 接口调用
var api = {
	imgShow: imgShow,
	AREA_LINKAGELIST : ip + '/system/area/linkageList',
	
	// 文件上传下载
	UPLOADIMG: ip + '/files/w/uploadImg', //图片上传(需登录)
	uploadAud: ip + "/files/w/uploadAud",
	uploadAudI: ip + "/files/w/video/upload"
};
export function getApi(e){
	return api[e]
}
