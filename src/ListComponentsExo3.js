import { useState } from "react";
import PropTypes from "prop-types";

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

export function ListItem(props){

    const toggle = () => {
        props.onClick(this);
    };

    return (
        <div className={`${props.selected ? "on" : "off"}`} onClick={toggle}>
            <h2>{props.line_1}</h2>
            <h3>{props.line_2}</h3>
        </div>
    );

}

ListItem.propTypes = {
    line_1: PropTypes.string.isRequired,
    line_2: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool
};