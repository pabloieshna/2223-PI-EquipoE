import { getBaseUrl } from '../utils/utils.js';

export const festivalsByCity = async ({ search }) => {

    console.log(`searchFestivals: ${search}`)
    if (search === '') return [];

    try {
        const url = `${getBaseUrl()}/festival/${search}`;
        console.log(`searchFestivals: ${search} con url: ${url}`)
        const response = await fetch(url);
        if (response.status !== 200)
            throw new Error('Error al buscar los festivales');

        const datosDevueltos = await response.json();
        return datosDevueltos.data;

    } catch (error) {
        console.log(error)
        throw new Error('Error al buscar los festivales');
    }
}