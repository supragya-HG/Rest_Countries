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
// import Footer from './components/Footer.js'
import Search from './components/Search.js'
import Filter from './components/Filter.js'
import CountryGrid from './components/CountryGrid.js'
import DetailPage from './components/DetailPage.js'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles.js";
import { lightTheme, darkTheme } from "./components/Themes.js"

function App() {
  const { address } = window.location;
  const query = new URLSearchParams(address).get('s');
  const regionFilter = new URLSearchParams(address).get('region');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [filterQuery, setFilterQuery] = useState(regionFilter || '');

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }

  return(
    <Router>

      <div>
        <Switch>
          
          <Route path="/countryDetail">
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
            <GlobalStyles/>
                <CountryDetail  themeTogglerFn = {themeToggler}/>
                </>
            </ThemeProvider>
          </Route>


          <Route path="/"> 
              <div className="App">

              <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
              <>
              <GlobalStyles/>

                <div className='AppHeader'>
                  <Header themeTogglerFn = {themeToggler}></Header>
                  
                </div>

                <div className='SearchFilter'>
                  <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}></Search>
                  <Filter filterQuery={filterQuery} setFilterQuery={setFilterQuery}></Filter>
                </div>

                <CountryGrid searchValue = {searchQuery} filterValue = {filterQuery}></CountryGrid>
                
                {/* <Footer></Footer> */}
              </>
              </ThemeProvider>
              
              </div>
          </Route>

        </Switch>
      </div>

    </Router>
  );
  
}


function CountryDetail(props) {
  let match = useRouteMatch();

  return (
    <div className="App">
      
      <div className='AppHeader'>
        <Header themeTogglerFn = {props.themeTogglerFn}></Header>
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
