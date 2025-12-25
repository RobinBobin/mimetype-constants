import type { TSubtypeGroup, TTypeGroup } from '../types'

type TFontSubtype = 'collection' | 'otf' | 'sfnt' | 'ttf' | 'woff' | 'woff2'
type TFontSubtypeGroup = TSubtypeGroup<TFontSubtype>
type TFontTypeGroup = TTypeGroup<'font', TFontSubtype>

export type { TFontSubtype, TFontSubtypeGroup, TFontTypeGroup }
