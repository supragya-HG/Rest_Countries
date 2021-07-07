import './CountryGrid.css'
import Country from './Country.js'
import allCountriesObject from './allCountriesData.js'


function CountryGrid(){
    let randomID = [];
    while(randomID.length < 6){
        var r = Math.floor(Math.random() * 100) + 1;
        if(randomID.indexOf(r) === -1) randomID.push(r);
    }
    let countries = randomID.map( (i) => {return allCountriesObject[i]});
      

    return (
        <div className = 'countryGrid'>
            <div className = 'country'>
            <Country name={countries[0].name} population={countries[0].population} capital={countries[0].capital} region = {countries[0].region} flagUrl = {countries[0].flag}></Country>
            </div>
            <div className = 'country'>
            <Country name={countries[1].name} population={countries[1].population} capital={countries[1].capital} region = {countries[1].region} flagUrl = {countries[1].flag}></Country>
            </div>
            <div className = 'country'>
            <Country name={countries[2].name} population={countries[2].population} capital={countries[2].capital} region = {countries[2].region} flagUrl = {countries[2].flag}></Country>
            </div>
            <div className = 'country'>
            <Country name={countries[3].name} population={countries[3].population} capital={countries[3].capital} region = {countries[3].region} flagUrl = {countries[3].flag}></Country>
            </div>
            <div className = 'country'>
            <Country name={countries[4].name} population={countries[4].population} capital={countries[4].capital} region = {countries[4].region} flagUrl = {countries[4].flag}></Country>
            </div>
            <div className = 'country'>
            <Country name={countries[5].name} population={countries[5].population} capital={countries[5].capital} region = {countries[5].region} flagUrl = {countries[5].flag}></Country>
            </div>
      </div>

    );
}

export default CountryGrid;