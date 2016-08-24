import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from './Home'
import Projects from './Projects'
import SpecificProject from './SpecificProject'

export default React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/projects/:projectid" component={SpecificProject}/>
      </Router>
    )
  }
})