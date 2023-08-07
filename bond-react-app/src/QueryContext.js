import { createContext, useState } from 'react';
import {getAllBonds} from './services/bond-service.js'
export const Context = createContext()
export const ContextProvider = ({children}) => {
    const [queryFunction, setQueryFunction] = useState(getAllBonds())

    return(
        <Context.Provider value = {{queryFunction, setQueryFunction}}>
            {children}
        </Context.Provider>
    )
}