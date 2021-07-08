import './Header.css';

function Header(props) {
    return (
        <div className='header'>
            <h1 className='heading'>Where in the world?</h1>
            <button className='mode-button' onClick = {props.themeTogglerFn}>
                <i></i>Switch Themes
            </button>
        </div>
    );
}

export default Header;