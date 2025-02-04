import React, { useEffect, useState } from "react"
import { getPersonagens } from "../consumo/Personagens"
import './Home.css'
import Search from "./Search"
import { Modal } from 'react-bootstrap'

function Home(){
    const [personagens, setPersonagens] = useState([])
    const [visibleCount, setVisibleCount] = useState(10)
    const [showModal, setShowModal] = useState(false)
    const [selectedPersonagem, setSelectedPersonagem] = useState(null)

    useEffect(()=>{
        fetchPersonagens()
    }, [])

    async function fetchPersonagens(){
        const personagens = await getPersonagens()
        setPersonagens(personagens)
    }

    const loadMore = () => {
        setVisibleCount(prevCount => prevCount + 10)
    }

    function scrollParaCima(){
        window.scrollTo({top: 0, behavior:'smooth'})
    }

    function toUpperCase(element){
        return element.charAt(0).toUpperCase() + element.slice(1)
    }

    function getClicado(p){
        setSelectedPersonagem(p)
        setShowModal(true)
    }

    return(
        <div className="Pag">
        
            <div className="body">
                {
                    personagens.slice(0, visibleCount).map(personagem =>(
                        <div className="personagem" key={personagem.name} onClick={() => getClicado(personagem)}>
                            <img src={personagem.image} alt={personagem.name} />
                            <p className="nome"><strong>{personagem.name}</strong></p>
                            <p className="descricao"><strong>{personagem.house}</strong></p>
                            <p className="descricao"><strong>{toUpperCase(personagem.ancestry)}</strong></p>
                            <p className="descricao"><strong>{toUpperCase(personagem.patronus)}</strong></p>
                        </div>
                    ))
                }
                {visibleCount < personagens.length && (
                    <div className="load-more-container">
                        <button onClick={loadMore} className="load-more">Load More</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home