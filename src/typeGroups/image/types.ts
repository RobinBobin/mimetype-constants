import type { TSubtypeGroup, TTypeGroup } from '../types'

type TImageSubtype =
  | 'avif'
  | 'bmp'
  | 'gif'
  | 'jpeg'
  | 'png'
  | 'svgXml'
  | 'tiff'
  | 'vndMicrosoftIcon'
  | 'webp'

type TImageSubtypeGroup = TSubtypeGroup<TImageSubtype>
type TImageTypeGroup = TTypeGroup<'image', TImageSubtype>

export type { TImageSubtype, TImageSubtypeGroup, TImageTypeGroup }
