import {
  Viewer,
  PolygonHierarchy,
  Material,
  Cartesian3,
  PolygonGeometry,
  GeometryInstance,
  Primitive,
  MaterialAppearance
} from 'cesium'

class waterReservoir {
  primitive!: Primitive
  extrudedHeight: number
  degrees: Cartesian3[]
  viewer: Viewer
  id: string
  height: number
  constructor(viewer: Viewer, id: string, degrees: any[], extrudedHeight: number, height: number) {
    this.extrudedHeight = extrudedHeight
    this.degrees = degrees
    this.viewer = viewer
    this.id = id
    this.height = height
    this._drawPoly(degrees)
  }
  _drawPoly(degrees:Cartesian3[]) {
    let that = this
    const instance = new GeometryInstance({
      geometry: new PolygonGeometry({
        polygonHierarchy: new PolygonHierarchy(
          degrees.map((item) => new Cartesian3(item.x, item.y, item.z))
        ),
        // extrudedHeight: that.extrudedHeight
        height: that.height,
        extrudedHeight: that.extrudedHeight
      }),
      id: that.id
    })
    this.primitive = this.viewer.scene.primitives.add(
      new Primitive({
        geometryInstances: instance,
        appearance: new MaterialAppearance({
          material: Material.fromType('Color')
        }),
        releaseGeometryInstances: false
      })
    )
    this.primitive.appearance.material = new Material({
      fabric: {
        type: 'Water',
        uniforms: {
          normalMap: '/Img/water.jpg',
          frequency: 1000.0, // 控制波数的数字。
          animationSpeed: 0.09, // 控制水的动画速度的数字。
          amplitude: 10.0, // 控制水波振幅的数字。
          specularIntensity: 0.8 // 控制镜面反射强度的数字。
        }
      }
    })
  }
  update() {
    this.primitive && this.viewer.scene.primitives.remove(this.primitive)
    this._drawPoly(this.degrees)
  }
}
const createWater = (viewer: Viewer, id: string, degrees: number[], extrudedHeight: number) => {
  const instance = new GeometryInstance({
    geometry: new PolygonGeometry({
      polygonHierarchy: new PolygonHierarchy(Cartesian3.fromDegreesArray(degrees)),
      extrudedHeight: extrudedHeight
    }),
    id
  })
  const primitive = viewer.scene.primitives.add(
    new Primitive({
      geometryInstances: instance,
      appearance: new MaterialAppearance({
        material: Material.fromType('Color')
      }),
      releaseGeometryInstances: false
    })
  )
  primitive.appearance.material = new Material({
    fabric: {
      type: 'Water',
      uniforms: {
        normalMap: '/Img/water.jpg',
        frequency: 1000.0, // 控制波数的数字。
        animationSpeed: 0.09, // 控制水的动画速度的数字。
        amplitude: 10.0, // 控制水波振幅的数字。
        specularIntensity: 0.8 // 控制镜面反射强度的数字。
      }
    }
  })
}

export { createWater, waterReservoir }
