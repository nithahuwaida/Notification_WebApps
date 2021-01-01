import React, { Component } from 'react'
import { permissionToReceiveNotification } from './firebase';

export default class App extends Component {
  
  componentDidMount(){
    permissionToReceiveNotification()
  }

  render() {
    return (
      <div>
        <p>Hello :)</p>
      </div>
    )
  }
}