import { useEffect } from 'react';
import './style.css'
import Festival from '../../components/Festival/Festival'
import {useFestivals} from '../../hooks/useFestivals'
//COMPONENT
export default function Festivals(){
    
    const { festivales, getFestivals } = useFestivals()

    useEffect(() => {
        getFestivals()
    },[])
    return(
        <article className="containerCards-Festivals">
            {
                festivales?.map((festival)=>(
                    <Festival key={festival.id} fest={festival}/>
                ))
            }
        </article>
    );
}