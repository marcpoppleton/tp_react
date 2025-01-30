import {useRef, Component} from "react";

export class BillMurayClass extends Component{
    
    jour = 0;
    
    render(){
        this.jour++
        return(
            <div>
                <h2>Jour {this.jour}: Oui, le rongeur, C'est le jour de la marmotte!</h2>
            <img width="600" src="./murray.webp"/>
        </div>
        )
    }
}

export function BillMurayFunction(){
    
    const jour = useRef(0);

    const incrementDay = () => {
        jour.current++;
        return jour.current;
    }
    
    return(
    <div>
        <h2>Jour {incrementDay()}: Oui, le rongeur, C'est le jour de la marmotte!</h2>
        <img width="600" src="./murray.webp"/>
    </div>
    )
}



