import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Search from './components/Search.js'
import Filter from './components/Filter.js'
import CountryGrid from './components/CountryGrid.js'

function App() {
  
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
      
      <CountryGrid></CountryGrid>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
