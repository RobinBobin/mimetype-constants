import type { TTextTypeGroup } from './types'

import { createTypeGroup } from '../createTypeGroup'

export const text: TTextTypeGroup = createTypeGroup('text', {
  calendar: 'calendar',
  css: 'css',
  csv: 'csv',
  html: 'html',
  javascript: 'javascript',
  plain: 'plain',
  richtext: 'richtext',
  sgml: 'sgml',
  xml: 'xml',
  yaml: 'yaml'
})
