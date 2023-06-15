import './App.css';
import React, { Component } from "react";
import ProfSlider from './components/ProfSlider';

const lwSpecs = [
  {
    name: "Leatherworking",
    maxKnowledge: 100
  },
  {
    name: "Leatherworking Discipline",
    maxKnowledge: 30,
    parent: "Leatherworking"
  },
  {
    name: "Shear Mastery of Leather",
    maxKnowledge: 30,
    parent: "Leatherworking Discipline"
  },
  {
    name: "Awl Inspiring Works",
    maxKnowledge: 30,
    parent: "Leatherworking Discipline"
  },
  {
    name: "Bonding and Stitching",
    maxKnowledge: 25,
    parent: "Leatherworking Discipline"
  },
  {
    name: "Curing and Tanning",
    maxKnowledge: 25,
    parent: "Leatherworking Discipline"
  },
  {
    name: "Leather Armor Crafting",
    maxKnowledge: 30,
    parent: "Leatherworking"
  },
  {
    name: "Shaped Leather Armor",
    maxKnowledge: 30,
    parent: "Leather Armor Crafting"
  },
  {
    name: "Leather Chestpieces",
    maxKnowledge: 20,
    parent: "Shaped Leather Armor"
  },
  {
    name: "Leather Helms",
    maxKnowledge: 20,
    parent: "Shaped Leather Armor"
  },
  {
    name: "Leather Shoulderpads",
    maxKnowledge: 20,
    parent: "Shaped Leather Armor"
  },
  {
    name: "Leather Wristwraps",
    maxKnowledge: 20,
    parent: "Shaped Leather Armor"
  },
  {
    name: "Embroidered Leather Armor",
    maxKnowledge: 30,
    parent: "Leather Armor Crafting"
  },
  {
    name: "Leather Legguards",
    maxKnowledge: 20,
    parent: "Embroidered Leather Armor"
  },
  {
    name: "Leather Gloves",
    maxKnowledge: 20,
    parent: "Embroidered Leather Armor"
  },
  {
    name: "Leather Belts",
    maxKnowledge: 20,
    parent: "Embroidered Leather Armor"
  },
  {
    name: "Leather Boots",
    maxKnowledge: 20,
    parent: "Embroidered Leather Armor"
  },
  {
    name: "Mail Armor Crafting",
    maxKnowledge: 30,
    parent: "Leatherworking"
  },
  {
    name: "Large Mail",
    maxKnowledge: 30,
    parent: "Mail Armor Crafting"
  },
  {
    name: "Mail Shirts",
    maxKnowledge: 20,
    parent: "Large Mail"
  },
  {
    name: "Mail Helms",
    maxKnowledge: 20,
    parent: "Large Mail"
  },
  {
    name: "Mail Shoulderguards",
    maxKnowledge: 20,
    parent: "Large Mail"
  },
  {
    name: "Mail Bracers",
    maxKnowledge: 20,
    parent: "Large Mail"
  },
  {
    name: "Intricate Mail",
    maxKnowledge: 30,
    parent: "Mail Armor Crafting"
  },
  {
    name: "Mail Greaves",
    maxKnowledge: 20,
    parent: "Intricate Mail"
  },
  {
    name: "Mail Gauntlets",
    maxKnowledge: 20,
    parent: "Intricate Mail"
  },
  {
    name: "Mail Belts",
    maxKnowledge: 20,
    parent: "Intricate Mail"
  },
  {
    name: "Mail Boots",
    maxKnowledge: 20,
    parent: "Intricate Mail"
  },
  {
    name: "Primordial Leatherworking",
    maxKnowledge: 35,
    parent: "Leatherworking"
  },
  {
    name: "Elemental Mastery",
    maxKnowledge: 25,
    parent: "Primordial Leatherworking"
  },
  {
    name: "Bestial Primacy",
    maxKnowledge: 25,
    parent: "Primordial Leatherworking"
  },
  {
    name: "Decaying Grasp",
    maxKnowledge: 25,
    parent: "Primordial Leatherworking"
  }
]
const jcSpecs = [
  {
    name: "Jewelcrafting",
    maxKnowledge: 100
  },
  {
    name: "Jeweler Toolset Mastery",
    maxKnowledge: 30,
    parent: "Jewelcrafting"
  },
  {
    name: "Saving Slivers",
    maxKnowledge: 30,
    parent: "Jeweler Toolset Mastery"
  },
  {
    name: "Brilliant Baubling",
    maxKnowledge: 30,
    parent: "Jeweler Toolset Mastery"
  },
  {
    name: "Faceting",
    maxKnowledge: 40,
    parent: "Jewelcrafting"
  },
  {
    name: "Air",
    maxKnowledge: 40,
    parent: "Faceting"
  },
  {
    name: "Earth",
    maxKnowledge: 40,
    parent: "Faceting"
  },
  {
    name: "Fire",
    maxKnowledge: 40,
    parent: "Faceting"
  },
  {
    name: "Frost",
    maxKnowledge: 40,
    parent: "Faceting"
  },
  {
    name: "Setting",
    maxKnowledge: 30,
    parent: "Jewelcrafting"
  },
  {
    name: "Jewelry",
    maxKnowledge: 30,
    parent: "Setting"
  },
  {
    name: "Necklaces",
    maxKnowledge: 30,
    parent: "Jewelry"
  },
  {
    name: "Rings",
    maxKnowledge: 30,
    parent: "Jewelry"
  },
  {
    name: "Carving",
    maxKnowledge: 30,
    parent: "Setting"
  },
  {
    name: "Idols",
    maxKnowledge: 30,
    parent: "Carving"
  },
  {
    name: "Stone",
    maxKnowledge: 30,
    parent: "Carving"
  },
  {
    name: "Enterprising",
    maxKnowledge: 30,
    parent: "Jewelcrafting"
  },
  {
    name: "Prospecting",
    maxKnowledge: 25,
    parent: "Enterprising"
  },
  {
    name: "Extravagancies",
    maxKnowledge: 30,
    parent: "Enterprising"
  },
  {
    name: "Glassware",
    maxKnowledge: 45,
    parent: "Enterprising"
  }
]
const alchSpecs = [
  {
    name: "Alchemy",
    maxKnowledge: 100
  },
  {
    name: "Potion Mastery",
    maxKnowledge: 30,
    parent: "Alchemy"
  },
  {
    name: "Frost-Formulated Potions",
    maxKnowledge: 30,
    parent: "Alchemy"
  },
  {
    name: "Air-Formulated Potions",
    maxKnowledge: 30,
    parent: "Alchemy"
  },
  {
    name: "Potion Lore",
    maxKnowledge: 25,
    parent: "Alchemy"
  },
  {
    name: "Potion Experimentation",
    maxKnowledge: 20,
    parent: "Potion Lore"
  },
  {
    name: "Potion Batch Production",
    maxKnowledge: 20,
    parent: "Potion Lore"
  },
  {
    name: "Phial Mastery",
    maxKnowledge: 30,
    parent: "Alchemy"
  },
  {
    name: "Frost-Formulated Phials",
    maxKnowledge: 30,
    parent: "Alchemy"
  },
  {
    name: "Air-Formulated Phials",
    maxKnowledge: 30,
    parent: "Alchemy"
  },
  {
    name: "Phial Lore",
    maxKnowledge: 25,
    parent: "Alchemy"
  },
  {
    name: "Phial Experimentation",
    maxKnowledge: 20,
    parent: "Potion Lore"
  },
  {
    name: "Phial Batch Production",
    maxKnowledge: 20,
    parent: "Potion Lore"
  },
  {
    name: "Alchemical Theory",
    maxKnowledge: 50,
    parent: "Alchemy"
  },
  {
    name: "Transmutation",
    maxKnowledge: 20,
    parent: "Alchemical Theory"
  },
  {
    name: "Chemical Synthesis",
    maxKnowledge: 40,
    parent: "Alchemical Theory"
  },
  {
    name: "Decayology",
    maxKnowledge: 30,
    parent: "Alchemical Theory"
  },
  {
    name: "Resourceful Routines",
    maxKnowledge: 30,
    parent: "Alchemical Theory"
  },
  {
    name: "Inspiring Ambience",
    maxKnowledge: 30,
    parent: "Alchemical Theory"
  }
]
const bsSpecs = [
  {
    name: "Blacksmithing",
    maxKnowledge: 100
  },
  {
    name: "Armorsmithing",
    maxKnowledge: 30,
    parent: "Blacksmithing"
  },
  {
    name: "Large Plate Armor",
    maxKnowledge: 30,
    parent: "Armorsmithing"
  },
  {
    name: "Plate Breastplates",
    maxKnowledge: 30, 
    parent: "Large Plate Armor"
  },
  {
    name: "Shields",
    maxKnowledge: 30,
    parent: "Large Plate Armor"
  },
  {
    name: "Plate Greaves",
    maxKnowledge: 30,
    parent: "Large Plate Armor"
  },
  {
    name: "Sculpted Armor",
    maxKnowledge: 30,
    parent: "Armorsmithing"
  },
  {
    name: "Plate Helms",
    maxKnowledge: 30,
    parent: "Sculpted Armor"
  },
  {
    name: "Plate Pauldrons",
    maxKnowledge: 30,
    parent: "Sculpted Armor"
  },
  {
    name: "Plate Sabatons",
    maxKnowledge: 30,
    parent: "Sculpted Armor"
  },
  {
    name: "Fine Armor",
    maxKnowledge: 30,
    parent: "Armorsmithing"
  },
  {
    name: "Plate Belts",
    maxKnowledge: 30,
    parent: "Fine Armor"
  },
  {
    name: "Plate Vambraces",
    maxKnowledge: 30,
    parent: "Fine Armor"
  },
  {
    name: "Plate Gauntlets",
    maxKnowledge: 30,
    parent: "Fine Armor"
  },
  {
    name: "Weaponsmithing",
    maxKnowledge: 30,
    parent: "Blacksmithing"
  },
  {
    name: "Blades",
    maxKnowledge: 30,
    parent: "Weaponsmithing"
  },
  {
    name: "Short Blades",
    maxKnowledge: 30,
    parent: "Blades"
  },
  {
    name: "Long Blades",
    maxKnowledge: 30,
    parent: "Blades"
  },
  {
    name: "Hafted",
    maxKnowledge: 30,
    parent: "Weaponsmithing"
  },
  {
    name: "Maces & Hammers",
    maxKnowledge: 30,
    parent: "Hafted"
  },
  {
    name: "Axes, Picks & Polearms",
    maxKnowledge: 30,
    parent: "Hafted"
  },
  {
    name: "Specialty Smithing",
    maxKnowledge: 40,
    parent: "Blacksmithing"
  },
  {
    name: "Toolsmithing",
    maxKnowledge: 30,
    parent: "Specialty Smithing"
  },
  {
    name: "Stonework",
    maxKnowledge: 20,
    parent: "Specialty Smithing"
  },
  {
    name: "Smelting",
    maxKnowledge: 20,
    parent: "Specialty Smithing"
  },
  {
    name: "Hammer Control",
    maxKnowledge: 30,
    parent: "Blacksmithing"
  },
  {
    name: "Safety Smithing",
    maxKnowledge: 30,
    parent: "Hammer Control"
  },
  {
    name: "Poignant Plans",
    maxKnowledge: 30,
    parent: "Hammer Control"
  }
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
