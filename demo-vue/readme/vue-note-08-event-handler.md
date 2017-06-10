# Vue笔记（8）-事件处理

1. 监听事件
    1. ```v-on```用于监听事件
    2. 代码
    ```javascript
    <div id="example-1">
        <button v-on:click="counter += 1">增加1</button>
        <p>这个按钮被点击了 {{counter}} 次。</p>
    </div>
    ```
2. 方法事件处理器
    1. 处理复杂的逻辑时，需要定义专门的方法
    2. 代码
    ```html
    <div id="example-2">
        <button v-on:click="greet">Greet</button>
    </div>
    ```
    ```javascript
    const example2 = new Vue({
        el: '#example-2',
        data: {
            name: 'Vue.js'
        },
        // 在 `methods` 对象中定义方法
        methods: {
            greet: function (event) {
            // `this` 在方法里指当前 Vue 实例
            alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            alert(event.target.tagName)
            }
        }
    });
    // 也可以直接调用
    example2.greet();
    ```
3. 内联处理器方法
    1. 基本用法，直接在```v-on```中调用方法
    ```html
    <div>
        <button v-on:click="say('hi')">Say hi</button>
        <button v-on:click="say('what')">Say what</button>
    </div>
    ```
    ```javascript
    new Vue({
        el: '#example-3',
        methods: {
            say(message) {
                alert(message);
            }
        }
    });
    ```
    2. 访问原生事件对象时，我们需要将```$event```传入
    ```html
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
    ```
    ```javascript
    methods: {
        warn(message, event) {
            // 现在我们可以访问原生事件对象
            if (event) {
                event.preventDefault();
            }
            alert(message)
        }
    }
    ```
4. 事件修饰符
    1. 事件处理的方法中，我们应该更加关注业务逻辑，而不应该处理DOM的细节问题，所以一些细节问题（比如事件冒泡等），可以直接通过添加事件修饰符来实现
        * ```.stop```
        * ```.prevent```
        * ```.capture```
        * ```.self```
        * ```.once```
    ```html
    <!-- 阻止单击事件冒泡 -->
    <a v-on:click.stop="doThis"></a>
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>
    <!-- 修饰符可以串联  -->
    <a v-on:click.stop.prevent="doThat"></a>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <!-- 添加事件侦听器时使用事件捕获模式 -->
    <div v-on:click.capture="doThis">...</div>
    <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
    <div v-on:click.self="doThat">...</div>
    <!-- 点击事件将只会触发一次 -->
    <a v-on:click.once="doThis"></a>
    ```
5. 按键修饰符
    1. 监听事件的时候，我们经常需要检测常见的值。Vue允许为```v-on```在监听键盘事件时添加按键修饰符
    ```html
    <!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
    <input v-on:keyup.13="submit">
    ```
    2. Vue还为常用的按键提供了别名
    ```html
    <!-- 同上 -->
    <input v-on:keyup.enter="submit">
    <!-- 缩写语法 -->
    <input @keyup.enter="submit">
    ```
    3. 别名列表
        * ```.enter```
        * ```.tab```
        * ```.delete```
        * ```.esc```
        * ```.space```
        * ```.up```
        * ```.down```
        * ```.left```
        * ```.right```
    可以通过全局```config.keyCodes```对象设置自定义按键修饰符别名
    ```javascript
    // 可以使用 v-on:keyup.f1
    Vue.config.keyCodes.f1 = 112;
    ```