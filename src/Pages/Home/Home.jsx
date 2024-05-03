import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />

            <section className='highlight-home'>
                <div className='text-highlight'>
                    <h1>Reconecte-se às suas raízes com a <span>DJELI</span></h1>
                    <p>Seja Bem-vinda a um ambiente acolhedor</p>
                    <button>Explorar</button>
                </div>
            </section>

            <section className='what-it-means'>
                <img src="mulher-sorrindo.jpg" alt="Mulher sorrindo" />
                <div className='text-what'>
                    <h2>O que é a Djeli?</h2>
                    <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ca aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                </div>
            </section>

            <section className='container-data'>
                <p id='transformando'>Transformando cabelos</p>
                <h2>Empoderando almas</h2>
                <div className='datas'>
                    <article className='data'>
                        <h3>30%</h3>
                        <p>Forem ipsum dolor sit amet</p>
                    </article>
                    <article className='data'>
                        <h3>60%</h3>
                        <p>Forem ipsum dolor sit amet</p>
                    </article>
                    <article className='data'>
                        <h3>80%</h3>
                        <p>Forem ipsum dolor sit amet</p>
                    </article>
                </div>
            </section>

            <section className='container-offering'>
                <h2>O que a Djeli oferece?</h2>
                <div className='resources'>
                    <div className='container-offerings'>
                        <div className='left-side'>
                            <article className='offerings'>
                                <div className='title-image'>
                                    <img src="icon-community.svg" alt="Ícone de desenhos de pessoas em conjunto, representando uma comunidade" />
                                    <div className='text-offerings'>
                                        <h3>Rede de apoio</h3>
                                        <img src="linha-esquerda.png" alt="Linha reta com detalhes laranjas" />
                                    </div>
                                </div>
                                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit, adip.</p>
                            </article>
                            <article className='offerings'>
                                <div className='title-image'>
                                    <img src="Money.svg" alt="Ícone notas de dinheiro empilhadas" />
                                    <div className='text-offerings'>
                                        <h3>Renda</h3>
                                        <img src="linha-esquerda.png" alt="Linha reta com detalhes laranjas" />
                                    </div>
                                </div>
                                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit, adip.</p>
                            </article>
                        </div>
                        <div className='right-side'>
                            <article className='offerings'>
                                <div className='title-image'>
                                    <img src="icon-book.svg" alt="Ícone de um livro aberto" />
                                    <div className='text-offerings'>
                                        <h3>Aprendizado</h3>
                                        <img src="linha-direita.png" alt="Linha reta com detalhes laranjas" />
                                    </div>
                                </div>
                                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit, adip.</p>
                            </article>
                            <article className='offerings'>
                                <div className='title-image'>
                                    <img src="heart.svg" alt="Ícone de coração" />
                                    <div className='text-offerings'>
                                        <h3>Acolhimento</h3>
                                        <img src="linha-direita.png" alt="Linha reta com detalhes laranjas" />
                                    </div>
                                </div>
                                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit, adip.</p>
                            </article>
                        </div>
                    </div>
                    <img className='women-smiling' src="mulher-sorrindo-beneficios.jpg" alt="Mulher negra cabelo crespo sorrindo e olhando para a esquerda. Fundo laranja com detalhes que remetem a África" />
                </div>
            </section>

            <section className='container-resilience'>
                <p id='transformando'>Cachos que contam histórias de</p>
                <h2>Resiliência, força e poder</h2>
                <p className='text-resilience'>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ca aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </section>

            <section className='container-logos'>
                <div className='logos'>
                    <img src="logo-zumbi.png" alt="Logo da Universidade Zumbi dos Palmares" />
                    <img src="logo-ec-black.png" alt="Logo do ecossistema black" />
                    <img src="logo-racismo-zero.png" alt="Logo do racismo zero" />
                </div>
            </section>

            <Footer />
            
        </>
    )
}

export default Home