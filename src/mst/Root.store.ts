import { types } from 'mobx-state-tree'

export const Root$ = types
    .model('Root$', {
        count: 0,
    })
    .actions((self) => ({
        onFieldChange<Key extends keyof typeof self>(field: Key, value: typeof self[Key]) {
            self[field] = value
        },
    }))
