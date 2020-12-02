registerPaint(
  'connections',
  class {
    static get inputProperties() {
      return [
        '--connections-particleColor',
        '--connections-lineColor',
        '--connections-particleAmount',
        '--connections-defaultRadius',
        '--connections-variantRadius',
        '--connections-linkRadius'
      ]
    }

    hexToRgb(hex) {
      let colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return colors
        ? [
            parseInt(colors[1], 16),
            parseInt(colors[2], 16),
            parseInt(colors[3], 16)
          ]
        : null
    }

    parseProps(props) {
      return [
        '--connections-particleColor',
        '--connections-lineColor',
        '--connections-particleAmount',
        '--connections-defaultRadius',
        '--connections-variantRadius',
        '--connections-linkRadius'
      ].map(
        prop =>
          props
            .get(prop)
            .toString()
            .trim() || undefined
      )
    }

    checkDistance(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    }

    paint(ctx, geometry, props) {
      const {width: w, height: h} = geometry
      const [
        particleColor = 'rgb(74,74,74)',
        lineColor = 'rgb(76,76,76)',
        particleAmount = (w * h) / 1000,
        defaultRadius = 1.5,
        variantRadius = 3,
        linkRadius = 80
      ] = this.parseProps(props)

      let particles = []
      const isHexColor = /^#([0-9A-F]{3}){1,2}$/i.test(lineColor)
      const [r, g, b] = isHexColor
        ? this.hexToRgb(lineColor)
        : lineColor.match(/\d+/g)

      const particle = (x, y) => {
        let radius = +defaultRadius + Math.random() * +variantRadius
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()
        return {x, y}
      }

      const linkPoints = point => {
        for (let i = 0; i < particleAmount; i++) {
          let distance = this.checkDistance(
            point.x,
            point.y,
            particles[i].x,
            particles[i].y
          )
          let opacity = 1 - distance / linkRadius
          if (opacity > 0) {
            ctx.lineWidth = 0.5
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(particles[i].x, particles[i].y)
            ctx.closePath()
            ctx.stroke()
          }
        }
      }

      for (let i = 0; i < particleAmount; i++) {
        let x = Math.round(Math.random() * w)
        let y = Math.round(Math.random() * h)
        particles.push(particle(x, y))
      }

      for (let i = 0; i < particleAmount; i++) {
        linkPoints(particles[i])
      }
    }
  }
)
