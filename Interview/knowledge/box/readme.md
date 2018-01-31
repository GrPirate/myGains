# CSS盒模型

**谈谈你对CSS盒模型的认识**

## 1.基本概念：

* 标准模型
* IE模型

## 2.标准模型和IE模型的区别

![](content-box.jpg)

![](border-box.jpg)

## 3.CSS如何设置这两种模型

标准模型
```css
.box{
    box-sizing: content-box;
}
```

IE模型
```css
.box{
    box-sizing: border-box;
}
```

## 4.js如何设置获取盒模型对应的宽度

**JS获取盒模型对应宽、高的几种方法：**
1. dom.style.width/height;   只能获取内联样式的宽高。
2. dom.currentStyle.width/height;   只能在IE浏览器中获取。
3. window.getComputedStyle(dom).width/height;   兼容IE和chrome。
4. dom.getBoundingClientRect().width/height;   根据窗口视图来获取宽高。

## 5.BFC(边距重叠解决方案)

**BFC的基本概念：** 块级格式化上下文；

**BFC的原理：BFC的渲染规则如下**

1. 在BFC这个元素的垂直方向的边距会发生重叠。
2. BFC的区域不会与浮动元素的box重叠。
3. BFC在页面上是一个独立的容器，外面的元素不会影响里面的元素，里面的元素也不会影响外面的元素。
4. 计算BFC高度时，浮动元素也会参与计算

**如何创建BFC**

1. float不为none。
2. position不为static或者relative。
3. display为inline-block或者是table相关的。
4. overflow不为visible。