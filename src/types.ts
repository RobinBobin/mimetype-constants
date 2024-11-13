import type { TApplicationSubtype } from './typeGroups/application/types'
import type { TAudioSubtype } from './typeGroups/audio/types'
import type { TFontSubtype } from './typeGroups/font/types'

type TSubtypeGroup<TSubtype extends string> = Readonly<Record<TSubtype, string>>

type TTypeGroup<TType extends string, TSubtype extends string> = Readonly<
  Record<TType, TSubtypeGroup<TSubtype>>
>

type TMimeTypes = TTypeGroup<'application', TApplicationSubtype> &
  TTypeGroup<'audio', TAudioSubtype> &
  TTypeGroup<'font', TFontSubtype>

export type { TMimeTypes, TSubtypeGroup, TTypeGroup }
