import { googleBooksApiFindByIsbn } from "../api/googleBooksApi"

export function findBookByIsbn(isbn: string) {
    const booksResults = googleBooksApiFindByIsbn(isbn)
    return booksResults
}