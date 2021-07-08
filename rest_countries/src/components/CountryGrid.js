import './CountryGrid.css'
import Country from './Country.js'
import allCountriesObject from './allCountriesData.js'


function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


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
    
    
    
    let countryGridDiv = [];
    for( let i = 0; i < countries.length; i++){
        countryGridDiv.push(
            <div className = 'country'>
            <Country name={countries[i].name} population={countries[i].population} capital={countries[i].capital} region = {countries[i].region} flagUrl = {countries[i].flag}></Country>
            </div>
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
            {/* <CountryGrid countries={this.sortCountries(filteredCountries)} countriesFilterOnChange={this.countriesFilterOnChange} searchValue = {this.state.searchValue}></CountryGrid> */}


            {/* <div className = 'country'>
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
        </div> */}
            {countryGridDiv}
      </div>

    </div>
    );
}

export default CountryGrid;