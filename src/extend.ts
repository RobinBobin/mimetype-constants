import type { TMimeTypes, TSubtypeGroup, TTypeGroup } from './types'

import { cloneDeep } from 'radashi'

import { createTypeGroup } from './createTypeGroup'
import { mimeTypes } from './mimeTypes'

export function extend<TType extends string, TSubtype extends string>(
  type: TType,
  subtypeGroup: TSubtypeGroup<TSubtype>,
  baseTypes: TMimeTypes = mimeTypes
): TMimeTypes & TTypeGroup<TType, TSubtype> {
  const typeGroup = createTypeGroup(type, subtypeGroup)

  const isExistingType = Boolean(baseTypes[type as keyof TMimeTypes])

  if (!isExistingType) {
    return {
      ...baseTypes,
      ...typeGroup
    }
  }

  const result = cloneDeep(baseTypes) as TMimeTypes &
    TTypeGroup<TType, TSubtype>

  for (const [key, value] of Object.entries(typeGroup[type])) {
    // @ts-expect-error Element implicitly has an 'any' type
    const isExistingSubtype = Boolean(result[type][key])

    if (!isExistingSubtype) {
      // @ts-expect-error Element implicitly has an 'any' type
      result[type][key] = value
    }
  }

  return result
}
