import './DetailPage.css'
import Country from './Country.js'
import allCountriesObject from './allCountriesData.js'
import {Link} from 'react-router-dom'


function DetailPage(props){
    let countryName = props.countryName;
    const countryDetail = allCountriesObject.filter(country => { return country.name.toLowerCase() === countryName.toLowerCase()})
    console.log(countryDetail);
    const countryData = countryDetail[0];
    return(
        <div>
            <Link to = "/">
                <div className = 'backBtn'>
                Back
                </div>
            </Link>
            
            <h1>Requested Country: {countryData.name}</h1>
            <div className='flagDetail'>
                <img src = {countryData.flag} alt = 'flag' className='flagImageDetail'/>
            </div>
            <div className='countryDataDiv'>
                <h1>{countryData.name}</h1>
                <div className='countryDetailDiv'>
                <div className='countryInfo'>Native Name: <span className='countryInfoData'>{countryData.nativeName}</span></div>
                <div className='countryInfo'>Population: <span className='countryInfoData'>{countryData.population}</span></div>
                <div className='countryInfo'>Region: <span className='countryInfoData'>{countryData.region}</span></div>
                <div className='countryInfo'>Sub Region: <span className='countryInfoData'>{countryData.subregion}</span></div>
                <div className='countryInfo'>Capital: <span className='countryInfoData'>{countryData.capital}</span></div>
                <div className='countryInfo'>Top Level Domain: <span className='countryInfoData'>{countryData.topLevelDomain}</span></div>
                <div className='countryInfo'>
                    Currencies: 
                    <span className='countryInfoData'>{countryData.currencies[0].name}</span>
                </div>
                <div className='countryInfo'>
                    Languages: 
                    <span className='countryInfoData'>{countryData.languages[0].name}</span>
                </div>
                
                <div className='countryInfo'>
                    Border Countries: 
                    <span className='countryInfoData'>{countryData.borders[0]}</span>
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default DetailPage;