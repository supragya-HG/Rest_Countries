import './Header.css';

function Header(props) {
    return (
        <div>
            <div className='header'>
                <h1 className='heading'>Where in the world?</h1>
                <button className='mode-button btn btn-outline-secondary' onClick = {props.themeTogglerFn}>
                <i class="far fa-moon"></i>Switch Themes
                </button>
            </div>
            <hr></hr>
        </div>
    );
}

export default Header;