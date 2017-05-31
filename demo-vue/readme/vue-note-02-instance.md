# Vue笔记（2）-Vue实例

1. 属性和方法
    1. 每个Vue实例都代理了```data```对象中的所有属性
    ```javascript
    const data = {
        a: 1
    };
    const vm = new Vue({
        data: data
    });
    vm.a = 2
    console.log(data.a); // 2
    data.a = 3
    console.log(vm.a); //3
    ```
    2. 注意只有这些被代理的属性是响应式的，如果你**在一个实例被创建后再添加新的属性，该属性的修改不会触发视图的更新**
    3. 除了数据属性之外，Vue实例还暴露了一些实用的属性和方法，这些属性和方法都加了```$```前缀（以此区分代理数据属性）
    ```javascript
    const data = {
        a: 1
    };
    const vm = new Vue({
        el: '#example',
        data: data
    });
    console.log(vm.$data === data); // true
    console.log(vm.$el === document.getElementById('example')); // true
    vm.$watch('a', function(newVal, oldVal) {
        // 这个回调函数会在vm.a改变时被调用
    });
    ```
2. 实例生命周期钩子
    1. 代码，```created```钩子会在实例被创建之后执行
    ```javascript
    const vm = new Vue({
        data: {
            a: 1
        },
        created() {
            console.log(`a is ${this.a}`);
        }
    });
    ```
    2. 每一个Vue实例在创建会后都会通过一系列的初始化步骤，例如，Vue需要设置数据观察，编译模板，挂在实例到DOM，以及在数据改变的时候更新DOM。随着这些步骤的进行，一些生命周期钩子会被调用，这使得我们能执行一些自定义逻辑
    3. 除了```created```钩子之外，还有```mounted```，```updated```，```destroyed```等钩子。
3. 生命周期图
    ![](./images/lifecycle.png)