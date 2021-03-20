import React, { Component } from 'react';
import './App.css';
import UserOutput from './Useroutput/Useroutput';

class App extends Component {

  state = {
    user: [
      { userName: 'Aditya' },
      { userName: 'Rahul' },
      { userName: 'Ajay' }
    ]
  }

  usernameChangeHandler = (event) => {
    this.setState([
      { userName: 'Aditya' },
      { userName: event.target.value },
      { userName: 'Ajay' }
    ])
  }

  render() {
    return (
      <div className="App">
        <UserOutput
          name={this.state.user[0].userName} />
        <UserOutput
          name={this.state.user[1].userName} />
        <UserOutput
          name={this.state.user[2].userName} />
      </div>
    );
  }
}

export default App;
