import React from 'react'
import { ReactComponent as Logo } from './logo.svg'
import './App.css'
import { useRootStore } from './root-store-context-provider'
import { observer } from 'mobx-react-lite'
import { Button } from 'antd'
//import DocViewer from 'asma-doc-viewer'
//import DocViewer from './modules/react-doc-viewer'
//import DocViewer, { DocViewerRenderers} from 'react-doc-viewer'
export const App = observer(function App() {
    const { count, onFieldChange } = useRootStore()

    return (
        <>
            {/* <DocViewer documents={[{ uri: 'http://www.africau.edu/images/default/sample.pdf' }]} />  */}
            {/* <DocViewer documents={[{ uri: 'http://www.africau.edu/images/default/sample.pdf' }]} /> */}
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
                    {/* <DocViewer documents={[]} /> */}
                    
                </header>
            </div>
        </>
    )
}) /*  */
