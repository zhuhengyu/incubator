const publisher = {};

const installEvent = function(obj) {
	const event = {
		clientLists: {},
		listen(key, callback) {
			if (!this.clientLists[key]) {
				this.clientLists[key] = [];
			}
			this.clientLists[key].push(callback);
		},
		remove(key, callback) {
			const clientList = this.clientLists[key];
			if (!clientList) {
				return;
			}
			for (var i = clientList.length - 1; i >= 0; i--) {
				if (clientList[i] === callback) {
					clientList.splice(i, 1);
				}
			}
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
	if (obj) {
		for(let key in event) {
			obj[key] = event[key];
		};
	}
};

installEvent(publisher);

const xiaoming = function(arg) {
	console.log(`xiaoming ${arg}`);
};

const xiaofang = function(arg) {
	console.log(`xiaofang ${arg}`);
};

publisher.listen('e1', xiaoming);
publisher.listen('e1', xiaofang);
publisher.listen('e2', function(arg) {
	console.log(`xiaoma ${arg}`);
});

publisher.trigger('e1', 200);

publisher.remove('e1', xiaoming);

publisher.trigger('e1', 300);