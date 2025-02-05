import './Hero.css'
export default function Hero(){
    return(
        <div className="body-hero">
            <div className='about'>
                <h1>Sobre:</h1>
                <h3>Este projeto utiliza React para consumir a <a href="https://hp-api.onrender.com/" target="_blank">HP-API</a>, uma API que fornece informações sobre o universo de Harry Potter. O objetivo é apresentar esses dados de forma intuitiva e acessível, permitindo que os fãs explorem detalhes sobre personagens, feitiços, casas de Hogwarts e muito mais. Com uma interface amigável, a experiência de navegação se torna mais simples e agradável para todos os usuários.</h3>
                </div>

                <h1>Tecnologias usadas:</h1>
            <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li><a href="https://hp-api.onrender.com/" target="_blank">HP-API</a></li>
            </ul>
        </div>
    )
}