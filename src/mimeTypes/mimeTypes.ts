import type { TMimeTypes } from './types'

import {
  application,
  audio,
  font,
  image,
  multipart,
  text,
  video
} from '../typeGroups'

export const mimeTypes: TMimeTypes = {
  ...application,
  ...audio,
  ...font,
  ...image,
  ...multipart,
  ...text,
  ...video
}
