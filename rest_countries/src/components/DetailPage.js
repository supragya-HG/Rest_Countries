import './DetailPage.css'
import allCountriesObject from './allCountriesData.js'
import {Link} from 'react-router-dom'


function DetailPage(props){
    let countryName = props.countryName;
    const countryDetail = allCountriesObject.filter(country => { return country.name.toLowerCase() === countryName.toLowerCase()})
    console.log(countryDetail);
    const countryData = countryDetail[0];

    let borderCountries = [], countryCurrencies = [], countryLanguages = [];
    if(countryData){
        countryData.borders.forEach( country =>{
            borderCountries.push(
                <Link to = {`/countryDetail/${country}`}>
                    <div className='BorderCountry'>{country}</div>
                </Link>
            )
        });

        for(let i=0; i<countryData.currencies.length; i++){
            countryCurrencies.push(
                <span className='countryInfoData'>{countryData.currencies[i].name}</span>
            )
            if(i !== countryData.currencies.length - 1){
                countryCurrencies.push(<span>, </span>)
            }
        }

        for(let i=0; i<countryData.languages.length; i++){
            countryLanguages.push(
                <span className='countryInfoData'>{countryData.languages[i].name}</span>
            )
            if(i !== countryData.languages.length - 1){
                countryLanguages.push(<span>, </span>)
            }
        }
    }
    else{
        return(
            <div>
                <Link to = "/">
                    <div className = 'backBtn'>
                    Back
                    </div>
                </Link>

                <h1>No Such Country Exists!!!</h1>
            </div>
        );
    }

    return(
        <div>
            <Link to = "/">
                <div className = 'backBtn'>
                Home
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
                    {countryCurrencies}
                </div>
                <div className='countryInfo'>
                    Languages: 
                    {countryLanguages}
                </div>
                
                <div className='countryInfo'>
                    Border Countries: 
                    {borderCountries}
                </div>
                
                </div>
            </div>
        </div>
    );
};

export default DetailPage;