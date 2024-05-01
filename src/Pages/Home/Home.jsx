import Header from '../../Components/Header/Header';
import './Home.css';

const Home = () => {
    return(
        <>
        <Header/>
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
        </>
    )
}

export default Home