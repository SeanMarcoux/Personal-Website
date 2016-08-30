import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from './Home'
import Projects from './Projects'
import SpecificProject from './SpecificProject'
import CV from './CV'

export default React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/projects/:projectid" component={SpecificProject}/>
        <Route path="/cv" component={CV}/>
      </Router>
    )
  }
})