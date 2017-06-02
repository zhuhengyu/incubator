Vue.use(VueMaterial);

Vue.component('todo-item', {
	props: ['listId', 'todo'],
	template: '#todo-item',
	data() {
		return {
			done: false
		};
	},
	methods: {
		toggleDone(event) {
			this.done = !this.done;
		},
		showContent() {
			alert(this.todo.content);
		},
		removeTodo() {
			this.$parent.$emit('removetodo', this.listId, this.todo.id);
		}
	}
});

Vue.component('input-todo', {
	template: '#input-todo',
	props: ['listId'],
	data() {
		return {
			title: '',
			content: '',
		};
	},
	watch: {
		title() {
			console.log(this.title);
		},
		content() {
			console.log(this.content);
		}
	},
	methods: {
		addNewTodo() {
			if (this.title === '' || this.content === '') {
				this.$parent.$emit('showmessage', {
					type: 'warning',
					content: 'warning: cannot be empty'
				});
				return;
			}
			this.$parent.$emit('addnewtodo', {
				listId: this.listId,
				todo: {
					id: genId(),
					title: this.title,
					content: this.content
				}
			});
			this.$parent.$emit('showmessage', {
				type: 'info',
				content: 'info: success'
			});
			this.title = '';
			this.content = '';
		}
	}
});

Vue.component('todo-list', {
	template: '#todo-list',
	props: ['data']
});

Vue.component('todo-list-titles', {
	template: '#todo-list-titles',
	props: ['todoLists'],
	methods: {
		showList(index) {
			this.$emit('showlist', index);
		}
	}
});

Vue.component('sys-message', {
	template: '#sys-message',
	props: ['message']
});

const app = new Vue({
	el: '#app',
	data: {
		activeIndex: 0,
		sysMessage: {
			type: 'info',
			content: ''
		},
		todoLists: [{
			id: genId(),
			title: 'Zhao',
			todos: [{
				id: genId(),
				title: 'todo1',
				content: 'eat breakfast'
			},{
				id: genId(),
				title: 'todo2',
				content: 'eat lunch'
			},{
				id: genId(),
				title: 'todo3',
				content: 'eat supper'
			},{
				id: genId(),
				title: 'todo4',
				content: 'drink milk'
			}]
		},{
			id: genId(),
			title: 'Qian',
			todos: [{
				id: genId(),
				title: 'todo1',
				content: 'eat breakfast'
			},{
				id: genId(),
				title: 'todo2',
				content: 'eat lunch'
			},{
				id: genId(),
				title: 'todo3',
				content: 'eat supper'
			},{
				id: genId(),
				title: 'todo4',
				content: 'drink milk'
			}]
		}]
	},
	methods: {
		addNewTodo(data) {
			this.todoLists.forEach(function(todoList) {
				if (todoList.id === data.listId) {
					todoList.todos.push(data.todo);
				}
			});
		},
		removeTodo(listId, todoId) {
			this.todoLists.forEach(function(todoList) {
				if(todoList.id === listId) {
					todoList.todos = todoList.todos.filter(function(todo) {
						return todo.id !== todoId;
					});
				}
			});
		},
		showList(index) {
			this.activeIndex = index;
		},
		updateMessage(message) {
			this.sysMessage = message;
		}
	}
});

function genId() {
	return Math.floor(Math.random() * 1e10);
}