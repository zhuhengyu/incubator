# Vue笔记（5）-样式绑定

1. 绑定class
    1. 对象语法
        1. 方式1，以对象的形式设置```class```，下例中，```isActive```是组件的属性，如果为真则```div```有```active```类，否则没有
        ```html
        <div v-bind:class="{active: isActive}"></div>
        ```
        2. 方式2，```v-bind:class```指令可以与普通的```class```属性共存，下例中的```static```类有效的，此外，设置的对象可以包含多个属性
        ```html
        <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
        ```
        3. 方式3，同样，我们也可以直接绑定一个对象
        ```html
        <div v-bind:class="classObject"></div>
        ```
        ```javascript
        data: {
            classObject: {
                active: true,
                'text-danger': false
            }
        }
        ```
        4. 方式4，我们还可以绑定一个计算属性
        ```javascript
        data: {
            isActive: true,
            error: null
        },
        computed: {
            classObject: function () {
                return {
                    active: this.isActive && !this.error,
                    'text-danger': this.error && this.error.type === 'fatal',
                }
            }
        }
        ```
    2. 数组语法
        1. 方式1，以数组的方式设置类
        ```html
        <div v-bind:class="[activeClass, errorClass]">
        ```
        ```javascript
        data: {
            activeClass: 'active',
            errorClass: 'text-danger'
        }
        ```
        2. 方式2，数组中也可以使用三元表达式
        ```html
        <div v-bind:class="[isActive ? activeClass : '', errorClass]">
        ```
        3. 方式3，数组中也可以使用对象
        ```html
        <div v-bind:class="[{ active: isActive }, errorClass]">
        ```
    3. 组件添加类
        1. 当在一个定制的组件上直接设置```class```属性时，这些类会被设置到组件的根元素上，这些类不会覆盖根元素上的类
        2. 代码
        ```html
        <my-component class="baz boo"></my-component>
        ```
        ```javascript
        Vue.component('my-component', {
            template: '<p class="foo bar">Hi</p>'
        })
        ```
2. 绑定内联样式
    1. 对象语法
        1. 方式1，通过对象分别设置内联样式的属性
        ```html
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
        ```
        ```javascript
        data: {
            activeColor: 'red',
            fontSize: 30
        }
        2. 方式2，直接设置对象
        ```html
        <div v-bind:style="styleObject"></div>
        ```
        ```javascript
        data: {
            styleObject: {
                color: 'red',
                fontSize: '13px'
            }
        }
        ```
    2. 数组语法
        1. 方式1，使用包含多个样式对象的始祖
        ```html
        <div v-bind:style="[baseStyles, overridingStyles]">
        ```