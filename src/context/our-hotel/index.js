import { useState , useEffect } from "react";
import { createContext } from "react";

export const HotelOurContext = createContext({
    HotelOurMap:[],
})

export const HotelOurProvider = ({children})=>{
    const [HotelOurMap , setHotelOurMap] = useState([])
    useEffect(() => {
        fetch("http://62.217.179.24:5000/rooms")
        .then(res => res.json())
        .then(result => setHotelOurMap(result))
    }, [HotelOurMap])
    const value = {HotelOurMap};
    return(
        <HotelOurContext.Provider value={value}>{children}</HotelOurContext.Provider>
    )
}