import React, { Component } from 'react'

export default class GoogleAuth extends Component{

test=()=>{

    fetch('http://dummy.restapiexample.com/api/v1/employees',{method: 'GET',})
    .then((response) => response.json())
    .then((responseJson) => {
      
        console.log('this is the data==>'+JSON.stringify(responseJson))
      }).catch((error) => {console.error(error)})
}


    render(){
        return(
           <>

           <div class="wrapper">

           <a href="" class="button button--google">Login With Google</a>

           </div>
           <button onClick={this.test}>get data</button>
           </>
        )
        
    }
}
