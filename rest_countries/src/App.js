import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Search from './components/Search.js'
import Filter from './components/Filter.js'
import CountryGrid from './components/CountryGrid.js'
import DetailPage from './components/DetailPage.js'

function App() {
  const { address } = window.location;
  const query = new URLSearchParams(address).get('s');
  const regionFilter = new URLSearchParams(address).get('region');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [filterQuery, setFilterQuery] = useState(regionFilter || '');

  return(
    <Router>

      <div>
        <Switch>
          
          <Route path="/countryDetail">
            <CountryDetail />
          </Route>


          <Route path="/"> 
              <div className="App">
                <div className='AppHeader'>
                  <Header></Header>
                  <hr></hr>
                </div>

                <div className='SearchFilter'>
                  <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}></Search>
                  <Filter filterQuery={filterQuery} setFilterQuery={setFilterQuery}></Filter>
                </div>

                <CountryGrid searchValue = {searchQuery} filterValue = {filterQuery}></CountryGrid>
                
                <Footer></Footer>
              </div>
          </Route>

        </Switch>
      </div>

    </Router>
  );
  
}


function CountryDetail() {
  let match = useRouteMatch();

  return (
    <div className="App">
      
      <div className='AppHeader'>
        <Header></Header>
        <hr></hr>
      </div>

      {/* <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul> */}

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:countryId`}>
          <Detail/>
        </Route>
        <Route path={match.path}>
          <h3>Please select a Country</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Detail() {
  let { countryId } = useParams();
  return <DetailPage countryName = {countryId}/>;
}

export default App;
