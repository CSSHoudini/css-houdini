# CSS Houdini Lines

A CSS Houdini Worklet to show connected nodes.

![CSS Houdini Lines](https://rawcdn.githack.com/CSSHoudini/css-houdini/37db32100d05d0231d0adb11b128229a8b737d55/src/lines/assets/lines.png)

## Getting started

### 1. Load the worklet

Using CDN is the easiest way to add the library:

```js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('https://rawcdn.githack.com/CSSHoudini/css-houdini/74a3e2482adf18b41882de48f601a5fc18fd9d5c/src/lines/dist/lines.js');
}
```

Or, download the latest [lines Worklet](https://github.com/CSSHoudini/css-houdini/tree/main/src/lines/dist) and import it to your web page:

```js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('path/to/lines.js');
}
```

#### You can use the polyfill

To add support for all moder browsers, you can load the worklet with [css-paint-polyfill](https://github.com/GoogleChromeLabs/css-paint-polyfill) fallback.

```html
<script>
  ;(async function() {
    if (CSS['paintWorklet'] === undefined)
      await import('https://unpkg.com/css-paint-polyfill')

    CSS.paintWorklet.addModule('./lines.js')
  })()
</script>
```

### 3. Ready to use it in your CSS!

To use **Lines** worlet you need define some custom properties with values and add the value `paint(lines)` on `background-image` property.

> The worklet has default values if you don't define these

```css
.element {
  --lines-colors: #f94144, #f3722c, #f8961e, #f9844a;
  --lines-widths: 10, 2, 3, 8;
  --lines-gaps: 20, 4, 3, 7;
  --lines-rotate: 0; /* In degrees */

  background-image: paint(lines);
}
```

| property | description | default value |
| -------- | ----------- | ------------- |
| --lines-colors | **Color lines**, you can define one or more hexadecimal colors comma separated | `#71a7ee, #7940c1` |
| --lines-widths | **Width lines**, you can define one or more line widths comma separated | `6, 2` |
| --lines-gaps | **Gap lines**, you can define one or more gaps comma separated | `8` |
| --lines-rotate | **Rotation lines**, with an interger | `0` |

## License

MIT License

Copyright (c) 2020 CSS Houdini
