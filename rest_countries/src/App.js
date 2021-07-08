import './App.css';
import { useState } from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Search from './components/Search.js'
import Filter from './components/Filter.js'
import CountryGrid from './components/CountryGrid.js'

function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  return (
    <div className="App">
      
      <div className='AppHeader'>
        <Header></Header>
        <hr></hr>
      </div>

      <div className='SearchFilter'>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}></Search>
        <Filter></Filter>
      </div>

      <CountryGrid searchValue = {searchQuery}></CountryGrid>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
