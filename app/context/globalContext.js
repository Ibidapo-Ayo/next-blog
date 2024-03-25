"use client"
import {createContext, useState} from "react"

export const globalContext = createContext()

export default function GlobalContext ({children}){
    const [openSideBar, setOpenSideBar] = useState(false)
    return (
        <globalContext.Provider value={{
            sideBarHandler: [openSideBar, setOpenSideBar]
        }}>
            {children}
        </globalContext.Provider>
    )
}