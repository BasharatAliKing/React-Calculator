import React, { Component } from 'react'

export default class Button extends Component {
     state={
         value:0
     }
     HandleClick = ()=>{
         this.setState({value: this.state.value + 1 })
     }
    render() {
        return (
            <div>
                  HandleClick= {this.HandleClick}
            </div>
        )
    }
}
