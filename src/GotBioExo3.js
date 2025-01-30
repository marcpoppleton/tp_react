import { useState } from "react";
import { List } from "./ListComponentsExo3";
import { characters } from "./characters-data";

export function Characters() {

  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleClick = (index) => {
    setSelectedIndex(index)
  }

  return (
    <div>
      <aside id="menu">
        <List
          items={characters}
          fields={["surname", "name"]}
          onClick={handleClick}
        />
      </aside>
      <section id="main-content">
        {(selectedIndex > -1) ? 
          (<p>{characters[selectedIndex].resume}</p>) : 
          (<p></p>)
        }
      </section>
    </div>
  );
}
