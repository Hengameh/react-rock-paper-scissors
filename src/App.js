import React from "react";
import PlayerChoice from "./components/PlayerChoice";
import "./App.css";
import Time from "./components/Time";

const CHOICES = ["rock", "paper", "scissors"];

function getRandomChoice() {
  const randomNum = Math.random(); // random num from 0-1
  const random0to2 = Math.floor(randomNum * 3);
  return CHOICES[random0to2];
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerScore: 0,
      computerScore: 0,
      resultMessage: "Pick one to start...",
    };

    this.handleClickChoice = this.handleClickChoice.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClickReset = () => {
    console.log("CLICKED");

    this.setState({
      playerScore: 0,
      computerScore: 0,
      resultMessage: "Start a new Game",
    });
  };

  handleClickChoice(playerChoice) {
    const computerChoice = getRandomChoice();
    if (playerChoice === computerChoice) {
      this.setState({
        resultMessage: "Its a tie!",
      });
      return;
    }

    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      // Player won
      this.setState({
        playerScore: this.state.playerScore + 1,
        resultMessage: "Player won this round!",
      });
    } else {
      // Computer won
      this.setState({
        computerScore: this.state.computerScore + 1,
        resultMessage: "Computer won this round!",
      });
    }
  }

  componentDidUpdate() {
    if (this.state.playerScore === 5) {
      this.setState({
        resultMessage: "Congrats, you won the game!",
      });
      this.handleClickReset();
    } else if (this.state.computerScore === 5) {
      this.setState({
        resultMessage: "Computer won the game!",
      });
      this.handleClickReset();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rock Paper Scissor Game</h1>
          <Time />
        </header>

        <div className="score-board">
          <div id="player-label" className="badge">
            player
          </div>
          <div id="computer-label" className="badge">
            comp
          </div>
          <span style={{}}>{this.state.playerScore}</span>:
          <span>{this.state.computerScore}</span>
        </div>

        <div id="game">
          <img className="computer" src="computer.png" alt="computer" />

          <div className="output">
            {this.state.resultMessage && <p>{this.state.resultMessage}</p>}
          </div>

          <div className="button-wrapper">
            <PlayerChoice name="paper" onClickChoice={this.handleClickChoice} />
            <PlayerChoice name="rock" onClickChoice={this.handleClickChoice} />
            <PlayerChoice
              name="scissors"
              onClickChoice={this.handleClickChoice}
            />
          </div>

          <p id="action-message"> Make your move</p>

          <button className="restart" onClick={this.handleClickReset}>
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default App;
