import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCharacter } from './characters-slice'
import { Title } from "./Title";
import { List } from "./ListComponentsExo3";

export function Characters() {

  const serverUrl = "https://iai3-react-34db9d7c5920.herokuapp.com/exos"

  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [characters, setCharacters] = useState([])

  const dispatch = useDispatch()

  const handleClick = (index) => {
    setSelectedIndex(index)
    const surname = characters[index].surname;
    dispatch(setSelectedCharacter(surname))
  }

  useEffect(() => {
    fetch(serverUrl)
      .then(res => res.json())
      .then(json => {
        setCharacters(json)
      });    
  },[]);

  if(characters==[]){
    return (
      <div>
        <p>Loading data...</p>
      </div>
    )
  }else{
    return (
      <div>
        <header>
          <Title/>
        </header>
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
