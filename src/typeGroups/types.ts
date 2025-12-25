type TSubtypeGroup<TSubtype extends string> = Readonly<Record<TSubtype, string>>

type TTypeGroup<TType extends string, TSubtype extends string> = Readonly<
  Record<TType, TSubtypeGroup<TSubtype>>
>

export type { TSubtypeGroup, TTypeGroup }
