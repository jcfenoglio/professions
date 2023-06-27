import './App.css';
import React, { Component } from "react";
import ProfSlider from './components/ProfSlider';

const lwSpecs = []
const jcSpecs = []
const alchSpecs = []
const bsSpecs = []
const enchSpecs = []
const inscSpecs = []
const tailorSpecs = [
  {
    name: "Tailoring",
    maxKnowledge: 100
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProf: "lw",
      knowList: lwSpecs,
      knowledge: new Map(),
    };
  }

  handleSliderChange = (specName, newValue) => {
    this.setState({ knowledge: new Map(this.state.knowledge.set(specName, newValue)) });
  }

  tabSwitch = (prof) => {
    switch(prof) {
      case "jc":
        return this.setState({ currentProf: "jc", knowList: jcSpecs });
      case "alch":
        return this.setState({ currentProf: "alch", knowList: alchSpecs});
      case "bs":
        return this.setState({ currentProf: "bs", knowList: bsSpecs });
      case "ench":
        return this.setState({ currentProf: "ench", knowList: enchSpecs });
      case "insc":
        return this.setState({ currentProf: "insc", knowList: inscSpecs });
      case "tailor":
        return this.setState({ currentProf: "tailor", knowList: tailorSpecs });
      default:
        return this.setState({ currentProf: "lw", knowList: lwSpecs });
    }
  }

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span
          className={this.state.currentProf === "lw" ? "nav-link active" : "nav-link"}
          onClick={() => this.tabSwitch("lw")}
        >
          Leatherworking
        </span>
        <span
          className={this.state.currentProf === "bs" ? "nav-link active" : "nav-link"}
          onClick={() => this.tabSwitch("bs")}
        >
          Blacksmithing
        </span>
        <span
          className={this.state.currentProf === "tailor" ? "nav-link active" : "nav-link"}
          onClick={() => this.tabSwitch("tailor")}
        >
          Tailoring
        </span>
        <span
          className={this.state.currentProf === "jc" ? "nav-link active" : "nav-link"}
          onClick={() => this.tabSwitch("jc")}
        >
          Jewelcrafting
        </span>
        <span
          className={this.state.currentProf === "alch" ? "nav-link active" : "nav-link"}
          onClick={() => this.tabSwitch("alch")}
        >
          Alchemy
        </span>
        <span
          className={this.state.currentProf === "ench" ? "nav-link active" : "nav-link"}
          onClick={() => this.tabSwitch("ench")}
        >
          Enchanting
        </span>
        <span
          className={this.state.currentProf === "insc" ? "nav-link active" : "nav-link"}
          onClick={() => this.tabSwitch("insc")}
        >
          Inscription
        </span>
      </div>
    );
  };

  renderItems = () => {
    const newSpecs = this.state.knowList;

    return newSpecs.map((spec) => (
      <li
        key={spec.name}
        className="list-group-item flex justify-content-between align-items-center"
      >
        <ProfSlider 
          spec={spec}
          knowledge={ this.state.knowledge.has(spec.name) ? this.state.knowledge.get(spec.name) : 0 } 
          updateData={(specName, newValue) => this.handleSliderChange(specName, newValue)}
        />
      </li>
    ));
  };

  render() {
    return (
      <main className="container">
        <h1 className="text-uppercase text-center my-4">Professions Calculator</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
