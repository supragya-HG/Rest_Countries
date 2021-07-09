import './Search.css';

function Search(props) {
    return (
        <div className='search'>
            <form>
            {/* <i class="fas fa-search"></i> */}
                <input 
                    value = {props.searchQuery}
                    onInput={e => props.setSearchQuery(e.target.value)}
                    type='text' 
                    placeholder=' Search For Countries...' 
                    // placeholder='&#xF002; Search For Countries...' 
                    name="s" 
                    className='form-control iconAdd'
                />
                {/* <button type="submit">Search</button> */}
            </form>
        </div>
    );
}

export default Search;