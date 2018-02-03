# 类型转换

## 1、数据类型

- 原始类型：

    Boolean    Null    Undefined    Number    String    Symbol

- 对象：

    Object

## 2、显示类型转换

显示调用以下三种函数的方式来完成类型转换

- Number函数
- String函数
- Boolean函数

### Number函数

原始类型转换：
    **数值：**转换后还是原来的值
    **字符串：**如果可以被解析为数值，则转换为相应的数值，否则得到NaN，空字符串转换为0
    **布尔值：**true转换为1，false转换为0
    **undefined：**转成NaN
    **null：**转成0

对象类型转换

    先调用对象自身的valueOf方法，如果该方法返回原始类型的值（数值、字符串、布尔值），则直接使用Number方法，不再继续后续步骤

    如果valueOf方法返回复合类型的值，再调用对象自身的toString方法，如果toString方法返回原始类型的值，则对该值使用Number方法，不再进行后续步骤。

    如果toString方法返回的是复合类型的值，则报错


### String函数

原始类型转换：
    **数值：**转为相应的字符串
    **字符串：**原值
    **布尔值：**true转为"true",false转为"false"
    **undefined：**转为"undefined"
    **null：**转为"null"

对象类型转换

    先调用对象自身的toString方法，如果该方法返回原始类型的值（数值、字符串、布尔值），则直接使用String方法，不再继续后续步骤

    如果toString方法返回复合类型的值，再调用对象自身的valueOf方法，如果valueOf方法返回原始类型的值，则对该值使用String方法，不再进行后续步骤。

    如果valueOf方法返回的是复合类型的值，则报错


### Boolean函数

原始类型转换
    undefined, null, -0, +0, NaN, ''（空字符串）
以上类型转为false，其他值都转为true


## 3、隐式类型转换

程序自动进行的转换

- 四则运算
- 判断语句
- Native调用

常见题目：
    [] + []
    [] + {}
    {} + []
    {} + {}
    true + true
    1 + { a: 1 }


## typeof表

Type|Result
-|-
undefined|"undefined"
Null|"object"
Boolean|"boolean"
Number|"number"
String|"string"
Symbol|"symbol"
Function object|"function"
Any other object|"object"
