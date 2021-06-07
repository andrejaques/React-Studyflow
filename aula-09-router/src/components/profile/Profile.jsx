import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <p>My Profile: {this.props.name}</p>
      </div>
    )
  }
}
