import './Filter.css';

function Filter(props) {
    return (
        <div className='filter'>
            <form>
            <select name="region" id="regionsFilter" value={props.filterQuery} onChange={e => props.setFilterQuery(e.target.value)} className="form-select">
                <option value="" disabled selected hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            {/* <button type="submit">Filter</button> */}
            </form>
        </div>
    );
}

export default Filter;