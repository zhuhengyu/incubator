const each = function(arr, callback) {
	for (var i = 0; i < arr.length; i++) {
		callback.apply(null, [arr[i], i]);
	}
};

each(['a', 'b', 'c'], function(val, idx) {
	console.log(val, idx);
});