# CSS Houdini [Worklet Name]

A CSS Houdini Worklet to show connected nodes.

![CSS Houdini [Worklet Name]]([SCREENSHOT])

## Getting started

### 1. Load the worklet

Using CDN is the easiest way to add the library:

```js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('[URL]');
}
```

Or, download the latest [Worklet name]([URL]) and import it to your web page:

```js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('[LOCAL_PATH]');
}
```

#### You can use the polyfill

To add support for all moder browsers, you can load the worklet with [css-paint-polyfill](https://github.com/GoogleChromeLabs/css-paint-polyfill) fallback.

```html
<script>
  ;(async function() {
    if (CSS['paintWorklet'] === undefined)
      await import('https://unpkg.com/css-paint-polyfill')

    CSS.paintWorklet.addModule('./[file].js')
  })()
</script>
```

### 3. Ready to use it in your CSS!

To use **[Worklet Name]** worlet you need define some custom properties with values and add the value `paint([worklet_name])` on `background-image` property.

> The worklet has default values if you don't define these

```css
.element {
  /* CSS code */
}
```

| property | description | default value |
| -------- | ----------- | ------------- |
| --workletName |  |  |

## License

MIT License

Copyright (c) 2020 CSS Houdini
