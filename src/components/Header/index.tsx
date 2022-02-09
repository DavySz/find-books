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
                    <button>About</button>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}