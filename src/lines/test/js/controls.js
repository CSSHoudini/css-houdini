const element = document.querySelector('.lines')
const PARAMS = {
  particleColor: '',
  lineColor: {r: 150, g: 180, b: 200}
}

const pane = new Tweakpane()
const f1 = pane.addFolder({title: 'Lines Parameters'})
const f2 = pane.addFolder({title: 'Information'})
f2.expanded = false

f1.addInput(PARAMS, 'particleColor', {label: 'Particle Color'}).on(
  'change',
  value => {
    const {r, g, b} = value
    const color = `rgb(${r},${g},${b})`
    element.style.setProperty('--lines-particleColor', color)
  }
)
f1.addInput(PARAMS, 'lineColor', {label: 'Line Color'}).on('change', value => {
  const {r, g, b} = value
  const color = `rgb(${r},${g},${b})`
  element.style.setProperty('--lines-lineColor', color)
})
f1.addInput(PARAMS, 'particleAmount', {
  label: 'Amount',
  step: 5,
  min: 10,
  max: 400
}).on('change', value => {
  element.style.setProperty('--lines-particleAmount', value)
})
f1.addInput(PARAMS, 'defaultRadius', {
  label: 'Radius',
  step: 0.5,
  min: 1,
  max: 5
}).on('change', value => {
  element.style.setProperty('--lines-defaultRadius', value)
})
f1.addInput(PARAMS, 'variantRadius', {
  label: 'Variant Radius',
  step: 0.5,
  min: 1,
  max: 4
}).on('change', value => {
  element.style.setProperty('--lines-variantRadius', value)
})
f1.addInput(PARAMS, 'linkRadius', {
  label: 'Link Radius',
  step: 1,
  min: 10,
  max: 200
}).on('change', value => {
  element.style.setProperty('--lines-linkRadius', value)
})

/* ------------------------------------------------- */

f2.addButton({title: 'Source Code'}).on('click', () =>
  window.open('https://github.com/CSSHoudini/css-houdini', 'CSS Houdini lines')
)
f2.addButton({title: '@csshoudini'}).on('click', () =>
  window.open('https://twitter.com/csshoudini', 'CSS Houdini')
)
