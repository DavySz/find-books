import googleBooksApi from '../api/googleBooksApi'

export function searchBooks(find: string) {
    const booksResults = googleBooksApi(find)
    return booksResults
}