import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import Cartoons from "./cards.json";
import "./App.css";

class App extends Component {
  state = {
    cartoons,
    clickedCartoonIds: [],
    score: 0,
    goal: 8,
    status: ""
  };

  shuffleScoreCard = id => {
    let clickedCartoonIds = this.state.clickedCartoonIds;

    if(clickedCartoonIds.includes(id)){
      this.setState({ clickedCartoonIds: [], score: 0, status:  "Game Over! You Dont Have What It Takes Goodbye. Click to play again if you so choose!" });
      return;
    }else{
      clickedCartoonIds.push(id)

      if(ClickedCartoonIds.length === 8){
        this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", ClickedCartoonIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ Cartoons, ClickedCartoonIds, score: ClickedCartoonIds.length, status: " " });

      for (let i = Cartoons.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [Cartoons[i], Cartoons[j]] = [Cartoons[j], Cartoons[i]];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clickster</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.Cartoons.map(Cartoon => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={Cartoon.id}
              key={Cartoon.id}
              image={Cartoon.image}
            />
          ))}
        </Wrapper>
        <footer>
          <p>Take A Look Here<a href="https://github.com/Morganmmbrabley91/Clicky-Game" target="_blank" rel="WubaLuba Dub Dub"></a>.</p>
        </footer>
    </div>
    );
  }
}

export default App;
