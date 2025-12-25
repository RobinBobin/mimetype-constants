import type { TSubtypeGroup, TTypeGroup } from '../types'

type TAudioSubtype =
  | 'midi'
  | 'mp4'
  | 'mpeg'
  | 'ogg'
  | 'opus'
  | 'threegpp'
  | 'threegpp2'
  | 'wav'
  | 'webm'
  | 'xAac'
  | 'xAiff'
  | 'xMidi'
  | 'xMpegurl'
  | 'xMsWma'
  | 'xWav'

type TAudioSubtypeGroup = TSubtypeGroup<TAudioSubtype>
type TAudioTypeGroup = TTypeGroup<'audio', TAudioSubtype>

export type { TAudioSubtype, TAudioSubtypeGroup, TAudioTypeGroup }
