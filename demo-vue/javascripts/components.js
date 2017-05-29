Vue.component('todo-item', {
	props: ['todo'],
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
			this.$parent.$emit('removetodo', this.todo.id);
		}
	}
});

Vue.component('input-todo', {
	template: '#input-todo',
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
			this.$emit('addnewtodo', {
				id: Math.floor(Math.random() * 1e10),
				title: this.title,
				content: this.content
			});
			this.title = '';
			this.content = '';
		}
	}
});

Vue.component('todo-list', {
	template: '#todo-list',
	props: ['todos'],
});


const app = new Vue({
	el: '#app',
	data: {
		todos: [{
			id: Math.floor(Math.random() * 1e10),
			title: 'todo1',
			content: 'eat breakfast'
		},{
			id: Math.floor(Math.random() * 1e10),
			title: 'todo2',
			content: 'eat lunch'
		},{
			id: Math.floor(Math.random() * 1e10),
			title: 'todo3',
			content: 'eat supper'
		},{
			id: Math.floor(Math.random() * 1e10),
			title: 'todo4',
			content: 'drink milk'
		}]
	},
	methods: {
		addNewTodo(todo) {
			this.todos.push(todo);
		},
		removeTodo(id) {
			this.todos = this.todos.filter(function(todo) {
				return todo.id !== id;
			});
		}
	}
});