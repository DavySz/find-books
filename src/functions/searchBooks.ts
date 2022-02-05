
export async function searchBooks(find: string) {

    const url = 'https://www.googleapis.com/books/v1/volumes'
    const maxResults = 'maxResults=12'

    fetch(`${url}?q=${find}&${maxResults}&key=${process.env.REACT_APP_OPEN_API_KEY}`)
        .then(response => response.json())
        .then(result => {
            console.log(result.items)
            return result.items
        })
}