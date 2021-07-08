import './Search.css';

function Search(props) {
    return (
        <div className='search'>
            <form>
                <input 
                    value = {props.searchQuery}
                    onInput={e => props.setSearchQuery(e.target.value)}
                    type='text' 
                    placeholder='Search For Countries...' 
                    name="s" 
                />
                {/* <button type="submit">Search</button> */}
            </form>
        </div>
    );
}

export default Search;