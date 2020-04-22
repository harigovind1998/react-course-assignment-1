import React, {Component} from 'react';
import UserInput from "./components/UserInput"
import UserOutput from "./components/UserOutput"

class App extends Component{
  state = {
    person: [
      {username: "Hari"},
      {username: "Rekha"}
    ]
  }

  changeUsernameHandler =(event)=>{
    this.setState(
      {
        person: [
          {username: event.target.value},
          {username: "Rekha"}
        ]
      }
    );
  }
  render(){
    return (
      <div className="App">
        <UserInput changeUsername={this.changeUsernameHandler} username={this.state.person[0].username}/>
        <UserOutput username={this.state.person[0].username}/>
        <UserOutput username={this.state.person[1].username}/>
      </div>
    );
  }
}
  
export default App;
