import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter, Redirect} from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import SearchPage from './Components/SearchPage/SearchPage.jsx';
import ResultPage from './Components/ResultPage/ResultPage.jsx';
 import {reqApi} from './API/reqApi.js'

// import {getCharacters} from './API/reqApi.js'


    const getCharacters = fetch(`https://rickandmortyapi.com/api/character`).
    then( response => response.json());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      isFetching: false,
      characters: [],
      requestName: '',
      requestGender: ''
    };

    // this.setState = this.setState.bind(this);
    this.changeState = this.changeState.bind(this);
    this.backToSearch = this.backToSearch.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeState(name, status, gender) {
    reqApi.getHeroes(name, status, gender)
    .then(
      data => {
        console.log(data)
        this.setState({
            isLoaded: true,
            isFetching: true,
            characters: data.results,
            requestName: name,
            requestStatus: status,
            requestGender: gender
          });
        },
      error => {
        this.setState({
          isLoaded: true,
          error
        })
      }

    )
    // this.props.history.push('results')

  }

  backToSearch() {
    this.setState({
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

  componentDidUpdate() {
    // if (this.state.isLoaded) {
    //   return <Redirect to={`/results`} />
    // }
    console.log(this.state)
  }


  render() {

    return (
      <div className="App">
        <Sidebar />
          <BrowserRouter>
          <Route path='/search' render={ () =>
            <SearchPage changeState={this.changeState}/>}/>

            {this.state.isFetching &&
              <Redirect to={`/results`} />
            }
            
          <Route path='/results' render={ () => 
            <ResultPage backToSearch={this.backToSearch} state={this.state}
              characters={this.state.characters} isLoaded={this.state.isLoaded}/> } />
          </BrowserRouter>
      </div>
    );
  }

}

export default App;
