import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import Home from './Home'
import Projects from './Projects'

export default React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
      </Router>
    )
  }
})