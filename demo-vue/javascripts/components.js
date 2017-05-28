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
	}
});