import './styles.css'

type CardProps = {
    title: string;
    authors: string;
    publishedDate: string;
    publiser: string;
}

export function Card() {
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="book">
                    <img src="" alt="" />
                </div>
                <div className="book-informations">
                    <h5>Sherlock Holmes</h5>
                    <p>Authors: Sir Arthur Conan Doyer</p>
                    <p>Data de publicação: 1996</p>
                    <button>Continuar</button>
                </div>
            </div>
        </div>
    )
}