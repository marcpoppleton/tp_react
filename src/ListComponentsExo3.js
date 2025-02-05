import { useState } from "react";
import PropTypes from "prop-types";
import { ListItem } from "./ListItemComponentsExo3";

export function List(props){
    
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const handleClick = (index) => {
        setSelectedIndex(index);
        props.onClick(index);
    }
    
    return (
        <ul>
            {props.items.map((item, index) => (
                <ListItem line_1={item[props.fields[0]]} line_2={item[props.fields[1]]} key={index} onClick={()=>{handleClick(index)}} selected={selectedIndex === index ? true : false}
                />
            ))}
        </ul>
    );
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    fields: PropTypes.arrayOf(String).isRequired,
    onClick: PropTypes.func.isRequired
};