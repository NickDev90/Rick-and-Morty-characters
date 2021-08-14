import React from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
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
      requestGender: ''
    };

    this.changeState = this.changeState.bind(this);
    this.backToSearch = this.backToSearch.bind(this);
  }

  changeState(name, status, gender) {
    this.setState({
      isFetching: true,
      requestName: name,
      requestStatus: status,
      requestGender: gender

    })

    reqApi.getHeroes(name, status, gender)
    .then(
      data => {
        console.log(data)
        this.setState({
            isLoaded: true,
            isFetching: false,
            characters: data.results,
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
            requestGender: ''
    });
  }
  componentDidMount() {

  }

  render() {

    return (
      <div className="App">
        <Sidebar />
        <BrowserRouter>
          <Route path='/search' render={ () =>
            <SearchPage changeState={this.changeState}/>}
          />
          <Route exact path='/' render={ () =>
              <Redirect to={'search'}  />} 
          /> 
          <Route path='/results/:name?' render={ () => 
            <ResultPage backToSearch={this.backToSearch} state={this.state}
              isLoaded={this.state.isLoaded} changeState={this.changeState}/> } 
          />

          {this.state.isFetching &&
            <Redirect to={`/results`} />
          }
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
