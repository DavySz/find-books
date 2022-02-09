import { googleBooksApiFindByIsbn } from "../api/googleBooksApi"

export function findBookById(id: string) {
    const booksResults = googleBooksApiFindByIsbn(id)
    return booksResults
}