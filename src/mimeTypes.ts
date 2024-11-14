import type { TMimeTypes } from './types'

import { application } from './typeGroups/application'
import { audio } from './typeGroups/audio'
import { font } from './typeGroups/font'
import { image } from './typeGroups/image'
import { multipart } from './typeGroups/multipart'
import { text } from './typeGroups/text'
import { video } from './typeGroups/video'

export const mimeTypes: TMimeTypes = {
  ...application,
  ...audio,
  ...font,
  ...image,
  ...multipart,
  ...text,
  ...video
}
