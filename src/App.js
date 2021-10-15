import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter, Route, Redirect} from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import SearchPage from './Components/SearchPage/SearchPage.js';
import ResultPage from './Components/ResultPage/ResultPage.js';
import {reqApi} from './API/reqApi.js'
import {useHistory} from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isFetching: false,
      characters: [],
      requestName: '',
      requestStatus: '',
      requestGender: '',
      requestPage: 1,
      heroesCount: null,
      pages: null
    };

    this.changeState = this.changeState.bind(this);
    this.backToSearch = this.backToSearch.bind(this);
  }

  changeState(name, status, gender, page) {
    this.setState({
      isFetching: true,
      requestName: name,
      requestStatus: status,
      requestGender: gender,
      requestPage: page
    })

    reqApi.getHeroes(name, status, gender, page)
    .then(
      data => {
        this.setState({
            isLoaded: true,
            isFetching: false,
            characters: data.results,
            heroesCount: data.info.count
          });
        },
      error => {
        this.setState({
          isLoaded: true,
          error
        })
      }

    )
  }

  backToSearch() {
    this.setState({
            error: null,
            isLoaded: false,
            isFetching: false,
            characters: [],
            requestName: '',
            requestStatus: '',
            requestGender: '',
            requestPage: '',
            heroesCount: null
    });
  }
  componentDidMount() {

  }

  render() {

    return (
      <div className="App">
        <Sidebar />
        <HashRouter baseName={process.env.PUBLIC_URL}>
          <Route path='/search' render={ () =>
            <SearchPage changeState={this.changeState}/>}
          />
          <Route exact path='/' render={ () =>
              <Redirect to={'search'}  />} 
          /> 
          <Route path='/results/:name?' render={ () => 
            <ResultPage backToSearch={this.backToSearch} state={this.state} 
              isLoaded={this.state.isLoaded} changeState={this.changeState} /> } 
          />

          {this.state.isFetching &&
            <Redirect to={`/results`} />
          }
        </HashRouter>
      </div>
    );
  }

}

export default App;
