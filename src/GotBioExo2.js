import React from "react";
import { List } from "./ListComponentsExo3";
import { characters } from "./characters-data";

export class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
    };
  }

  handleClick(index) {
    this.setState({ selected: index });
  }

  render() {
      return (
        <div>
          <aside id="menu">
            <List
              items={characters}
              fields={["surname", "name"]}
              onClick={this.handleClick.bind(this)}
            />
          </aside>
          <section id="main-content">
              {(this.state.selected > -1) ? 
                (<p>{characters[this.state.selected].resume}</p>) : 
                (<p></p>)
              }
          </section>
        </div>
      );
  }
}
