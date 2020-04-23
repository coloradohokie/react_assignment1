import React from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends React.Component {


  state = {
    userName: "Abraham Lincoln"
  }

  updateUserNameHandler = (event) => {
    this.setState( {
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput userName={this.state.userName} updateUserName={this.updateUserNameHandler} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
