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

### 第5章第7节

`app.json`文件，`orientation`属性可以控制屏幕竖向或横向

|orientation| description |
|:----:|:----:|
|default| 默认值，可以旋转|
|portrait| 竖向 |
|landscape| 横向 |

### 第5章第8节

KeyboardAvoidingView组件 keyboardVerticalOffset属性，控制键盘的垂直偏移。

### 第5章第9节

你从尺寸中得到的任何东西都应该考虑方向的变化，当方向改变时应该重新计算

```js
useEffect(() => {
    const subscription = Dimensions.addEventListener("change", () => {
        setButtonWidth(Dimensions.get("window").width / 4);
    });
    return () => subscription.remove();
});
```
如果不将这段代码放在useEffect中，总是添加一个新的事件监听器是不合理的。

`useEffect`在组件重新渲染时执行的代码，清除旧的监听器，设置一个新的监听器。总是只有一个正在运行的监听器。

上面的写法来自最新的官方文档，但是不稳定，下面的废弃的写法可正常运行：

```js
useEffect(() => {
    const updateLayout = () => {
        setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);
    return Dimensions.removeEventListener("change", updateLayout);
});
```

### 第5章第15节

根据不同的平台加载特定的文件

文件命名：

```js

MainButton.ios.js // ios 加载

MainButton.android.js // android加载
```

文件引入：

```js
import MainButton from "./components/MainButton";
```

以下引入是错误的：

```js
import MainButton from "./components/MainButton.ios";

// 或者

import MainButton from "./components/MainButton.android";

```

