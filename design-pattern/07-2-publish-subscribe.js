const publisher = {};

const event = {
	clientLists: {},
	listen(key, callback) {
		if (!this.clientLists[key]) {
			this.clientLists[key] = [];
		}
		this.clientLists[key].push(callback);
	},
	trigger() {
		const key = Array.prototype.shift.apply(arguments);
		const clientList = this.clientLists[key];
		if (!clientList) {
			return;
		}
		for (var i = 0; i < clientList.length; i++) {
			clientList[i].apply(this, arguments);
		}
	}
};

const installEvent = function(obj) {
	if (obj) {
		for(let key in event) {
			obj[key] = event[key];
		};
	}
};

installEvent(publisher);

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

publisher.trigger('e1', 200);
