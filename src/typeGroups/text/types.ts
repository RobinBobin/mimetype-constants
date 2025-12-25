import type { TSubtypeGroup, TTypeGroup } from '../types'

type TTextSubtype =
  | 'calendar'
  | 'css'
  | 'csv'
  | 'html'
  | 'javascript'
  | 'plain'
  | 'richtext'
  | 'sgml'
  | 'xml'
  | 'yaml'

type TTextSubtypeGroup = TSubtypeGroup<TTextSubtype>
type TTextTypeGroup = TTypeGroup<'text', TTextSubtype>

export type { TTextSubtype, TTextSubtypeGroup, TTextTypeGroup }
