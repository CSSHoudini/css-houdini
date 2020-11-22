# CSS Houdini Connections

A CSS Houdini Worklet to show connected nodes.

![CSS Houdini Connections](https://github.com/CSSHoudini/css-houdini/blob/main/src/connections/assets/connections.png)

## Getting started

### 1. Load the worklet

Using CDN is the easiest way to add the library:

```js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('https://rawcdn.githack.com/CSSHoudini/css-houdini/6979b873e80f9120f52bd481fbdf2d4c60db6b19/src/connections/dist/connections.js');
}
```

Or, download the latest [Connections Worklet](https://github.com/CSSHoudini/css-houdini/tree/main/src/connections/dist) and import it to your web page:

```js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('path/to/connections.js');
}
```

#### You can use the polyfill

To add support for all moder browsers, you can load the worklet with [css-paint-polyfill](https://github.com/GoogleChromeLabs/css-paint-polyfill) fallback.

```html
<script>
  ;(async function() {
    if (CSS['paintWorklet'] === undefined)
      await import('https://unpkg.com/css-paint-polyfill')

    CSS.paintWorklet.addModule('./connections.js')
  })()
</script>
```

### 3. Ready to use it in your CSS!

To use **connections** worlet you need define some custom properties with values and add the value `paint(connections)` on `background-image` property.

> The worklet has default values if you don't define these

```css
.element {
  --connections-particleColor: rgb(150,180,200);
  --connections-lineColor: rgb(150,180,200);
  --connections-particleAmount: 40;
  --connections-defaultRadius: 2;
  --connections-variantRadius: 1;
  --connections-linkRadius: 60;

  background-image: paint(connections);
}
```

| property | description | default value |
| -------- | ----------- | ------------- |
| --connections-particleColor | Dot color | `rgb(74,74,74)` |
| --connections-lineColor | Line conections color | `rgb(76,76,76)` |
| --connections-particleAmount | Dots number to show on the element | `(w * h) / 1000` Calc of width * height divided to 1000  |
| --connections-defaultRadius | Dot radius | 1.5 |
| --connections-variantRadius | Dot radius variant | 3 |
| --connections-linkRadius | Minimum distance between dots to draw the line connection | 80 |

#### Important informaction

- The current worklet version needs that the values for `--connections-particleColor` and `--connections-lineColor` are **RGB Color** with format `rgb(150,180,200)`.
- If you define a huge values, you can see hundreds of lines in your element.

## License

MIT License

Copyright (c) 2020 CSS Houdini
