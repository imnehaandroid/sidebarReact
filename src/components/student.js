import React, { Component } from 'react'
import Marks from './marks'


 export default class student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            roll: 101 
             
        };
    }
      
    clickHandle = () => {

        console.log("click button");
         this.setState ({roll : 102});
    
    }
    render(){

        console.log("Student Rendered")
        return(  
            <div>
             <Marks roll = {this.state.roll} />
            <button onClick={this.clickHandle} >chnage</button>
            </div>

         ) }

    
}