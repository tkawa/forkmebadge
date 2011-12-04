
var req = [
	'./share/js/common/common.js',
	'./share/js/common/static.js'
]
require(req, function() {
	//console.log('onload');
	try {
		onload();
	}catch(e){};
});