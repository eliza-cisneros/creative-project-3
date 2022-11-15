import React from 'react';
import ReactDOM from 'react-dom';
const Home = () => {

  class DadJokes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        question: '',
        answer: '',
        isQuestion: null,
        punchDelivered: true,
        buttonText: 'New Joke',
        imageSrc: '',
        punchline: ''
      }

      this.getNewJoke = this.getNewJoke.bind(this);
    }

    getNewJoke(event) {
      this.setState({ answer: "" });
      var current = this;
      console.log(this.state.punchDelivered);
      if (this.state.punchDelivered) {
        var url = "https://icanhazdadjoke.com";
        fetch('https://icanhazdadjoke.com/', {
            headers: {
              'Accept': 'application/json'
            }
          })
          .then(function(response) {
            return response.json();
          })
          .then(function(json) {
            console.log(json.joke);
            let joke = json.joke;
            console.log(current.state)
            current.setState({ isQuestion: joke.includes('?') });
            let halves = joke.split(/[?.]+/);
            console.log(halves);
            if (current.state.isQuestion) {
              halves[0] += '?';
            }
            else {
              halves[0] += ".";
            }
            let hasAnswer = halves[halves.length - 1] != "" || halves.length > 2;
            current.setState({ question: halves[0] });
            current.setState({ punchline: halves.slice(1).join("") });
            //current.setState({ answer: halves.slice(1).join("") });


            if (hasAnswer) {
              current.setState({ punchDelivered: false });
              current.setState({ buttonText: "Reveal Punchline" });
            }
            else {
              let index = Math.floor(Math.random() * 11) + 1;
              //current.setState({imageSrc: "/multi/src/pages/Gifs/" + index + ".gif" });
            }
          });
      }

      else {
        this.setState({ answer: this.state.punchline });
        this.setState({ punchDelivered: true });
        this.setState({ buttonText: "New Joke" });
        let index = Math.floor(Math.random() * 11) + 1;
      }

    }

    render() {
      return (
        <div>
                  
                    <div class="main-section-container">
                      
                      <div class="header">
                        <h1 class = "section">
                          Impress your dad with a joke that matches his humor.
                        </h1>
                        <p class="section subtitle">
                          Or feel free to just entertain yourself for hours. It all starts with a click.
                        </p>
                      </div> 
                      
                      <div class="section">
                        <div class="joke">
                          <div>
                            <p>{this.state.question}</p>
                          </div>
                          <br/>
                          <div>
                            <p id="punchLine">{this.state.answer}</p>
                          </div>
                        </div>
                      </div>
                      
                  
                  
                      <div class="section">
                            <button id="button" onClick={this.getNewJoke}>{this.state.buttonText}</button>
                      </div>
                      <div class= "section">
                            <img src={this.state.imageSrc}/>
                      </div>
                    </div>
                
                
                    <div class="section footer">
                      <a href="https://github.com/eliza-cisneros/creative-project-3.git"> Check out Eliza's github repository here</a>
                    </div>
                    
                  
                
                </div>
      );
    }
  }


  return (
    <div>
        <DadJokes />
      </div>
  );
};

export default Home;
