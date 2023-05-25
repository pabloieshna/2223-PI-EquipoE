import { useState } from "react";
import { searchEvents } from "../services/events";


export function useEvents() {

    const [events, setEvents] = useState([]);

    const getEvents = async ({ search }) => {
        console.log(`useEvents hook rendering... ${search}`)
        const newEvents = await searchEvents({ search });
        setEvents(newEvents)
    }

    return { events, getEvents }
}