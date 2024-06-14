"use client"
import {createContext, useState} from "react"

export const globalContext = createContext()

export default function GlobalContext ({children}){
    const [openSideBar, setOpenSideBar] = useState(false)
    const [openSearch,  setOpenSearch] = useState(false)
    return (
        <globalContext.Provider value={{
            sideBarHandler: [openSideBar, setOpenSideBar],
            searchBarHandler: [openSearch,  setOpenSearch] 
        }}>
            {children}
        </globalContext.Provider>
    )
}