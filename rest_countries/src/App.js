import './App.css';
import Header from './components/Header.js'
import Search from './components/Search.js'
import Filter from './components/Filter.js'
import Country from './components/Country.js'
function App() {
  const countries = [
    {name: 'India', population: 1282538, capital: 'New Delhi'},
    {name: 'Russia', population: 1282538, capital: 'Moscow'},
    {name: 'USA', population: 1282538, capital: 'Washinton DC'},
    {name: 'China', population: 1282538, capital: 'Beijing'},
    {name: 'Brazil', population: 1282538, capital: 'Brasilia'},
    {name: 'Austrailia', population: 1282538, capital: 'Canberra'},
  ]






  return (
    <div className="App">
      <div className='AppHeader'>
        <Header></Header>
        <hr></hr>
      </div>
      <div className='SearchFilter'>
        <Search></Search>
        <Filter></Filter>
      </div>
      
      <div className = 'countryGrid'>
        <div className = 'country'>
          <Country name={countries[0].name} population={countries[0].population} capital={countries[0].capital}></Country>
        </div>
        <div className = 'country'>
          <Country name={countries[1].name} population={countries[1].population} capital={countries[1].capital}></Country>
        </div>
        <div className = 'country'>
          <Country name={countries[2].name} population={countries[2].population} capital={countries[2].capital}></Country>
        </div>
        <div className = 'country'>
          <Country name={countries[3].name} population={countries[3].population} capital={countries[3].capital}></Country>
        </div>
        <div className = 'country'>
          <Country name={countries[4].name} population={countries[4].population} capital={countries[4].capital}></Country>
        </div>
        <div className = 'country'>
          <Country name={countries[5].name} population={countries[5].population} capital={countries[5].capital}></Country>
        </div>
        
      </div>
    </div>
  );
}

export default App;
