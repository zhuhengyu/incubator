Vue.use(VueMaterial);

Vue.component('todo-item', {
	props: ['listId', 'todo'],
	template: '#todo-item',
	data() {
		return {
			ok: 'ok'
		};
	},
	methods: {
		toggleDone(event) {
			this.todo.done = !this.todo.done;
			storage.setData();
		},
		showContent(ref) {
			this.$refs[ref].open();
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
	methods: {
		addNewTodo() {
			if (this.title === '') {
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
					content: this.content || ' ',
					done: false
				}
			});
			this.$parent.$emit('showmessage', {
				type: 'info',
				content: 'info: success'
			});
			this.title = '';
			this.closeDialog();
		},
		openDialog(ref) {
			this.$refs[ref].open();
		},
		closeDialog() {
			for(let ref in this.$refs) {
				this.$refs[ref].close();
			}
		}
	}
});

Vue.component('todo-editor', {
	template: '#todo-editor',
	props: ['todo'],
	data() {
		return {
			title: this.todo.title,
			content: this.todo.content
		};
	},
	methods: {
		openDialog(ref) {
			this.$refs[ref].open();
		},
		closeDialog() {
			for(let ref in this.$refs) {
				this.$refs[ref].close();
			}
		},
		update() {
			this.todo.title = this.title;
			this.todo.content = this.content;
			storage.setData();
			this.closeDialog();
		}
	}
});

Vue.component('todo-list', {
	template: '#todo-list',
	props: ['data'],
	methods: {
		removeList() {
			this.$emit('removelist', this.data.id);
		}
	}
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

Vue.component('input-list', {
	template: '#input-list',
	data() {
		return {
			title: ''
		};
	},
	methods: {
		addNewList() {
			console.log(this.title);
			this.$parent.$emit('addnewlist', {
				id: genId(),
				title: this.title,
				todos: []
			});
			this.closeDialog();
		},
		openDialog(ref) {
			this.$refs[ref].open();
		},
		closeDialog() {
			for(let ref in this.$refs) {
				this.$refs[ref].close();
			}
		}
	}
});

Vue.component('list-editor', {
	template: '#list-editor',
	props: ['todolist'],
	data() {
		return {
			title: this.todolist.title
		};
	},
	methods: {
		update() {
			this.todolist.title = this.title;
			this.closeDialog();
			storage.setData();
		},
		openDialog(ref) {
			this.$refs[ref].open();
		},
		closeDialog() {
			for(let ref in this.$refs) {
				this.$refs[ref].close();
			}
		}
	}
});

const app = new Vue({
	el: '#app',
	data: storage.getData(),
	methods: {
		addNewTodo(data) {
			this.todoLists.forEach(function(todoList) {
				if (todoList.id === data.listId) {
					todoList.todos.push(data.todo);
				}
			});
			storage.setData();
		},
		removeTodo(listId, todoId) {
			this.todoLists.forEach(function(todoList) {
				if(todoList.id === listId) {
					todoList.todos = todoList.todos.filter(function(todo) {
						return todo.id !== todoId;
					});
				}
			});
			storage.setData();
		},
		showList(index) {
			this.activeIndex = index;
			storage.setData();
		},
		addNewList(list) {
			this.todoLists.push(list);
			storage.setData();
		},
		removeList(listId) {
			this.todoLists = this.todoLists.filter(function(todoList) {
				return todoList.id !== listId;
			});
			this.activeIndex -= 1;
			storage.setData();
		}
	}
});