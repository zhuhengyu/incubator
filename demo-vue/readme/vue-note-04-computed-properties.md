# Vue笔记（4）-计算属性

1. 计算属性
    1. 动机和基本示例
        1. 模板内的表达式是非常便利的，但是很多时候需要完成一些更复杂的逻辑处理，这些逻辑放在模板中会使得模板难以维护
        2. 基本示例
            1. 代码
            ```html
            <div id="example">
                <p>Original message: "{{ message }}"</p>
                <p>Computed reversed message: "{{ reversedMessage }}"</p>
            </div>
            ```
            ```javascript
            var vm = new Vue({
                el: '#example',
                data: {
                    message: 'Hello'
                },
                computed: {
                    reversedMessage: function () {
                        // `this`指向当前实例
                        return this.message.split('').reverse().join('')
                    }
                }
            });
            ```
            2. 上述模板中，```reversedMessage```被直接调用，返回的结果被模板渲染。```reversedMessage```中的this指向的是当前实例，因此可以直接访问到```message```
    2. 计算缓存vs方法
        1. 之前用到的```methods```方法可以实现同样的效果，然而如果将```reversedMesssage```放在```computed```中，函数计算的结果会被保存并放到缓存中，只有该计算方法锁依赖的数据发生改变时，才会重新求值。这意味着只要```message```只要没有发生变化，我们就可以从缓存中直接拿到```reversedMessage```的值，而不必再次执行函数
        2. 注意只有当依赖数据发生改变时才会更新缓存，也就是说，下面的值再组件创建之后就不会再发生改变
        ```javascript
        computed: {
            now() {
                return Date.now();
            }
        }
        ```
    3. 计算属性vs观察属性。```watch```也能实现上述效果，但是使用```watch```实现的话就一定要在```data```中预设一个用于保存计算结果的属性，但很多时候这种属性并不是组件真正的基本属性，而是可以通过基本属性计算得到的结果值，比如一个人有姓（基本属性）和名（基本属性），所以全名（计算值）可以通过姓和名计算得到，而并不需要一个额外的属性来保存它，所以```computed```通常用于计算和保存一些可以通过组件的必须属性或数据计算得到的数据
    4. 计算setter
        1. 计算属性默认只提供一个getter，我们也可以为其提供一个setter，setter中通过修改getter所依赖的基本属性的值来改变getter的值
        2. 代码
        ```javascript
        computed: {
            fullName: {
                get() {
                    return this.firstName + this.lastName;
                },
                set(newValue) {
                    var names = newValue.split(' ');
                    this.firstName = names[0];
                    this.lastName = names[names.length - 1];
                }
            }
        }
        ```
2. 观察watchers，```watch```属性适合处理异步操作或者资源开销比较大的逻辑
3. 总结，目前为止已经用到过的设置方法的属性，要掌握它们之间的区别，以及了解各自适用的场景
    1. ```filters```，用于处理mustache语法和v-bind中的值，配合管道符一起使用
    2. ```computed```，保存一些需要可以通过组件的基本属性计算得到的数据
    3. ```methods```，一般的处理逻辑方法，处理事件响应的逻辑等
    4. ```watch```，监听模型改变时用，处理一步操作或者资源开销比较大的逻辑