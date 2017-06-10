# Vue笔记（9）-表单控件绑定

1. 基础用法
    1. 文本
    ```html
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{message}}</p>
    ```
    2. 多行文本
    ```html
    <textarea v-model="message">
    <p style="white-space: pre">Message is: {{message}}</p>
    ```
    3. 复选框
    ```html
    <p>{{msg3}}</p>
    <input type="checkbox" v-model="msg3" value="v1">
    <input type="checkbox" v-model="msg3" value="v2">
    <input type="checkbox" v-model="msg3" value="v3">
    ```
    4. 单选按钮
    ```html
    <p>{{msg4}}</p>
    <input type="radio" v-model="msg4" value="v1">
    <input type="radio" v-model="msg4" value="v2">
    <input type="radio" v-model="msg4" value="v3">
    ```
    5. 选择列表
    ```html
    <p>{{msg5}}</p>
    <select v-model="msg5" multiple>
      <option>v1</option>
      <option>v2</option>
      <option>v3</option>
    </select>
    ```
2. 绑定值，有时我们想绑定```value```到```Vue```实例的一个动态属性上，这时可以配合```v-bind```一起使用
    1. 复选框，注意```check-box```绑定的是```true-value```和```false-value```两个值
    ```html
    <input type="checkbox" v-model="toggle" v-bind:true-value="a" v-bind:false-value="b">
    ```
    2. 单选框
    ```html
    <input type="radio" v-model="pick" v-bind:value="a">
    ```
    3. 选择列表
    ```html
    <select v-model="selected">
        <option v-bind:value="{number: 123}">123</option>
    </select>
    ```
3. 修饰符
    1. ```.lazy```，使在```change```事件中同步
    2. ```.number```，默认情况下，获取到的输入的值都是字符串类型，如果我们需要获取数字，则需要手动转换一下类型，```.number```修饰符可以直接获取数字类型的返回值
    3. ```.trim```，自动取出用户输入的字符串的首尾空格
4. ```v-model```与组件，如果默认的```input```类型不够用，Vue还允许自定义```input```，我们后续会接触到