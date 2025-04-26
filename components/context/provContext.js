"use client"

import { createContext } from 'react'
import FotoStore from '@/components/store/fotostor'

export const FotoContext = createContext(null)

export const ProvContext = ({ children }) => {
    return (<FotoContext.Provider value={{ foto: new FotoStore() }}>
        {children}
    </FotoContext.Provider>)
}