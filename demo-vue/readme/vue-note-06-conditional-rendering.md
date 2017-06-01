# Vue笔记（6）-条件渲染

1. ```v-if```
    1. ```<template>```中```v-if```条件组
        1. ```v-if```的值如果为真，则该元素才会被渲染
        ```html
        <h1 v-if="of">Yes</h1>
        ```
        2. 如果我们需要切换多个元素，则需要用到```<template>```元素包装需要切换的元素
        ```html
        <template v-if="ok">
            <h1>Title></h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
        ```
    2. ```v-else```配合```v-if```一起使用
    ```html
    <div v-if="Math.random() > .5">Now you see me</div>
    <div v-else>Now you can't</div>
    ```
    3. ```v-else-if```配合```v-if```一起使用
    ```html
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
    ```
    4. 用```key```管理可重复元素
        1. 代码
        ```html
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address">
        </template>
        ```
        2. Vue为了高效地渲染元素，通常会复用已有元素而不是从头开始渲染，这样做能能减少DOM的操作。上面的代码中，如果进行切换```loginType```，Vue不会删除```input```标签再重新建一个```input```标签，而是直接修改```input```标签中的```placeholder```属性
        3. 当然随之带来的问题是，如果我们在上面的```input```中输入值之后再切换，原来的值还在，这不是我们想要的，这个时候我们可以给两个```input```加一个```key```属性，告诉Vue这是两个不同的```input```，Vue就会当做两个```input```来处理
        ```html
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username-input">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" key="email-input">
        </template>
        ```
2. ```v-show```
    1. ```v-show```也是用来判断是否展示元素的指令，和```v-if```不同的是```v-show```只是简单地切换元素的css属性```display```。注意```v-show```不支持```<template>```，也不支持```v-else```
    2. 代码
    ```html
    <h1 v-show="ok">Hello!</h1>
    ```
3. ```v-if```vs```v-show```
    1. ```v-if```的条件如果是假，则不会渲染条件快（DOM中不存在相关标签）
    2. ```v-show```的条件就算是假，也会被渲染，只是css的```display```属性值会被设置为```none```
4. ```v-if```和```v-for```一起使用，两者一起使用的情况```v-for```的优先级更高，先处理```v-for```，从中取出的元素再被```v-if```处理