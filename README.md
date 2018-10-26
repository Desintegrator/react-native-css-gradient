# CSS Gradient for LinearGradient

CSS background image for React-Native.
Supported backgrounds:
- [linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)
- [repeating-linear-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient)


![image](https://github.com/catalinmiron/react-native-css-gradient/raw/master/screenshots/gif.gif)
<br/>
<img src="https://github.com/catalinmiron/react-native-css-gradient/raw/master/screenshots/grad1.png" width="400">
<br/>
<img src="https://github.com/catalinmiron/react-native-css-gradient/raw/master/screenshots/grad2.png" width="400">
<br/>
<img src="https://github.com/catalinmiron/react-native-css-gradient/raw/master/screenshots/grad3.png" width="400">
<br/>
<img src="https://github.com/catalinmiron/react-native-css-gradient/raw/master/screenshots/grad4.png" width="400">
<br/>
<img src="https://github.com/catalinmiron/react-native-css-gradient/raw/master/screenshots/grad5.png" width="400">
<br/>
<img src="https://github.com/catalinmiron/react-native-css-gradient/raw/master/screenshots/grad6.png" width="400">


### Usage

```
import Gradient from 'react-native-css-gradient`;

render() {
    const gradient = `linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%), repeating-linear-gradient(-115deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px), repeating-linear-gradient(115deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`;

    return <Gradient gradient={gradient} style={yourStyle}>
}
```

TODO: Add fallback to `react-native-linear-gradient` package in case when Expo is missing.

### Props

|Prop|Details|
|---|---|
|gradient|CSS Gradient (linear and repeating) are working for the moment|
|style|default styles (**Note, if you're going to use repeating gradient you have to specify the width and height**)|
|children|-|


### About

If you have questions please don't hesistate to contact me on [Twitter](http://twitter.com/mironcatalin).
