import type { TMultipartTypeGroup } from './types'

import { createTypeGroup } from '../createTypeGroup'

export const multipart: TMultipartTypeGroup = createTypeGroup('multipart', {
  byteranges: 'byteranges',
  encrypted: 'encrypted',
  formData: 'form-data',
  related: 'related'
})
