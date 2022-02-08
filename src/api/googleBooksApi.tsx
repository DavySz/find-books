
async function googleBooksApi(find: string) {

    const url = 'https://www.googleapis.com/books/v1/volumes'
    const maxResults = 'maxResults=24'
    const booksResults = await fetch(`${url}?q=${find}&${maxResults}&key=${process.env.REACT_APP_OPEN_API_KEY}`)
    const booksResultsJson = await booksResults.json()
    return booksResultsJson

}

async function googleBooksApiFindByIsbn(Isbn: string) {

    const url = 'https://www.googleapis.com/books/v1/volumes'
    const booksResults = await fetch(`${url}?q=isbn:${Isbn}&key=${process.env.REACT_APP_OPEN_API_KEY}`)
    const booksResultsJson = await booksResults.json()
    return booksResultsJson
}

export {
    googleBooksApi,
    googleBooksApiFindByIsbn
}