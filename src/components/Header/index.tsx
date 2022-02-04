import './styles.css'

export function Header() {
    return (
        <div className="container">
            <div className="content">
                <div className="img">
                    <h1>fb</h1>
                </div>
                <div className="options">
                    <button>About</button>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}