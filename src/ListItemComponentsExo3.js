import { useState } from "react";
import PropTypes from "prop-types";

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