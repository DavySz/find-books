import { useState } from "react";

import lupaSVG from '../../assets/lupa.svg'
import bookSVG from '../../assets/book.svg'

import { searchBooks } from "../../functions/searchBooks";
import { Header } from "../../components/Header";
import { bookType } from "../../types/googleBooksType";
import { Card } from "../../components/Card";
import './styles.css'

export function Home() {

    const [find, setFind] = useState('')
    const [books, setBooks] = useState([])

    async function search() {
        await searchBooks(find).then((response) => {
            console.log(response.items)
            setBooks(response.items)
        }).catch((error) => {
            console.log(error)
        })
    }


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
                    <button className='button-research' title='Pesquisar' onClick={search}>
                        <img src={lupaSVG} alt="lupa" />
                    </button>
                </div>
            </main>
            <div className='cards-container'>
                {
                    books.map((book: bookType) => {
                        return (
                            <Card
                                key={book.id}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                publishedDate={book.volumeInfo.publishedDate}
                                imageLinks={book.volumeInfo.imageLinks}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

