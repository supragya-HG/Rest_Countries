import './Header.css';

function Header() {
    return (
        <div className='header'>
            <h1 className='heading'>Where in the world?</h1>
            <button className='mode-button'>
                <i></i>Dark Mode
            </button>
        </div>
    );
}

export default Header;