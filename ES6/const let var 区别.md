
##  作用域

const let 只在声明所在的块级作用域内有效

var声明过后是在全局范围内都有效

```javascript
{
  let a = 10;
  var b = 1;
  const c= 2
}

a // ReferenceError: a is not defined.
b // 1
c//ReferenceError: c is not defined.
```


## 不存在变量提升

`const` `let` 不存在变量提升 （**所声明的变量一定要在声明后再使用**）

`var` 存在变量提升


## 暂时性死区

如果区块中**存在**`let`和`const`命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域,**不受外部的影响** 。凡是在**声明之前就使用这些变量**，就会报错.

```javascript
var  tmp=404
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
```


## 不允许重复声明

`let`不允许在相同作用域内，重复声明同一个变量。

```javascript
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}
```

`const`声明一个**只读的常量**。一旦声明，**常量的值就不能改变**。所以`const`一旦声明变量，**就必须立即初始化**，不能留到以后赋值。

`const` 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量,不能改变

但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，`const`只能保证这个指针是固定的（即总是指向另一个固定的地址）,但是指向的数据结构是可以改变的

```javascript
const foo = {};

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象，就会报错
foo = {}; // TypeError: "foo" is read-only
```


## ES6 声明变量的六种方法

ES5 只有两种声明变量的方法：`var`命令和`function`命令。ES6 除了添加`let`和`const`命令，还有另外两种声明变量的方法：`import`命令和`class`命令。所以，ES6 一共有 6 种声明变量的方法。
