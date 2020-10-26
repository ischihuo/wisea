let DataDict = require('./DataDict');
// 获取数据字典
function getDictType(eve) {
	var tt = DataDict[eve];
	if (tt) {
		return tt;
	} else {
		return {};
	}
}
// 获取数据字典label
function getDictLabel(eve, val) {
	var tt = DataDict[eve];
	if (tt) {
		for (var i = 0; i < tt.length; i++) {
			if (tt[i].value == val) {
				return tt[i].label;
			}
		}
	} else {
		return {};
	}
}
module.exports = {
	getDictType,
	getDictLabel
};