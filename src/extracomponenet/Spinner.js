import React, { Component } from 'react'
import './Spinner.css'
import Walk from './Walk.gif'
export default class spinner extends Component {
  render() {
    return (
      <div className={`spinner`}>
        <img src={Walk} alt="Loading .." />
      </div>
    )
  }
}
