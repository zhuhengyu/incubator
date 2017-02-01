# JavaScript面试题整理

#### 1.typeof bar === 'object'会有什么潜在问题？如何避免这个潜在问题？

如果```bar```确实是一个普通的对象类型，那```typeof bar === 'object'```会返回```true```，然而JavaScript中，但如果上面的```bar```是数组或者```null```，那上面的等式也是成立的。一种可行的做法是```Object.prototype.toString.apply(bar) === '[object Object]'```。注意这里不能直接调用```bar.toString()```，而是转换一下，使用上面的方式，因为如果当```bar```是```null```的时候将会有编译错误。

```javascript
const foo = {};
const bar = [];
const baz = null;

console.log(Object.prototype.toString.apply(foo)); // [object Object]
console.log(Object.prototype.toString.apply(bar)); // [object Array]
console.log(Object.prototype.toString.apply(baz)); // [object Null]
```

#### 2.下面的代码将会输出什么？为什么？

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

这道题考察的是**hoisting（变量提升）**，熟悉```var```的同学应该知道，使用```var```定义的变量将会被提升到作用域的最前面。上述代码等同于：

```javascript
(function(){
  b = 3;
  var a = b;
})();

// ...
```

注意这里，```b```实际上是一个全局变量，所以b的作用范围明显能在任何地方呗访问到（如果没有被子作用域覆盖掉的话）。所以输出的结果，第一行是```false```，第二行是```true```。

>注意，实际编码过程中不要这样声明变量，应该一次声明占一行，此外不推荐使用全局变量，比如上述代码，如果在严格模式下是会报错的。熟悉ES6的同学也应该尽量使用let和const来声明变量或者常量（不存在变量提升）。

#### 3.下面的代码将会输出什么？为什么？

```javascript
var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function() {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    }());
  }
};
myObject.func();
```

这道题考察的是对JavaScript中```this```的理解。```this```有很多种情况，但一般情况下，它指向当前对象，比如上述代码中，调用```func```的是```myObject```，所以这里的```this```就是```myObject```，```this.foo```就是```"bar"```了。```self```在被传入IIFE（立即调用函数表达式）中已经被赋值为IIFE外面的```this```，即```myObject```，因此```self.foo```也是```"bar"```。**而所有IIFE中的```this```，不是```undefined```（严格模式下），就是```global```（非严格模式下）**，因此这里的它指向```global```，而```global.foo```是```undefined```。

输出结果如下。

```javascript
// outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar
```









