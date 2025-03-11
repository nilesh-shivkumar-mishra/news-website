import React, { Component } from 'react'
import Navbar from './extracomponenet/Navbar'
import News from './extracomponenet/News'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  pageSize=6; // this is variable variable can asses by this.variable

  state ={
    progress:10
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
     <Router>
     <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Navbar/>
      <Switch>
        <Route exact path="/" key="g" ><News pageSize={this.pageSize} setProgress={this.setProgress} country= 'us'  category = "general" /></Route>
        <Route exact path="/business" key="business"><News  pageSize={this.pageSize} setProgress={this.setProgress} country= 'us'  category = "business" /></Route>
        <Route exact path="/entertainment" key="entertainment"><News  pageSize={this.pageSize} setProgress={this.setProgress} country= 'us'  category = "entertainment" /></Route>
        <Route exact path="/health" key="health"><News  pageSize={this.pageSize} setProgress={this.setProgress} country= 'us'  category ="health" /></Route>
        <Route exact path="/science" key="science"><News  pageSize={this.pageSize} setProgress={this.setProgress} country= 'us'  category = "science" /></Route>
        <Route exact path="/sports" key="sports"><News   pageSize={this.pageSize} setProgress={this.setProgress} country= 'us'  category = "sports" /></Route>
        <Route exact path="/technology" key="technology"><News  pageSize={this.pageSize} setProgress={this.setProgress} country= 'us'  category = "technology"  /></Route>
        <Route exact path="/general" key="general"><News  pageSize={this.pageSize} setProgress={this.setProgress} country= 'us'  category = "general"  /></Route>
      </Switch>
      </Router>
      </div>
    )
  }
}
