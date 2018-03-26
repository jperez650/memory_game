import React, { Component } from "react";
import GokuCard from "./components/GokuCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import goku from "./goku.json";
import "./App.css";


class App extends Component {
  constructor () {
    super()
    this.state = {
      score: 0,
      prevScore: 0,
      goku: goku
    }
  }

  // Map over this.state.goku and render a GokuCard component for each friend object
  render() {
    return (
      <Wrapper>
      <h1 className="title">Memory Game</h1>
      <div className="jumbotron">
        <h2>Click on the images to get a point. <br></br>Make sure you don't click on the same image twice, <br></br> If you do your score will go back to 0.</h2>
      </div>
      <div className="score">Stats<br></br>Your Score {this.state.score} | {this.state.prevScore} Highest Score</div>
        {this.state.goku.map((gokuu, index) => (
          <GokuCard key={index}
            image={gokuu.image}
            index={index}
            handleClick={(index) => {
              this.handleClick(index);
            }}
          />
        ))}
      </Wrapper>
    );
  }

  shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

  handleClick (index) {
    let {goku, score, prevScore} = this.state;



    if(!goku[index].clicked) {
      goku[index].clicked = true;
      score++;
    } else {
      goku = goku.map((gokuu, index) => {
        gokuu.clicked = false;
        return gokuu;
      });
      prevScore = score > prevScore ? score : prevScore;
      score = 0;
    }

    goku = this.shuffle(goku)

    this.setState({
      goku, score, prevScore
    })

  }
}

export default App;
