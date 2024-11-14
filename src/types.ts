import type { TApplicationSubtype } from './typeGroups/application/types'
import type { TAudioSubtype } from './typeGroups/audio/types'
import type { TFontSubtype } from './typeGroups/font/types'
import type { TImageSubtype } from './typeGroups/image/types'
import type { TMultipartSubtype } from './typeGroups/multipart/types'
import type { TTextSubtype } from './typeGroups/text/types'
import type { TVideoSubtype } from './typeGroups/video/types'

type TSubtypeGroup<TSubtype extends string> = Readonly<Record<TSubtype, string>>

type TTypeGroup<TType extends string, TSubtype extends string> = Readonly<
  Record<TType, TSubtypeGroup<TSubtype>>
>

type TMimeTypes = TTypeGroup<'application', TApplicationSubtype> &
  TTypeGroup<'audio', TAudioSubtype> &
  TTypeGroup<'font', TFontSubtype> &
  TTypeGroup<'image', TImageSubtype> &
  TTypeGroup<'multipart', TMultipartSubtype> &
  TTypeGroup<'text', TTextSubtype> &
  TTypeGroup<'video', TVideoSubtype>

export type { TMimeTypes, TSubtypeGroup, TTypeGroup }
