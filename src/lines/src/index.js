/* global registerPaint */
registerPaint(
  'lines',
  class {
    static get inputProperties() {
      return [
        '--lines-colors',
        '--lines-widths',
        '--lines-gaps',
        '--lines-rotate'
      ]
    }

    parseProps(props) {
      return [
        '--lines-colors',
        '--lines-widths',
        '--lines-gaps',
        '--lines-rotate'
      ].map(
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
        colors = '#71a7ee, #7940c1',
        widths = '6, 2',
        gaps = '8',
        rotate = 0
      ] = this.parseProps(props)

      const sqrtArea = Math.floor(Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)))
      const saveArea = sqrtArea * 2
      const colorLines = colors.split(',').map(color => color)
      const maxColors = colorLines.length
      let indexColor = 0

      const widthLines = widths.split(',').map(width => +width)
      const maxWidth = Math.min(...widthLines)
      const maxLines = widthLines.length
      let indexLine = 0

      const gapLines = gaps.split(',').map(gap => +gap)
      const maxGaps = gapLines.length
      let indexGap = 0

      if (rotate !== 0) {
        ctx.rotate((rotate * Math.PI) / 180)
        ctx.translate(-saveArea, -saveArea)
      }

      let posY = 0

      for (let i = 0; i < saveArea / maxWidth; i++) {
        const lineGap = +widthLines[indexLine] + gapLines[indexGap]
        ctx.fillStyle = colorLines[indexColor]

        ctx.fillRect(
          -saveArea * 0.5,
          posY,
          saveArea * 2,
          +widthLines[indexLine]
        )

        indexLine >= maxLines - 1 ? (indexLine = 0) : indexLine++
        indexGap >= maxGaps - 1 ? (indexGap = 0) : indexGap++
        indexColor >= maxColors - 1 ? (indexColor = 0) : indexColor++

        posY += lineGap
      }
    }
  }
)
