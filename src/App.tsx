import React from 'react'
import { ReactComponent as Logo } from './logo.svg'
import './App.css'
import { useRootStore } from './root-store-context-provider'
import { observer } from 'mobx-react-lite'
import { Button } from 'antd'
export const App = observer(function App() {
    const { count, onFieldChange } = useRootStore()

    return (
        <>
            <div className='App'>
                <header className='App-header'>
                    <Logo className='App-logo' />
                    
                    <p>
                        <Button danger onClick={() => onFieldChange('count', count + 1)}>
                            count is: {count}
                        </Button>
                    </p>
                    <p>
                        Edit <code>App.tsx</code> and save to test HMR updates.
                    </p>
                    
                </header>
            </div>
        </>
    )
}) /*  */
