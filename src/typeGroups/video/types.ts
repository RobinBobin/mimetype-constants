import type { TSubtypeGroup, TTypeGroup } from '../types'

type TVideoSubtype =
  | 'h264'
  | 'mp2t'
  | 'mp4'
  | 'mpeg'
  | 'ogg'
  | 'quicktime'
  | 'threeGpp'
  | 'threeGpp2'
  | 'webm'
  | 'xMsvideo'

type TVideoSubtypeGroup = TSubtypeGroup<TVideoSubtype>
type TVideoTypeGroup = TTypeGroup<'video', TVideoSubtype>

export type { TVideoSubtype, TVideoSubtypeGroup, TVideoTypeGroup }
