import type { TSubtypeGroup, TTypeGroup } from './types'

import { objectify } from 'radashi'

export function createTypeGroup<TType extends string, TSubtype extends string>(
  type: TType,
  subtypeGroup: TSubtypeGroup<TSubtype>
): TTypeGroup<TType, TSubtype> {
  const resultingSubtypeGroup = objectify(
    Object.entries<string>(subtypeGroup),
    ([key]: Readonly<[string, string]>) => key,
    ([, value]: Readonly<[string, string]>) => `${type}/${value}`
  )

  const typeGroup = {
    [type]: resultingSubtypeGroup
  } as TTypeGroup<TType, TSubtype>

  return typeGroup
}
