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

