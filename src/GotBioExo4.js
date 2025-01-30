import { useEffect, useState } from "react";
import { List } from "./ListComponentsExo3";

export function Characters() {

  //const serverUrl = "http://localhost:8080/exos"
  const serverUrl = "https://iai3-react-34db9d7c5920.herokuapp.com/exos"

  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch(serverUrl)
      .then(res => res.json())
      .then(json => {
        setCharacters(json)
      });    
  },[]);

  const handleClick = (index) => {
    setSelectedIndex(index)
  }
  if(!characters.length>0){
    return (
      <div>
        <p>Loading data...</p>
      </div>
    )
  }else{
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

}
