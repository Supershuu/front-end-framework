import {
  Cartesian3,
  GeometryInstance,
  Material,
  MaterialAppearance,
  PolygonGeometry,
  PolygonHierarchy,
  Primitive,
  Viewer,
  buildModuleUrl
} from 'cesium'
// 淹没分析
export class SubmergenceAnalysis {
  viewer: Viewer
  extrudedHeight: number
  primitive: Primitive
  polygon_degrees: number[]
  constructor(viewer, isTerrain = true, height_max, height_min) {
    this.viewer = viewer
    this.extrudedHeight = height_min
    this.polygon_degrees = [
      107.439043, 29.84517, 107.431064, 29.876308, 107.457281, 29.91386, 107.505155, 29.908426,
      107.541631, 29.889157, 107.555309, 29.872355, 107.599194, 29.858022, 107.640799, 29.858022,
      107.688104, 29.880756, 107.708051, 29.901509, 107.739968, 29.927691, 107.761625, 29.947446,
      107.776443, 29.965223, 107.795821, 29.985465, 107.827719, 30.010128, 107.833988, 30.034802,
      107.840827, 30.060455, 107.846527, 30.086102, 107.864195, 30.10484, 107.893261, 30.101389,
      107.877303, 30.074266, 107.875593, 30.043683, 107.873883, 30.005193, 107.853936, 29.980019,
      107.827046, 29.941999, 107.805958, 29.922242, 107.782591, 29.906928, 107.760363, 29.877282,
      107.732437, 29.857018, 107.70679, 29.841199, 107.636118, 29.821917, 107.575135, 29.819445,
      107.542649, 29.838233, 107.516432, 29.857512, 107.490215, 29.875305, 107.483376, 29.864926,
      107.508453, 29.835761, 107.439043, 29.84517
    ]
    this._addDisListener()
  }
  _addDisListener() {
    this._drawPoly(this.polygon_degrees)
  }

  _drawPoly(degrees) {
    const that = this
    // let entity =
    //     this.viewer.entities.add({
    //         polygon: {
    //             hierarchy: {},
    //             material: new Cesium.Color.fromBytes(64, 157, 253, 100),
    //             perPositionHeight: true,
    //         }
    //     })
    // entity.polygon.hierarchy = new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray(degrees))
    // entity.polygon.extrudedHeight = new Cesium.CallbackProperty(() => that.extrudedHeight, false);
    const instance = new GeometryInstance({
      geometry: new PolygonGeometry({
        polygonHierarchy: new PolygonHierarchy(Cartesian3.fromDegreesArray(degrees)),
        extrudedHeight: that.extrudedHeight
      }),
      id: 'poly-water'
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
          specularMap: '/Img/water.jpg',
          normalMap: buildModuleUrl('/Assets/Textures/waterNormals.jpg'),
          frequency: 1000.0,
          animationSpeed: 0.1,
          amplitude: 1.0
        }
      }
    })
  }
  update() {
    this.primitive && this.viewer.scene.primitives.remove(this.primitive)
    this._drawPoly(this.polygon_degrees)
  }
}
