import type { TMimeTypes, TTypeGroup } from './types'

import { omit } from 'radashi'

import { mimeTypes } from './mimeTypes'

export function extend<TNewMimeTypes extends TTypeGroup<string, string>>(
  typeGroups: TNewMimeTypes
): TMimeTypes & TNewMimeTypes {
  const extendedMimeTypes: Record<string, Record<string, string>> = {
    ...mimeTypes
  }

  for (const [type, subtypes] of Object.entries(typeGroups)) {
    const existingSubtypes = Object.keys(extendedMimeTypes[type] ?? {})

    const subtypeKeysToOmit = Object.keys(subtypes).filter(subtypeKey =>
      existingSubtypes.includes(subtypeKey)
    )

    const filteredSubtypes = omit(subtypes, subtypeKeysToOmit)

    extendedMimeTypes[type] = {
      ...extendedMimeTypes[type],
      ...filteredSubtypes
    }
  }

  return extendedMimeTypes as TMimeTypes & TNewMimeTypes
}
