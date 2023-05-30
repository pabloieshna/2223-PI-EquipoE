import { useState } from "react";
import { festivalsByCity } from "../services/festivalsByCity.js";


export function useSearchFestivals() {

    const [festivales, setFestivals] = useState([]);

    const getFestivals = async ({search}) => {
        console.log(`useFestivals hook rendering...`)
        const newFestivals = await festivalsByCity({search});
        setFestivals(newFestivals)
    }

    return { festivales, getFestivals }
}