# Vue笔记（3）-模板语法

1. 插值
    1. Vue使用基于HTML的模板进行组件的渲染，所有的Vue模板都可以被解析合法的HTML
    2. 文本
        1. 使用Mustache语法，使用两对大括号
        2. 基本用法
        ```html
        <span>Message: {{msg}}</span>
        ```
        3. 一次性渲染（不随数据变化而变化）
        ```html
        <span v-once>This will never change: {{msg}}</span>
        ```
    3. 纯HTML
        1. 代码
        ```html
        <div v-html="html">{{myHtml}}</div>
        ```
        2. 设置了```v-html="html"```的标签，内部的mustache内容会以HTML的形式被解析，因此，为了避免XSS攻击，应该避免让用户通过这个方式直接修改DOM
    4. 属性
        1. 代码
        ```html
        <div v-bind:id="dynamicId"></div>
        ```
        2. ```v-bind```用于设置属性
    5. 使用JavaScript表达式
        1. 代码
        ```html
        {{number + 1}}
        {{ok ? 'YES' : 'NO'}}
        {{message.split('').reverse().join('')}}
        <div v-bind:id="'list' + id"></div>
        ```
        2. Vue支持所有形式的单一的JavaScript表达式
2. 指令
    1. 指令是带有```v-```前缀的特殊属性，如之前学过的```v-if```，```v-bind```，```v-on```等
    2. 指令的参数，指```v-bind```之后的冒号之后的部分，如```v-bind:href="url"```中的```href```就是参数
    3. 修饰符是指跟在参数之后的以点号隔开的特殊后缀，如```<form v-on:submit.prevert="onSubmit"></form>```，这里的```.prevent```表示触发事件时调用```event.preventDefault()```，在之后的学习中还会遇到更多的修饰符
3. 过滤器
    1. 代码
    ```html
    <!-- in mustaches -->
    {{msg | capitalize}}
    <!-- in v-bind -->
    <div v-bind:title="msg | capitalize"></div>
    ```
    ```javascript
    new Vue({
        el: '#app',
        data: {
            msg: 'this is just a test'
        },
        filters: {
            capitalize(value) {
                if(!value) {
                    return '';
                }
                return value.toUpperCase();
            }
        }
    });
    ```
    2. 过滤器以一个管道符号```|```将上一个值和下一个过滤器函数连接起来，过滤器和通过多个管道符号串联起来。注意下面的第二个示例中，filter2一共传入了3个参数，第1个参数是管道传入的值，第2个参数是```'arg1'```，第3个参数是```arg2```求值之后的值
    ```html
    {{msg | filter1 | filter2}}
    {{msg | filter1 | filter2('arg1', arg2)}}
    ```
    3. 只能应用在mustache插值和```v-bind```表达式上
4. 缩写
    1. ```v-bind```缩写，例如，```v-bind:id```可以简写为```:id```
    2. ```v-on```缩写，例如，```v-on:click```可以简写为```@click```