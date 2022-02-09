import { useEffect, useState } from "react"

import { volumeInfoType } from "../../types/googleBooksType"
import { findBookById } from "../../functions/findBookById"
import notFoundPNG from '../../assets/not-found.png'
import { Header } from "../../components/Header"
import { Link, useParams } from "react-router-dom"
import './styles.css'

export function BookDatails() {
    const { id } = useParams()
    const [book, setBook] = useState({} as volumeInfoType)

    useEffect(() => {
        async function findThisBook() {
            await findBookById(id === undefined ? '' : id)
                .then((response) => {
                    console.log(response.volumeInfo)
                    setBook(response.volumeInfo)
                }).catch((error) => {
                    console.log(error)
                })
        }
        findThisBook()
    }, [])

    return (
        <div className="container-more-informations">
            <header>
                <Header />
            </header>
            <div className="content-more-informations">
                <div className="left-content">
                    <h3 className="text-title">{book.title}</h3>
                    {
                        book.imageLinks ?
                            <img src={book.imageLinks.thumbnail} alt={book.title} className='img-book-style' /> :
                            <img src={notFoundPNG} alt={book.title} className='book-image' />
                    }
                    <p><strong>Authors:</strong> {book.authors}</p>
                    <p><strong>Publisher:</strong> {book.publisher}</p>
                    <p><strong>Data de publicação:</strong> {book.publishedDate}</p>
                    <p><strong>Número de páginas:</strong> {book.pageCount}</p>
                    <p><strong>Linguagem:</strong> {book.language}</p>
                </div>
                <div className="right-content">
                    <h3>Descrição do livro</h3>
                    <p className="text-description">{book.description}</p>

                    <div className="button-container">
                        <button className='button-description'>
                            <a href={`${book.previewLink}`} className="link-more" target="_blank" rel="noopener noreferrer">Ler preview</a>
                        </button>
                        <button className='button-description'>
                            <a href={`${book.canonicalVolumeLink}`} className="link-more" target="_blank" rel="noopener noreferrer">Comprar este livro</a>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}