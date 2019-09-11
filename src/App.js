import React, { Component } from 'react';
import axios from 'axios';
import Container from './Components/Container';
import Header from './Components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import apiKey from './config';


class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: [],
      term: ''
    };
  }

  //default cats when loading
  componentDidMount() {
    this.performSearch('cats');
  }


  //function to perform the search for a given query
  performSearch = (query) => {
    if (query !== this.state.term) {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                pictures: response.data.photos.photo,
                term: query
            });
        })
        .catch(error => {
          console.log(error);
        });
    } 
  }


  

  render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Route exact path="/" render={props => <Header onSearch={this.performSearch} />}/>
          <Switch>
            <Route path="/search/:query" render={props => <Header onClick={this.performSearch(props.match.params.query)} />} />
          </Switch>
          <Route path="/" render={props => <Container data={this.state.pictures}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
