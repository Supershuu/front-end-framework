import { Viewer, WebMapTileServiceImageryProvider } from 'cesium'

const GEO_COM_API_KEY = 'a6cfab9120b0a025c48f6cfb2655d183'
const GEO_API_KEY = 'f7e6a85e0cfa162bb5ac33b4ace95ce7'
const geoMark = (url: string, viewer: Viewer) => {
  const str = `https://t{s}.tianditu.gov.cn/cva_w/wmts?tk=${GEO_COM_API_KEY}&service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles`
  viewer.imageryLayers.addImageryProvider(
    new WebMapTileServiceImageryProvider({
      url: str,
      subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
      layer: 'tdtAnnoLayer',
      style: 'default',
      format: 'image/jpeg',
      tileMatrixSetID: 'GoogleMapsCompatible'
    })
  )
}

export { geoMark }
