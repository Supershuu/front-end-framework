import { Math, HeadingPitchRoll, Transforms, Cartesian3, Viewer } from 'cesium'

const createDam = (lon: number, lat: number, height: number, url: string, viewer: Viewer) => {
  const position = Cartesian3.fromDegrees(lon, lat, height)
  const heading = Math.toRadians(165)
  const pitch = 0
  const roll = 0
  const hpr = new HeadingPitchRoll(heading, pitch, roll)
  const orientation = Transforms.headingPitchRollQuaternion(position, hpr)
  viewer.entities.add({
    name: url,
    position: position,
    // @ts-ignore
    orientation: orientation,
    model: {
      uri: url,
      // minimumPixelSize: 256,
      maximumScale: 128,
      scale: 5.5
    }
  })
}

export { createDam }
