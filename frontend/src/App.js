import './App.css';
import React, { Component, useState } from "react";
import ProfSlider from './components/ProfSlider';
import Specs from './data/Specs.json';
import Crafts from './data/Crafts.json';

function App(props) {
  // this.state = {
  //   currentProf: "lw",
  //   knowList: lwSpecs,
  //   knowledge: new Map(),
  // };
  const [currentProf, setCurrentProf] = useState("lw");
  const [knowledge, setKnowledge] = useState(new Map());

  const tabSwitch = (prof) => {
      setCurrentProf(prof);
    };

  const renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        { Specs.map((spec) => 
          (
            <span
              className={currentProf === spec.id ? "nav-link active" : "nav-link"}
              onClick={() => tabSwitch(spec.id)}
            >
              { spec.name }
            </span>
          ))}
      </div>
    );
  };

  // const renderCrafts = () => {
  //   let currentCrafts = Crafts.filter((craftList) => {
  //     return currentProf === craftList.id;
  //   });
  //   return (
  //     <div className=""></div>
  //   );
  // }

  // const renderItems = () => {
  //   const newSpecs = this.state.knowList;

  //   return newSpecs.map((spec) => (
  //     <li
  //       key={spec.name}
  //       className="list-group-item flex justify-content-between align-items-center"
  //     >
  //       <ProfSlider 
  //         spec={spec}
  //         knowledge={ this.state.knowledge.has(spec.name) ? this.state.knowledge.get(spec.name) : 0 } 
  //         updateData={(specName, newValue) => this.handleSliderChange(specName, newValue)}
  //       />
  //     </li>
  //   ));
  // };

  //   const handleSliderChange = (specName, newValue) => {
  //     this.setState({ knowledge: new Map(this.state.knowledge.set(specName, newValue)) });
  //   }

  return (
    <main className="container dark">
      <h1 className="text-uppercase text-center">Professions Calculator</h1>
      <div className="row">
        <div className="mx-auto">
          <div className="card p-3 dark">
            {renderTabList()}
            <ul className="list-group list-group-flush border-top-0 dark">
              {/* {renderCrafts()} */}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
