import {useEffect, useState } from "react"
import { getFeiticos } from "../consumo/Personagens"
import './Feiticos.css'
import fotoFeitico from '../imagens/download.jpg'
import { Modal, Button } from 'react-bootstrap'
function Feiticos() {
    const [spells, setSpells] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedSpell, setSelectedSpell] = useState(null)

    useEffect(() => {
        fetchFeiticos()
    }, [])

    async function fetchFeiticos() {
        const feiticos = await getFeiticos()
        setSpells(feiticos)
    }

    function getClicado(s) {
        setSelectedSpell(s)
        setShowModal(true)
    }

    function handleClose() {
        setShowModal(false)
        setSelectedSpell(null)
    }

    return (
        <div className="body">
            {
                spells.map(spell => (
                    <div className="spell" key={spell.name} onClick={() => getClicado(spell)}>
                        <img src={fotoFeitico} alt={spell.name} />
                        <h3 className="spellName">{spell.name}</h3>
                    </div>
                ))
            }

            {selectedSpell && (
                <Modal show={showModal} onHide={handleClose} centered className="modal">
                    <Modal.Header >
                        <Modal.Title>{selectedSpell.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Description:</strong> {selectedSpell.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    )
}

export default Feiticos