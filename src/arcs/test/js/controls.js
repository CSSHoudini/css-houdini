/* global Tweakpane */
const element = document.querySelector('.lines')
const PARAMS = {
  colors:
    '#f94144, #f3722c, #f8961e, #f9844a, #f9c74f, #90be6d, #43aa8b, #4d908e, #577590, #277da1',
  widths: '10, 2, 3, 8',
  gaps: '20, 4, 3, 7',
  rotate: 0
}

const pane = new Tweakpane()
const f1 = pane.addFolder({title: 'Lines Parameters'})
const f2 = pane.addFolder({title: 'Information'})
f2.expanded = false

f1.addInput(PARAMS, 'colors', {
  label: 'Line colors',
  options: {
    Palette1:
      '#f94144, #f3722c, #f8961e, #f9844a, #f9c74f, #90be6d, #43aa8b, #4d908e, #577590, #277da1',
    Palette2: '#2a9d8f, #e76f51',
    Palette3: '#583d72, #9f5f80, #ffba93, #ff8e71',
    Palette4: '#fc00ff, #ff67e2, #ff95f9, #bd42ff, #6100ff'
  }
}).on('change', value => {
  element.style.setProperty('--lines-colors', value)
})

f1.addInput(PARAMS, 'widths', {
  label: 'Line widths',
  options: {
    '10, 2, 3, 8': '10, 2, 3, 8',
    '10': '10',
    '13, 2, 8, 4, 1': '13, 2, 8, 4, 1',
    '35, 12, 5': '35, 12, 5'
  }
}).on('change', value => {
  element.style.setProperty('--lines-widths', value)
})

f1.addInput(PARAMS, 'gaps', {
  label: 'Line gaps',
  options: {
    '20, 4, 3, 7': '20, 4, 3, 7',
    '8': '8',
    '5, 3': '5, 3',
    '6, 7, 1, 3': '6, 7, 1, 3'
  }
}).on('change', value => {
  element.style.setProperty('--lines-gaps', value)
})

f1.addInput(PARAMS, 'rotate', {
  label: 'Rotation (Degrees)',
  step: 1,
  min: 0,
  max: 360
}).on('change', value => {
  element.style.setProperty('--lines-rotate', value)
})

f2.addButton({title: 'Source Code'}).on('click', () =>
  window.open('https://github.com/CSSHoudini/css-houdini', 'CSS Houdini Lines')
)
f2.addButton({title: '@csshoudini'}).on('click', () =>
  window.open('https://twitter.com/csshoudini', 'CSS Houdini')
)
