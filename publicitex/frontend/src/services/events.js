import { getBaseUrl } from '../utils/utils.js';

export const searchEvents = async ({ search }) => {

    console.log(`searchEvents: ${search}`)
    if (search === ''){
        try{
            const url  = `${getBaseUrl()}/events`
            console.log(`searchEvents con url ${url}`)
            const response = await fetch(url)
            if (response.status !== 200)
                throw new Error('Error al buscar los eventos')
            const data = await response.json()
            return data
        } catch (error) {
            console.log(error)
            throw new Error('Error al buscar los eventos')
        }
    }

    try {
        const url = `${getBaseUrl()}/events/${search}`;
        console.log(`searchEvents: ${search} con url: ${url}`)
        const response = await fetch(url);
        if (response.status !== 200)
            throw new Error('Error al buscar los eventos');

        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error)
        throw new Error('Error al buscar los eventos');
    }

}