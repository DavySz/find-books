import { useState } from "react";

import { Header } from "../../components/Header";
import lupaSVG from '../../assets/lupa.svg'
import bookSVG from '../../assets/book.svg'
import './styles.css'

export function Home() {

    const [find, setFind] = useState('')

    return (
        <div className="container">
            <header className="header">
                <Header />
            </header>
            <main>
                <div className="title">
                    <h1>Encontre os livros
                        que você procura</h1>
                </div>
                <div className="subtitle">
                    <p>Você não precisa saber o nome do livro,
                        se souber o nome do autor ou da editora,
                        basta digitar, pesquisar e encontrar</p>
                </div>
                <div className="find">
                    <input
                        placeholder="Procure pelo autor, nome do livro..."
                        value={find}
                        onChange={(e) => { setFind(e.target.value) }}
                    />
                    <button className='button-research' title='Pesquisar'>
                        <img src={lupaSVG} alt="lupa" />
                    </button>
                </div>
                <div className='cards-container'>
                    <img src={bookSVG} alt="Imagem de livros" />
                </div>
            </main>
        </div>
    )
}

