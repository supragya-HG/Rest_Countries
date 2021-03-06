import './Country.css'

function Country(props){
    // const countryName = 'India';
    // const countryPopulation = 1220000000;
    // const countryCapital = 'New Delhi';

    return (
        <div className = 'countryDiv'>
            <div className='flag'>
                <img src = {props.flagUrl} alt = 'flag' className='flagImage'/>
            </div>
            {/* <div className='countryDataDiv'> */}
                <div className='countryName'>{props.name}</div>
                <div className='countryInfo'>Population: <span className='countryInfoData'>{props.population}</span></div>
                <div className='countryInfo'>Region: <span className='countryInfoData'>{props.region}</span></div>
                <div className='countryInfo'>Capital: <span className='countryInfoData'>{props.capital}</span></div>
            {/* </div> */}
        </div>
    );
}

export default Country;