import { createTypeGroup } from '../../createTypeGroup'

export const multipart = createTypeGroup('multipart', {
  byteranges: 'byteranges',
  encrypted: 'encrypted',
  formData: 'form-data',
  related: 'related'
})
