import { useState } from "react";
import { allFestivals } from "../services/allFestivals";


export function useFestivals() {

    const [festivales, setFestivals] = useState([]);

    const getFestivals = async () => {
        console.log(`useFestivals hook rendering...`)
        const newFestivals = await allFestivals();
        setFestivals(newFestivals)
    }

    return { festivales, getFestivals }
}