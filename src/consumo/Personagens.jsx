import axios from "axios"

const consumoPersonagens = axios.create({baseURL: "https://hp-api.onrender.com/api/characters"})
const consumoFeiticos = axios.create({baseURL: "https://hp-api.onrender.com/api/spells"})

async function getPersonagens() {
    const response = await consumoPersonagens.get('/')
    return response.data
}
async function getFeiticos(){
    const response = await consumoFeiticos.get('/')
    return response.data
}

export{
    getPersonagens, 
    getFeiticos
}