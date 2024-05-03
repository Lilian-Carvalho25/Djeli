import './Footer.css';

const Footer = () => {
    return(

        <footer className='container-footer'>
        <article className='left-side-footer'>
            <h3>Estamos perto de você</h3>
            <div className='icons-media-footer'>
                    <img src="icon-instagram.svg" alt="ícone escuro do instagram" />
                <a href="https://www.instagram.com/djeli.afro/" target='_blank'>
                    <p>@djeli.afro</p>
                </a>
            </div>

            <div className='icons-media-footer'>
                    <img src="icon-email.svg" alt="ícone escuro de uma caixa de mensagem" />
                <a href="">
                    <p>djeli@gmail.com</p>
                </a>
            </div>

            <p id='copyright'>DJELI © 2024 Cachos que Empoderam. Todos os direitos reservados.</p>
        </article>

        <article className='right-side-footer'>
            <h3>Mapa do site</h3>
            <a href="">
                <p>Sobre nós</p>
            </a>
            <a href="">
                <p>Fale Conosco</p>
            </a>
            <button>Seja Djeli</button>
        </article>

        <article className='side-insulated'>
            <img src="icon-branco-logo.svg" alt="Ícone branco de uma mulher empoderada com o seu cabelo cacheado, relacionado a logo da DJELI" />
        </article>
    </footer>
    
    )
}

export default Footer