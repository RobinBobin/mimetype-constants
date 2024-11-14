import { createTypeGroup } from '../../createTypeGroup'

export const image = createTypeGroup('image', {
  avif: 'avif',
  bmp: 'bmp',
  gif: 'gif',
  jpeg: 'jpeg',
  png: 'png',
  svgXml: 'svg+xml',
  tiff: 'tiff',
  vndMicrosoftIcon: 'vnd.microsoft.icon',
  webp: 'webp'
})
