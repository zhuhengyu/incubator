# Vue笔记（7）-列表渲染

1. ```v-for```
    1. 基本用法
        1. 代码
        ```html
        <ul id="example-1">
            <li v-for="item in items">{{item.message}}</li>
        </ul>
        ```
        ```javascript
        const example1 = new Vue({
            el: '#example-1',
            data: {
                items: [{
                    message: 'Foo'
                }, {
                    message: 'Bar'
                }]
            }
        });
        ```
        2. ```v-for```是以```item in items```的形式遍历循环的，其中```items```是组件可访问到的数据，```item```就是从一次循环中所取得的数据，这种形式很像JavaScript```for of```循环
    2. ```template``` ```v-for```
        1. 代码
        ```html
        <ul>
            <template>
                <li>{{item.msg}}</li>
                <li class="divider"></li>
            </template>
        </ul>
        ```
        2. 跟```v-if```一样，```v-for```和```template```也可以和一起使用
    3. 对象迭代```v-for```
        1. 代码
        ```html
        <ul id="repeat-object" class="demo">
            <li v-for="value in object">
                {{value}}
            </li>
        </ul>
        ```
        ```javascript
        new Vue({
            el: '#repeat-object',
            data: {
                object: {
                    FirstName: 'John',
                    LastName: 'Doe',
                    Age: 30
                }
            }
        });
        ```
        2. ```v-for```实际上可以获取3个属性，分别是```(value, key, index)```，3个属性也可以只取前1个（基本用法），或者取前2个，注意如果遍历的是数组，则不存在第3个属性```index```
        ```javascript
        <div v-for="(value, key, index) in object">
            {{index}}. {{key}} : {{value}}
        </div>
        ```
    4. 整数迭代```v-for```
    ```javascript
    <div>
        <span v-for="n in 10">{{n}}</span>
    </div>
    ```
    5. 组件和```v-for```，在自定义组件例，我们也可以使用```v-for```
    ```html
    <my-component v-for="item in items"></my-component>    
    ```
    6. 带```v-if```的```v-for```
    ```html
    <li v-for="todo in todos" v-if="!todo.isComplete">
        {{todo}}
    </li>
    ```
2. ```key```
    1. 代码
    ```javascript
    <div v-for="item in items" :key="item.id"></div>
    ```
    2. Vue使用```v-for```更新已经渲染过得元素列表时，默认采用“就地复用”策略，如果数据项发生变化，Vue不会移动列表项元素，而是直接修改元素中的值和属性。当我们需要根据每个节点的身份时，就需要为其设置一个```key```属性。默认情况下，尽量提供```key```属性，除非DOM的内容足够简单而且需要避免移动DOM来提高性能
3. 数组更新检测
    1. 变异方法，下列方法会更改数组，所以也会触发视图更新
        1. ```push()```
        2. ```pop()```
        3. ```shift()```
        4. ```unshift()```
        5. ```splice()```
        6. ```sort()```
        7. ```reverse()```
    2. 重塑数组，对于有些方法不会更改数组，我们需要直接将方法的返回值赋值给原属性
        1. ```filter()```
        2. ```concat()```
        3. ```slice()```
    3. 注意事项，Vue不能检测以下形式的数组变动，这是由于JavaScript语言本身的限制决定的
        1. ```vm.items[indexOfItem] = newValue;```
        2. ```vm.items.length = newLength;```
4. 显示过滤/排序结果
    1. 一些需要对列表进行过滤显示的情况下，可以使用计算属性或者方法
    2. 代码
    ```html
    <li v-for="n in evenNumbers">{{n}}</li>
    ```
    ```javascript
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter(function(number) {
                return number % 2 === 0;
            });
        }
    }
    ```