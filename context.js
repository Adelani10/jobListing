"use client"

import { createContext, useState } from "react"
const appContext = createContext(null)
import { data } from "./data"

function Context({children}) {
    const [jobData, setJobData] = useState(data)

    return (
        <appContext.Provider value={{
            jobData
        }}>
            {children}
        </appContext.Provider>
    )
}

export {Context, appContext}