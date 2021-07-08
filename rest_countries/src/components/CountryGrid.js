import './CountryGrid.css'
import Country from './Country.js'
import allCountriesObject from './allCountriesData.js'
import {Link} from 'react-router-dom'

// function shuffle(array) {
//     var currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
// }


function CountryGrid(props){
    let countries = new Array(250);
    for( let i = 0; i<250; i++){
        countries[i]=i;
    }
    // shuffle(countries);
    countries = countries.map( (i) => {return allCountriesObject[i]});
    // console.log(props.searchQuery);

    let searchValue = props.searchValue.toString();
    if(searchValue !== ''){
        countries = countries.filter( country => {
            return country.name.toLowerCase().includes(searchValue.toLowerCase());
        });
    }
    
    let filterValue = props.filterValue.toString();
    if(filterValue !== '' && filterValue !== 'All'){
        countries = countries.filter( country => {
            return country.region.toLowerCase().includes(filterValue.toLowerCase());
        });
    }
    
    
    let countryGridDiv = [];

    if(countries.length === 0){
        countryGridDiv.push(
            <div>
                <h1>Oops, No such Country Exists!!!</h1>
            </div>
        )
    }

    for( let i = 0; i < countries.length; i++){
        countryGridDiv.push(
            <Link to = {`/countryDetail/${countries[i].name}`}>
                <div className = 'country'>
                <Country name={countries[i].name} population={countries[i].population} capital={countries[i].capital} region = {countries[i].region} flagUrl = {countries[i].flag}></Country>
                </div>
            </Link>
        );
    }

    // function countriesFilterOnChange(event){
    //     console.log(event);
    //     // this.setState({
    //     //     this.state.searchValue = event.target.value
    //     // })
    // }

    // const filteredCountries = this.state.countries.filter( country => {
    //     return country.name.toLowerCase().includes(this.state.searchValue.toLowerCase());
    // })

    return (
        <div>

        <div className = 'countryGrid'>
            {countryGridDiv}
        </div>

    </div>
    );
}

export default CountryGrid;