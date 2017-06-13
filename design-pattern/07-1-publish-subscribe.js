const publisher = {};
publisher.clientLists = {};
publisher.listen = function(key, callback) {
	if (!this.clientLists[key]) {
		this.clientLists[key] = [];
	}
	this.clientLists[key].push(callback);
};
publisher.trigger = function(key, args) {
	const clientList = this.clientLists[key];
	if (!clientList) {
		return;
	}
	for (var i = 0; i < clientList.length; i++) {
		clientList[i].apply(this, args);
	}
};

publisher.listen('e1', function(arg) {
	console.log(`hahaha ${arg}`);
});
publisher.listen('e1', function(arg) {
	console.log(`hehehe ${arg}`);
});
publisher.listen('e1', function(arg) {
	console.log(`hihihi ${arg}`);
});
publisher.listen('e2', function(arg) {
	console.log(`hahaha ${arg}`);
});

publisher.trigger('e1', [200]);