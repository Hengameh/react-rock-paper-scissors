import React from 'react';
import GameButton from './GameButton';
import './App.css';
import Time from './Time';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playerScore : 3,
      computerScore : 5
    }

    this.handleClickChoice = this.handleClickChoice.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }
    
  handleClickReset = () => {
    console.log('CLICKED');
    
    this.setState({
      playerScore:0,
      computerScore:0
    });
  }

  handleClickChoice(){

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rock Paper Scissor Game</h1>
          <Time/>
        </header>
        
        <div className="score-board">
            <div id = "player-label" className="badge">player</div>
            <div id="computer-label" className="badge">comp</div>
            <span style={{}}>{this.state.playerScore}</span>:<span>{this.state.computerScore}</span>
          </div>
    
        <div id="game">
        
        <img className="computer" src="computer.png" alt="computer" />
      
        <div className="output">Result of the current Game</div>
    
        <div className="button-wrapper">
          <GameButton name="rock" onClick={this.handleClickChoice}/>
          <GameButton name="paper" onClick={this.handleClickChoice}/>
          <GameButton name="scissors" onClick={this.handleClickChoice}/>
        </div>
        
        <p id="action-message"> Make your move</p>

        <button className="restart" onClick={this.handleClickReset}>Restart</button>
      </div>  
    </div>
    );
  }
}

export default App;
