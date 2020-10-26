function uploadFile(eve) {
	//type为类型   count数量  sizeType原图/压缩  sourceType相机或相册
	if(eve.type=='img'){
		let sizeType = ['original', 'compressed'];
		let sourceType = ['camera','album']
		if(eve.sizeType){
			sizeType = eve.sizeType
		}
		if(eve.sourceType){
			sourceType = eve.sourceType
		}
		return new Promise((res, rej) => {
			uni.chooseImage({
				count: eve.count||1, //默认9
				sizeType: sizeType, //可以指定是原图还是压缩图，默认二者都有
				sourceType: sourceType, //从相册选择
				success: (chooseImageRes) => {
					const tempFilePaths = chooseImageRes.tempFilePaths;
					uni.uploadFile({
						url: this.Action.UPLOADIMG, //仅为示例，非真实的接口地址
						filePath: tempFilePaths[0],
						name: eve.name||'file',
						header: {
							'Authorization': this.Authorization,
							'withCredentials': true
						},
						success: (uploadFileRes) => {
							res(JSON.parse(uploadFileRes.data))
						}
					});
				}
			});				
		})
		
	}else if(eve.type=='video'){
		let sizeType = ['original', 'compressed'];
		let sourceType = ['camera','album']
		if(eve.sizeType){
			sizeType = eve.sizeType
		}
		if(eve.sourceType){
			sourceType = eve.sourceType
		}
		return new Promise((res, rej) => {
			uni.chooseVideo({
				count: 1, //默认9
				sizeType: sizeType, //可以指定是原图还是压缩图，默认二者都有
				sourceType: sourceType, //从相册选择
				success: (chooseVideoRes) => {
					const tempFilePaths = chooseVideoRes.tempFilePath;
					uni.uploadFile({
						url: this.Action.uploadAud, //仅为示例，非真实的接口地址
						filePath: tempFilePaths,
						name: eve.name||'file',
						header: {
							'Authorization': this.Authorization,
							'withCredentials': true
						},
						success: (uploadFileRes) => {
							res(JSON.parse(uploadFileRes.data))
						}
					});
				}
			});				
		})
	}else if(eve.type=='all'){
		//仅支持微信小程序
		let sizeType = ['original', 'compressed'];
		let sourceType = ['camera','album']
		if(eve.sizeType){
			sizeType = eve.sizeType
		}
		if(eve.sourceType){
			sourceType = eve.sourceType
		}
		return new Promise((res, rej) => {
			uni.chooseMedia({
			  count: eve.count||1, //默认9
			  sizeType: sizeType, //可以指定是原图还是压缩图，默认二者都有
			  sourceType: sourceType, //从相册选择
			  maxDuration: 30,
			  camera: 'back',
			  success(res) {
				const tempFilePaths = res.tempFilest;
				uni.uploadFile({
					url: this.Action.uploadAud, //仅为示例，非真实的接口地址
					filePath: tempFilePaths,
					name: eve.name||'file',
					header: {
						'Authorization': this.Authorization,
						'withCredentials': true
					},
					success: (uploadFileRes) => {
						res(JSON.parse(uploadFileRes.data))
					}
				});
			  }
			})			
		})
	}else{
		
	}
	
}
module.exports = {
	uploadFile
};