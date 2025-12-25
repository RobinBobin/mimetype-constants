import type { TFontTypeGroup } from './types'

import { createTypeGroup } from '../createTypeGroup'

export const font: TFontTypeGroup = createTypeGroup('font', {
  collection: 'collection',
  otf: 'otf',
  sfnt: 'sfnt',
  ttf: 'ttf',
  woff: 'woff',
  woff2: 'woff2'
})
