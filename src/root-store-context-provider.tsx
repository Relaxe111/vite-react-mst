import React, { FC, PropsWithChildren } from 'react'
import { Root$ } from './mst/Root.store'

//import { init_state } from './helpers/app_init_state';

import type { IRoot$ } from './mst/types'
export const main_store = Root$.create({})

const storeContext = React.createContext<IRoot$ | null>(null)

export const StoreProvider: FC<PropsWithChildren<{}>> = (props) => {
    return <storeContext.Provider value={main_store}>{props.children}</storeContext.Provider>
}

export function useRootStore(): IRoot$ {
    const store = React.useContext(storeContext)

    if (!store) {
        throw new Error('useStore shall be used within StoreProvider')
    }

    return store
}
