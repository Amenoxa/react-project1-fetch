import React, { Component } from 'react';
import { CardList } from './components/cardlist/card-list.component'
import { SearchBox } from './components/searchbox/searchbox.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [] ,
      searchField: ""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ players: users }))
  }

render() {
  const { players, searchField } = this.state;
  const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className='App'>
      <h1>Authors Lounge</h1>
      <SearchBox
        placeholder='Search Author' 
        handleChange={ e => 
          this.setState({ searchField: e.target.value})}
      />
      <CardList players={filteredPlayers} />

    </div>
  );
}
}
export default App;
