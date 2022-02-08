import { useEffect, useState } from "react"

import { findBookByIsbn } from "../../functions/findBookByIsbn"
import { bookType } from "../../types/googleBooksType"
import { Header } from "../../components/Header"
import { useParams } from "react-router-dom"
import './styles.css'

export function BookDatails() {
    const { isbn } = useParams()
    const [book, setBook] = useState([])

    useEffect(() => {
        async function findThisBook() {
            await findBookByIsbn(isbn === undefined ? '9788520924167' : isbn)
                .then((response) => {
                    console.log(response.items)
                    setBook(response.items)
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
                    {
                        book.map((book: bookType) => {
                            return (
                                <>
                                    <h3 className="text-title">{book.volumeInfo.title}</h3>
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="Imagem capa livro" className="img-book-style" />
                                    <p><strong>Authors:</strong> {book.volumeInfo.authors}</p>
                                    <p><strong>Publisher:</strong> {book.volumeInfo.publisher}</p>
                                    <p><strong>Data de publicação:</strong> {book.volumeInfo.publishedDate}</p>
                                    <p><strong>Número de páginas:</strong> {book.volumeInfo.pageCount}</p>
                                </>
                            )
                        })
                    }
                </div>
                <div className="right-content">
                    <h3>Descrição do livro</h3>
                    {
                        book.map((book: bookType) => {
                            return (
                                <>
                                    <p className="text-description">{book.volumeInfo.description}</p>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}