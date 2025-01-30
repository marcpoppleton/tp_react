import React from "react";
import { BillMurayClass, BillMurayFunction } from "./BillMurray";

export class DemoRender extends React.Component{

    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            calls: 0
        };
    }
  
    componentDidUpdate(){
        const {calls} = this.state;
        console.log(`parent componentDidUpdate ${calls}`);
    }
    
    componentDidMount(){
        setInterval(() => {
            const {calls} = this.state;
            this.setState({calls: calls+1})
        },1000)
    }
    
    render(){
        const {calls} = this.state;
        console.log(`parent render ${calls}`);
        return(
            <BillMurayFunction/>
        )
    }
}