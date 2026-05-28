import { useState } from "react"
import { TimelineContext } from "./Context"

const TimelineContextProvider = ({ children })=>{
    const [timeline, setTimeline] = useState([])

    return <TimelineContext.Provider value={{timeline, setTimeline}}>
        {children}



    </TimelineContext.Provider>


}

export default TimelineContextProvider;