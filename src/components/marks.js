import React, { Component } from 'react'

export default class marks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mroll : this.props.roll
             
        };
    }
     static getDerivedStateFromProps(props,state){
         console.log ("get derived state from props")
         console.log( props, state);
  
      if(props.roll !== state.mroll){
         return {mroll : props.roll}
        }
           return null ;
     }
    
    render() {
        console.log("marks Rendered")
        return (
            <div>
            <h1> {this.state.mroll}</h1>
            </div>
        )
    }
}
