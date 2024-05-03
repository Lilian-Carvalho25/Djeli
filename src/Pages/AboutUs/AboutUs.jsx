import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import './AboutUs.css'

const AboutUs = () => {
    return(
        <>
            <Header />

            <section className='highlight-about'>
                <div className='text-highlight-about'>
                    <h1>Existimos para transformar a realidade das nossas <span>Djelis</span></h1>
                </div>
            </section>

            <section className='what-it-means'>
                <img src="mulheres-sorrindo-djeli.png" alt="Mulheres cacheadas sorrindo" />
                <div className='text-what'>
                    <h2>Djeli</h2>
                    <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ca aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                </div>
            </section>

            <section className='hair-code-container'>
                <h2>Desconstruindo o hair code, <span>cacho</span> a <span>cacho</span>.</h2>
            </section>

            <section className='container-mvv'>
                    <article className='mvv'>
                        <img src="icon-missao.svg" alt="Ícone de uma flecha acertando seu alvo" />
                        <h3 className='espaco'>Missão</h3>
                        <p>Empoderar mulheres em transição capilar, desconstruir o racismo e garantir apoio para que nenhuma mulher passe por esse processo sozinha.</p>
                    </article>
                    <article className='mvv'>
                        <img src="icon-visao.svg" alt="Ícone de um olho aberto" />
                        <h3>Visão</h3>
                        <p>Construir uma comunidade inclusiva e solidária, onde as mulheres em transição capilar possam se conectar, compartilhar experiências, trocar apoio, formar laços duradouros e se reconectar com suas raízes ancestrais.</p>
                    </article>
                    <article className='mvv'>
                        <img src="icon-valores.svg" alt="Ícone de um diamante precioso" />
                        <h3 className='espaco'>Valores</h3>
                        <p>Diversidade, empoderamento, educação, acolhimento e resiliência.</p>
                    </article>
            </section>

            <section className='what-it-means'>
                <div className='text-what'>
                    <h2>Como surgimos?</h2>
                    <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ca aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                </div>
                <img src="mulher-loira-sorrindo.jpg" alt="Mulher loira cacheada sorrindo" />
            </section>

            <Footer />
        </>
    )
}

export default AboutUs