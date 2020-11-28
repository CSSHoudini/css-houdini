const LINES_PROPS = [
  '--lines-colors',
  '--lines-widths',
  '--lines-gap',
  '--lines-rotate'
]

// Convert from degrees to radians.
const degreesToRadians = degrees => {
  return (degrees * Math.PI) / 180
}

// eslint-disable-next-line
registerPaint(
  'lines',
  class {
    static get inputProperties() {
      return LINES_PROPS
    }

    parseProps(props) {
      return LINES_PROPS.map(
        prop =>
          props
            .get(prop)
            .toString()
            .trim() || undefined
      )
    }

    paint(ctx, geometry, props) {
      const {width: w, height: h} = geometry
      const [
        colors = '#123456',
        widths = 1,
        gap = 8,
        rotate = 0
      ] = this.parseProps(props)

      const saveArea = Math.floor(Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)))
      const colorLines = colors.split(',').map(color => color.trim())
      const maxColors = colorLines.length
      let indexColor = 0

      const widthLines = widths.split(',').map(width => width.trim())
      const maxLines = widthLines.length
      let indexLine = 0

      // const gapLines = gaps.split(',').map(gap => gap.trim())
      // const sumGaps = gapLines.reduce((a, b) => a + b, 0)
      // const maxGaps = gapLines.length
      // let indexGap = 0

      ctx.rotate((rotate * Math.PI) / 180)
      // ctx.rotate(degreesToRadians(rotate))
      for (let i = 0; i < saveArea; i++) {
        ctx.beginPath()

        // const gap = gapLines[indexGap]
        // indexGap >= maxGaps - 1 ? (indexGap = 0) : indexGap++
        // console.log({gap})

        ctx.moveTo(0 - saveArea, -saveArea + i * gap)
        ctx.lineTo(w + saveArea, -saveArea + i * gap)

        ctx.lineWidth = widthLines[indexLine]
        indexLine >= maxLines - 1 ? (indexLine = 0) : indexLine++

        ctx.strokeStyle = colorLines[indexColor]
        indexColor >= maxColors - 1 ? (indexColor = 0) : indexColor++

        ctx.stroke()
      }
    }
  }
)
