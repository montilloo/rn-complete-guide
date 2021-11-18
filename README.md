### 第4章第19节

`useRef`可以确保在下次渲染周期，之前的值可以被缓存。

### 第4章第20节

`useEffect`允许你运行副作用，或者一般来说，允许你在每个渲染周期后运行逻辑。

```js
useEffect(() => {
	return () => {
		effect
	};
}, [input]);

```
默认情况下，useEffect中第一个参数在该组件的每个渲染周期之后运行。所以每次它被渲染了，这个函数被执行了。不是之前，不是同时，而是之后。

### 第4章第22节

如何加载字体：
https://docs.expo.dev/guides/using-custom-fonts/

### 第4章第27节

对于从网络上加载的图片，使用`<Image />`组件时，务必设置图像的宽度和高度。第一次加载后，图像将被缓存，后续使用几乎是瞬时的。

### 第4章第28节

这就是React Native的一个重要区别，对于文本组件，如果添加了样式，样式会向下传递到嵌套的文本组件。因此在父文本组件定义的任何样式，都会被嵌套的子文本组件自动接收。
对于React Native中的文本组件，还有一个额外的重要行为，那就是它没有使用Flexbox, View使用Flexbox 

文本之间添加空格的写法：`{' '}`
