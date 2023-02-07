import React from "react";

import "./App.css";
import sacha from "./sacha.jpg";

class App extends React.Component {
  //  const [Person, setPerson] = useState([{fullName='Fedi Touzri'} ,{bio='I love anime and im so passionate about it '} , {imgSrc={fedi}} ,{profession='senior web developer'} ,{bool=false}]);

  constructor(props) {
    super(props);
    this.state = {
      fullName: "Sacha Ketchum",
      bio: "Sacha Ketchum est le personnage principal de Pokémon, la série, et de divers mangas basés sur l'anime. C'est un Dresseur Pokémon originaire de Bourg Palette qui rêve de devenir Maître Pokémon. Son prénom japonais, Satoshi vient du créateur de la licence, Satoshi Tajiri. ",
      imgSrc: sacha,
      profession: " dresseur pokémon ",
      bool: false,
      counter: 0,
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  };

  // clearInterval = () => {
  //   this.clearInterval(this.counter);
  //   this.counter = 0;
  // };

  toggle() {
    this.setState({ bool: !this.state.bool });
    if (!this.state.bool) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.bool ? (
          <div>
            <h1 style={{ color: " FireBrick" }}>
              {" "}
              This is Pokemon main character{" "}
            </h1>
            <h2 style={{ color: "Crimson" }}>Sacha Ketchum's bio</h2>
            <h3 style={{ color: "gray" }}>
              This is {this.state.fullName}. {this.state.bio} .
            </h3>
            <img
              src={this.state.imgSrc}
              width="400px"
              height="400px"
              alt="profile image"
            />
            <h2 style={{ color: "Crimson" }}>Profession</h2>
            <h3 style={{ color: "gray" }}>{this.state.profession}</h3>
          </div>
        ) : null}
        <br /> <br />
        {this.state.bool ? (
          <div>
            {this.state.counter}
            <br />
            <br />
            <button onClick={() => this.toggle()}>Hide</button>
          </div>
        ) : (
          <button onClick={() => this.toggle()}>Show</button>
        )}
        <br />
      </div>
    );
  }
}
export default App;
