import { createRoot } from 'react-dom/client';
import "./index.css";
import { List as ListExo1} from "./ListComponentsExo1";
import {characters} from "./characters-data";
import { Characters as CharactersExo2} from './GotBioExo2';
import { Characters as CharactersExo3} from './GotBioExo3';
import { Characters as CharactersExo4} from './GotBioExo4';
import { Characters as CharactersExo5} from './GotBioExo5';
import store from './store';
import { Provider } from 'react-redux';

const exo1 = 
  <div>
    <ListExo1 items={characters}/>
  </div>

const exo2 =
  <div>
    <CharactersExo2/>
  </div>

const exo3 =
  <div>
    <CharactersExo3/>
  </div>

const exo4 =
  <div>
    <CharactersExo4/>
  </div>

const exo5 =
  <Provider store={store}>
    <CharactersExo5/>
  </Provider>


const container = document.getElementById('root');
const root = createRoot(container);
//root.render(exo1);
//root.render(exo2);
root.render(exo3);
//root.render(exo4);
//root.render(exo5);