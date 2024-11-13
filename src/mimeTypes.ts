import type { TMimeTypes } from './types'

import { application } from './typeGroups/application'
import { audio } from './typeGroups/audio'
import { font } from './typeGroups/font'

export const mimeTypes: TMimeTypes = {
  ...application,
  ...audio,
  ...font
}
