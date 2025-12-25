import type { TSubtypeGroup, TTypeGroup } from '../types'

type TMultipartSubtype = 'byteranges' | 'encrypted' | 'formData' | 'related'
type TMultipartSubtypeGroup = TSubtypeGroup<TMultipartSubtype>
type TMultipartTypeGroup = TTypeGroup<'multipart', TMultipartSubtype>

export type { TMultipartSubtype, TMultipartSubtypeGroup, TMultipartTypeGroup }
