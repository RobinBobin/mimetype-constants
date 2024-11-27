Extensible MIME constants with typescript support.

    import { createTypeGroup } from './createTypeGroup'
    import { extend } from './extend'
    import { mimeTypes } from './mimeTypes'

<!-- -->

    console.log(mimeTypes.application.ldJson) // 'application/ld+json'
    console.log(mimeTypes.application.aa) // undefined; TS will emit an error

<!-- -->

    const types = extend({
      ...createTypeGroup('aa', { aa: 'aa' }),
      ...createTypeGroup('application', { aa: 'aa' })
    })

    console.log(types.application.ldJson) // 'application/ld+json'
    console.log(types.application.aa) // 'application/aa'
    console.log(types.aa.aa) // 'aa/aa'

<!-- -->

    const types2 = extend({
      ...types,
      ...createTypeGroup('hooray', { aaa: 'aaa' })
    })

    console.log(types2.application.ldJson) // 'application/ld+json'
    console.log(types2.application.aa) // 'application/aa'
    console.log(types2.aa.aa) // 'aa/aa'
    console.log(types2.hooray.aaa) // 'hooray/aaa'
