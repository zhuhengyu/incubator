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

这道题考察的是对JavaScript中```this```的理解。```this```有很多种情况，但一般情况下，它指向当前对象，比如上述代码中，调用```func```的是```myObject```，所以这里的```this```就是```myObject```，```this.foo```就是```"bar"```了。```self```在被传入IIFE（立即调用函数表达式）中之前，就已经被赋值为外面的```this```了，因此```self.foo```也是```"bar"```。**而所有IIFE中的```this```，不是```undefined```（严格模式下），就是```global```（非严格模式下）**，因此这里的它指向```global```，而```global.foo```是```undefined```。

输出结果如下。

```javascript
// outer func:  this.foo = bar
// outer func:  self.foo = bar
// inner func:  this.foo = undefined
// inner func:  self.foo = bar
```

#### 4.将一整个JavaScript代码段包进一个函数块中有什么原因或者意义？

这里又是问的关于IIFE的问题。

IIFE就是创建了一个闭包，并且立即执行，IIFE是一个表达式，并且是立即执行的。

它的主要作用是创建一个私有命名空间，避免和其他模块和库产生明明冲突，也因此其在开发各种模块和库的时候经常用到。

#### 5.在JavaScript文件开头使用'use strict'有什么好处或者意义？

JavaScript中的```'use strict'```表示严格模式，由于一些历史原因，JavaScript在ES3时代有一些不合理的设计，在ES5中当然不能直接禁止这些不合理设计的存在，因为必须要考虑版本兼容性问题，于是在ES5中推出了严格模式来避免这些设计的使用。

一般而言使用严格模式都是一种好的实践。

1. 严格模式下变量必须先声明再使用，不存在默认给```global```定义属性；
2. 对象属性禁止重复定义；
3. 限定```this```，在严格模式下，嵌套函数的```this```只指向```undefined```（没有使用```bind()```或其他函数绑定的情况下）；
4. ```eval()```函数变得更安全；
5. 错误使用```delete```关键字时报错等等。

严格模式可以放在全局环境下（文件开始处），也可以放在某个函数的开始处。

```javascript
function foo() {
  'use strict'
  // ...
}
```

>应该避免eval()函数的使用，除非你非常清楚的知道你在干什么，并且除了eval()以外没有更好的做法。

#### 6.下面两段代码是否输出同样内容？

```javascript
function foo1() {
  return {
    bar: 'hello'
  };
}
```

```javascript
function foo2() {
  return
  {
    bar: 'hello'
  };
}
```

结果是第一段代码返回了正确的对象，第二段代码返回的是```undefined```。

这是JavaScript的和分号的一个坑，第一段代码很好解释，第二段代码实际上等价于：

```javascript
function foo2() {
  return ;
  {
    bar: 'hello'
  };
}
```

>JavaScript中的函数、对象的左大括号的位置请永远放在和函数名、对象名同一行的位置（1TBS方式，即本例中的第一种），而不应该另起一行（Allman方式，常用于C语言中的对其方式，即本例中的第二种）。具体可以参考：[Indent Style](https://en.wikipedia.org/wiki/Indent_style#Placement_of_braces)。

>请永远使用分号。JavaScript本身是一个规则比较弱的语言，如果编码不得当而自己对JavaScript理解又不深，经常会出现这种坑。可以借助ESLint等工具强制检查自己的代码。

#### 7.NaN是什么？如何可靠的检测一个变量是否是NaN？

JavaScript中的```NaN```是Not a Number的缩写，但实际上它又属于数字类型。

```javascript
console.log(typeof NaN); // number
```

它用于一些特殊情况，比如开方一个负数，或者转换一个无法被转换为数字的字符串。

```javascript
console.log(Math.sqrt(-1)); //NaN
console.log(+'foo'); // NaN
```

JavaScript中提供了全局函数```isNaN()```来判断一个变量是否是NaN，但是并不是很可靠。

```javascript
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true
```

如果想要更精确的结果，应该用ES6中的```Number.isNaN()```方法。

```javascript
Number.isNaN(NaN); // true
Number.isNaN(undefined); // false
Number.isNaN({}); // false
```

或者```NaN```自身不等于自身这一个特性。

```javascript
const foo = NaN;
console.log(foo === foo);
```