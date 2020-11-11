import React from 'react';
import GameButton from './GameButton';
import './App.css';


class App extends React.Component {
constructor(props){
super(props);
  this.state = {
    playerScore : 3,
    computerScore : 5
  };

  this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickReset = () => {
    console.log('CLICKED');
    
    this.setState({
      playerScore:0,
      computerScore:0

    });
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock Paper Scissor Game</h1><p id="time"></p>
      </header>
      
      <div className="score-board">
          <div id = "player-label" className="badge">player</div>
          <div id="computer-label" className="badge">comp</div>
          <span style={{}}>{this.state.playerScore}</span>:<span>{this.state.computerScore}</span>
        </div>
   
      <div id="game">
      
      <img class="computer" src="computer.png" alt="computer" />

      

      <div class="output">Result of the current Game</div>

      
      <div class="button-wrapper">
        <GameButton name="rock" />
        <GameButton name="paper" />
        <GameButton name="scissors" />
      </div>
      
      <p id="action-message"> Make your move</p>

      <button class="restart" onClick={this.handleClickReset}>Restart</button>
    </div>  
  </div>
  );
}
}

export default App;
