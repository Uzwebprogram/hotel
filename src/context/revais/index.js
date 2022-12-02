import { useState , useEffect } from "react";
import { createContext } from "react";

export const ReviewsContext = createContext({
    ReviewsMap:[],
})

export const ReviewsProvider = ({children})=>{
    const [ReviewsMap , setReviewsMap] = useState([])
    useEffect(() => {
        fetch("http://62.217.179.24:5000/contacts")
        .then(res => res.json())
        .then(result => setReviewsMap(result))
    }, [ReviewsMap])
    const value = {ReviewsMap};
    return(
        <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
    )
}