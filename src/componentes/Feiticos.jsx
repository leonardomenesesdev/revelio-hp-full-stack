import {useEffect, useState } from "react"
import { getFeiticos } from "../consumo/Personagens"
import './Feiticos.css'
export default function Feiticos(){
    const [spells, setSpells] = useState([])
    useEffect(()=>{
            fetchFeiticos()
        }, [])

    async function fetchFeiticos() {
        const feiticos = await getFeiticos()
        setSpells(feiticos)
    }

   
    
    return(
        <div className="body">
        {
            spells.map(spell => (
            <div className="spell" key={spell.name}>
                <h3 className="spellName">{spell.name}</h3>
                <h3 className="spellDescription">{spell.description}</h3>
            </div>
        )
        )
    }
        </div>
    
    )
}