import { useState } from "react";
import { searchFestivals } from "../services/festivals";


export function useFestivals() {

    const [festivales, setFestivals] = useState([]);

    const getFestivals = async () => {
        console.log(`useEvents hook rendering...`)
        const newFestivals = await searchFestivals();
        setFestivals(newFestivals)
    }

    return { festivales, getFestivals }
}