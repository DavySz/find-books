import { useNavigate } from 'react-router-dom'
import './styles.css'

export function Header() {
    const navigate = useNavigate();

    function goToHome() {
        navigate('/')
    }

    return (
        <div className="container">
            <div className="content">
                <div className="img">
                    <div onClick={goToHome} className="logo">
                        <h1>fb</h1>
                    </div>
                </div>
                <div className="options">
                    <button className='button-header'>
                        <a href="https://github.com/DavySz/find-books/blob/main/README.md" className="link-about" target="_blank" rel="noopener noreferrer">About</a>
                    </button>
                    <button className='button-header'>
                        <a href="https://ayo.so/davy_sz" className="link-about" target="_blank" rel="noopener noreferrer">Contact</a>
                    </button>
                </div>
            </div>
        </div>
    )
}