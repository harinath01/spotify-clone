import React, { useReducer, useContext, createContext } from 'react'

const DatalayerContext = createContext() 

export default function Datalayer({initialState ,reducer,children}) {
    return (
        <DatalayerContext.Provider value={useReducer(reducer,initialState)}>
            {children}  
        </DatalayerContext.Provider>
    )
}

export const useStatevalue=()=>useContext(DatalayerContext);