import React, { Component } from 'react'
import axios from 'axios'

export class student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             error : ""
        }
    }
    
    componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
     .then(response => {
         console.log(response)
         this.setState({posts : response.data})
     }).catch(error => {
         console.log(error)
         this.setState({errorMsg :'Error retreiving data'})

     })

    
}
    
    render() {
        const{posts, errorMsg} = this.state
        return (
            <div>
               List of posts{
                   posts.lenght ?
                   posts.map(post =>  <div key={post.id}>{post.title}</div>) :
                   null
               }
             {errorMsg ? <div>{errorMsg}</div> : null}

            </div>
        )
    }
}

export default student
