import './DetailPage.css'
import CountriesDataObject from './allCountriesData.js'
import {Link, useHistory} from 'react-router-dom'
const allCountriesObject = CountriesDataObject[0];
const mapCountryCode = CountriesDataObject[1];

function DetailPage(props){
    let history = useHistory();
    let countryName = props.countryName;
    const countryDetail = allCountriesObject.filter(country => { return country.name.toLowerCase() === countryName.toLowerCase()})
    // console.log(countryDetail);
    const countryData = countryDetail[0];

    let borderCountries = [], countryCurrencies = [], countryLanguages = [];
    if(countryData){
        countryData.borders.forEach( country =>{
            let CName = mapCountryCode[country];
            borderCountries.push(
                <Link to = {`/countryDetail/${CName}`}>
                    <button className='BorderCountryBtn'>
                        {CName.split('(')[0]}
                    </button>
                </Link>
            )
        });

        if(countryData.borders.length === 0){
            borderCountries.push(<span className='countryInfoData'>No Bordering Countries</span>)
        }

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
                {/* <Link to = "/">
                    <div className = 'backBtn'>
                    Back
                    </div>
                </Link> */}
                <>
                    <button onClick={() => history.goBack()}>Back</button>
                </>
                <h1>No Such Country Exists!!!</h1>
            </div>
        );
    }
    
    return(
        <div>
            <div className = 'backBtn'>
                {/* <Link to = "/">
                    <button>Home</button>
                </Link> */}
                <>
                    <button onClick={() => history.goBack()}>Back</button>
                </>
            </div>
            {/* <h1>Requested Country: {countryData.name}</h1> */}
            <div className='detailGrid'>
                <div className='flagDetail'>
                    <img src = {countryData.flag} alt = 'flag' className='flagImageDetail'/>
                </div>
                <div className='dataDetail'>
                    <div className='countryNameDetail'>
                        <h2>{countryData.name}</h2>
                    </div>
                    <div className='countryDataDiv'>
                        <div className='countryInfo'>Native Name: &#160;<span className='countryInfoData'>{countryData.nativeName}</span></div>
                        <div className='countryInfo'>Population: &#160;<span className='countryInfoData'>{countryData.population}</span></div>
                        <div className='countryInfo'>Region: &#160;<span className='countryInfoData'>{countryData.region}</span></div>
                        <div className='countryInfo'>Sub Region: &#160;<span className='countryInfoData'>{countryData.subregion}</span></div>
                        <div className='countryInfo'>Capital: &#160;<span className='countryInfoData'>{countryData.capital}</span></div>
                        <div className='countryInfo'>Top Level Domain: &#160;<span className='countryInfoData'>{countryData.topLevelDomain}</span></div>
                        <div className='countryInfo'>
                            Currencies: &#160;
                            {countryCurrencies}
                        </div>
                        <div className='countryInfo'>
                            Languages: &#160;
                            {countryLanguages}
                        </div>
                        
                    </div>
                        <div className='borderCountryInfo'>
                            Border Countries: &#160;
                            <div className='borderCountryGrid'>
                                {borderCountries}
                            </div>
                        </div>
                    <div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DetailPage;