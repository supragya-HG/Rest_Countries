import './Country.css'
import indFlag from '../Flags/ind.svg'

function Country(props){
    // const countryName = 'India';
    // const countryPopulation = 1220000000;
    // const countryCapital = 'New Delhi';

    return (
        <div className = 'countryDiv'>
            <div className='flag'>
                <img src = {indFlag} alt = 'logo' className='flagImage'/>
            </div>
            <div className='countryName'>{props.name}</div>
            <div className='countryInfo'>Population: <span className='countryInfoData'>{props.population}</span></div>
            <div className='countryInfo'>Region: <span className='countryInfoData'>{props.capital}</span></div>
            <div className='countryInfo'>Capital: <span className='countryInfoData'>{props.capital}</span></div>
        </div>
    );
}

export default Country;