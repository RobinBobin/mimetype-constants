import type {
  TApplicationTypeGroup,
  TAudioTypeGroup,
  TFontTypeGroup,
  TImageTypeGroup,
  TMultipartTypeGroup,
  TTextTypeGroup,
  TVideoTypeGroup
} from '../typeGroups'

export type TMimeTypes = TApplicationTypeGroup &
  TAudioTypeGroup &
  TFontTypeGroup &
  TImageTypeGroup &
  TMultipartTypeGroup &
  TTextTypeGroup &
  TVideoTypeGroup
