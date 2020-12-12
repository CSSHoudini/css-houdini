/* global registerPaint */
registerPaint(
  '[worklet_name]',
  class {
    static get inputProperties() {
      return []
    }

    parseProps(props) {
      return [].map(
        prop =>
          props
            .get(prop)
            .toString()
            .trim() || undefined
      )
    }

    paint(ctx, geometry, props) {
      const {width: w, height: h} = geometry
    }
  }
)
