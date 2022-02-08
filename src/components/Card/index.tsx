import { volumeInfoType } from '../../types/googleBooksType'
import notFoundPNG from '../../assets/not-found.png'
import { Link } from 'react-router-dom'
import './styles.css'

export function Card({
    industryIdentifiers,
    publishedDate,
    imageLinks,
    authors,
    title,
}: volumeInfoType) {

    return (
        <div className="card-container">
            <div className="card-content">
                <div className="book">
                    {
                        imageLinks ?
                            <img src={imageLinks.thumbnail} alt={title} className='book-image' /> :
                            <img src={notFoundPNG} alt={title} className='book-image' />
                    }
                </div>
                <div className="book-informations">
                    <h5>{title}</h5>
                    <p className="details">
                        <span>Author: </span>
                        <span>{authors}</span>
                    </p>
                    <p className="details">
                        <span>Published: </span>
                        <span>{publishedDate}</span>
                    </p>
                    <button className='button-more'>
                        <Link to={`/book/datails/${industryIdentifiers[1].identifier}`} className="link-more">More &gt;</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}