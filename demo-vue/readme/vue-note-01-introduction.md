# Vue笔记（1）-简介

1. 什么是单页应用
    1. 单页应用（Single-Page Application, SPA）是一种在运行在单一网页中Web应用
    2. 由于是一种Web应用，开发单页应用的基本技术还是HTML，CSS，和JavaScript
    3. 重前端，大多数业务逻辑都在本地操作，数据都需要通过AJAX和后端进行交互，无刷新体验
    4. 以小块组件为功能元件
    5. 浏览器需要维护一个完整的数据层，数据层前置，后端仅仅提供数据API
2. 一个基本应用
    1. 安装Vue
        ```javascript
        <script src="https://unpkg.com/vue"></script>
        ```
    2. 指定一个元素为单页应用的根组件
        ```html
        <div id="app">
            {{message}}
        </div>
        ```
        ```javascript
        const app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        });
        ```
    3. 注意点
        1. 使用```new Vue({/*...*/})```的方式创建一个根组件
        2. el属性表示需要绑定的作为根的元素，值为选择器
        3. data表示应用初始化时的数据
3. 标签属性的设定
    1. 代码
    ```html
    <div id="app-2">
        <span v-bind:title="message">
            Hover your mouse over me for a few seconds to see my dynamically bound title!
        </span>
    </div>
    ```
    2. 绑定属性使用```v-bind:prop="value"```，注意这里的```value```是来自```data```中取值
4. 条件和循环
    1. 条件
        1. 代码
        ```html
        <div id="app-3">
            <p v-if="seen"></p>
        </div>
        ```
        ```javascript
        const app3 = new Vue({
            el: '#app-3',
            data: {
                seen: false
            }
        });
        ```
        2. ```v-if```中的值如果不成立，则```v-if```所在的元素不会被渲染
    2. 循环
        1. 代码
        ```html
        <div id="app-4">
            <ol>
                <li v-for="todo in todos">{{todo.text}}</li>
            </ol>
        </div>
        ```
        ```javascript
        const app4 = new Vue({
            el: '#app-4'，
            data: {
                todos: [{
                    text: 'Learn JavaScript'
                }, {
                    text: 'Learn Vue'
                }, {
                    text: 'Build something awesome'
                }]
            }
        });
        ```
        2. ```v-for="todo in todos"```可以依次取得todos中的所有对象，并且为每一个对象渲染一次当前的标签，当前标签可以通过todo访问到当前对象，```todo in todos```就表示依次去```todos```中的每一个```todo```
5. 处理用户输入
    1. 处理事件
        1. 代码
        ```html
        <div id="app-5">
            <p>{{message}}</p>
            <button v-on:click="reverseMessage">Reverse Message</button>
        </div>
        ```
        ```javascript
        const app5 = new Vue({
            el: '#app-5',
            data: {
                message: 'Hello Vue.js'
            },
            methods: {
                reverseMessage() {
                    this.message = this.message.split('').reverse().join('');
                }
            }
        });
        ```
        2. 事件绑定使用```v-on:eventname```，其中，```eventname```表示事件名，设定的值（```reverseMessage```）为在```methods```中定义的函数。在本例的```reverseMessage```函数中，我们第一次访问当前组件的数据，访问方法可以直接使用```this```访问
    2. 表单输入的双向绑定
        1. 代码
        ```html
        <div id="app-6">
            <p>{{message}}</p>
            <input v-model="message">
        </div>
        ```
        ```javascript
        const app6 = new Vue({
            el: '#app-6',
            data: {
                message: 'Hello Vue!'
            }
        });
        ```
        2. 表单中的```input```模型绑定使用```v-model```属性，```v-model```中设定的值会在表单和状态之间被双向绑定
6. 构成组件
    1. 单页应用就是由诸多小型的、自包含的，可重用的组件组成的大型应用
    2. 定义一个组件
        1. 代码
        ```javascript
        Vue.component('todo-item', {
            template: '<li>This is a todo</li>'
        });
        ```
        2. 注意这里使用```Vue.component('component-name', configuration)```定义一个组件，其中
            1. ```component-name```表示组件的名字
            2. ```configuration```表示组件的配置
            3. ```configuration```中的template表示该组件渲染所使用的的模板
    3. 一个稍微复杂一点的应用
        1. todo组件
            1. 代码
            ```html
            Vue.component('todo-item', {
                props: ['todo'],
                template: '<li>{{ todo.text }}</li>'
            })
            ```
            2. ```props```属性通过一个数组设定该组件需要接受的属性，属性是从父组件中传递下来的数据
        2. App根组件
            1. 代码
            ```html
            <div id="app-7">
                <ol>
                    <todo-item
                        v-for="item in groceryList"
                        v-bind:todo="item"
                        v-bind:key="item.id">
                    </todo-item>
                </ol>
            </div>
            ```
            ```javascript
            var app7 = new Vue({
                el: '#app-7',
                data: {
                    groceryList: [
                        { id: 0, text: 'Vegetables' },
                        { id: 1, text: 'Cheese' },
                        { id: 2, text: 'Whatever else humans are supposed to eat' }
                    ]
                }
            });
            ```
            2. 上述组件中，对于```groceryList```中的每一个项目，都创建了```todo-item```组件，注意我们还未每一个```todo-item```提供了一个```key```属性，这个之后会解释
7. 总结
    1. 所用到的Vue标签
        1. ```v-bind:prop="prop"```
        2. ```v-if="state"```
        3. ```v-for="todo in todos"```
        4. ```v-on:event="handler"```
        5. ```v-model="message"```
    2. 创建组件
        1. 根组件
            ```javascript
            const app = new Vue({
                el: '#selector',
                data: {},
                methods: {
                    handler() {}
                    // ...
                }
                // ...
            });
            ```
        2. 普通组件
            ```javascript
            Vue.component('component-name', {
                template: '<div></div>',
                props: ['prop1', 'prop2'],
                methods: {
                    handler(){}
                    // ...
                }
                // ...
            });
            ```