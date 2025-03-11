import React, { Component } from 'react'
import  "./Newcard.css"

export  class Newcard extends Component {
  render() {
    let {title,description,imageurl,newsurl,author,date}=this.props //this is props 
    return (
      <div className={`card`}>
        <div className = {`card-image` }>
          <img src={!imageurl?"https://c.pxhere.com/photos/b8/5a/cat_baby_cats-1210151.jpg!d":imageurl} alt="" />
        </div>
        <div className={`card-content`}>
          <div  className = {`card-title`}>
            <h3>{title}...</h3>
          </div>
  
          <div className = {`card-des`}>
            <p >{description}...</p>
          </div>

          <div className="c-button">
          <button className = {`card-button`}  target='_blank' > <a  href={newsurl}>Read More </a></button>
          </div>
          <div className='author'>
            <small> By {!author?"unknown":author} on {new Date (date).toGMTString()} </small>
        </div>
        </div>
      </div>
    )
  }
}

export default Newcard;
