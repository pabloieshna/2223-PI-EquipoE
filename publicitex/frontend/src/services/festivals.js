import { getBaseUrl } from '../utils/utils.js';

export const searchFestivals = async () => {

    console.log(`searchFestivals`)
        try{
            const url  = `${getBaseUrl()}/festivals`
            console.log(`searchFestivals con url ${url}`)
            const response = await fetch(url)
            if (response.status !== 200)
                throw new Error('Error al buscar los festivales')
            const datosDevueltos = await response.json()
            return datosDevueltos.data;
        } catch (error) {
            console.log(error)
            throw new Error('Error al buscar los festivales')
        }
    }
