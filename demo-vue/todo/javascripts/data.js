function genId() {
	return Math.floor(Math.random() * 1e10);
}

const storage = (function() {
	function init() {
		localStorage.data = JSON.stringify({
			activeIndex: 0,
			sysMessage: {
				type: 'info',
				content: ''
			},
			todoLists: [{
				id: genId(),
				title: '学习',
				todos: [{
					id: genId(),
					title: 'todo1',
					content: 'eat breakfast',
					done: false
				},{
					id: genId(),
					title: 'todo2',
					content: 'eat lunch',
					done: false
				},{
					id: genId(),
					title: 'todo3',
					content: 'eat supper',
					done: false
				},{
					id: genId(),
					title: 'todo4',
					content: 'drink milk',
					done: false
				}]
			},{
				id: genId(),
				title: '工作',
				todos: [{
					id: genId(),
					title: 'todo1',
					content: 'eat breakfast',
					done: false
				},{
					id: genId(),
					title: 'todo2',
					content: 'eat lunch',
					done: false
				},{
					id: genId(),
					title: 'todo3',
					content: 'eat supper',
					done: false
				},{
					id: genId(),
					title: 'todo4',
					content: 'drink milk',
					done: false
				}]
			}]
		});
	}
	if(!localStorage.data) {
		init();
	}
	let data = JSON.parse(localStorage.data);
	if(data.todoLists.length < 1 || data.activeIndex < 0) {
		init();
		data = JSON.parse(localStorage.data);
	}
	const getData = () => {
		return data;
	};
	const setData = () => {
		localStorage.data = JSON.stringify(data);
	}
	return {
		getData,
		setData
	};
})();