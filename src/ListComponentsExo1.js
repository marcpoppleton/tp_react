import React from "react";

export class List extends React.Component {

    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <ListItem line_1={item.surname}
                            line_2={item.name}/>
                ))}
            </ul>
        );
    }
}

export class ListItem extends React.Component {

    render() {
        return (
            <div> 
               <h2>{this.props.line_1}</h2>
                <h3>{this.props.line_2}</h3>
            </div>
        );
    }
}