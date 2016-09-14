import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
    	<div style={{width:'100%', height:'8%', backgroundColor:'black', color:'grey', fontSize:'30px', paddingTop:'1%', paddingLeft:'10px'}}>
        Sean Marcoux
        <Links/>        
      </div>
    )
  }
});

var Links = React.createClass({
  render() {
    return (
      <div style={{float:'right', marginRight:'2%'}}>
        <Link to="/projects" style={{color:'grey', padding:'5px'}}>Projects</Link>
        <Link to="/work" style={{color:'grey', padding:'5px'}}>Work Experience</Link>
		<Link to="/academics" style={{color:'grey', padding:'5px'}}>Academics</Link>
        <Link to="/cv" style={{color:'grey', padding:'5px'}}>CV</Link>
        <Link to="/about" style={{color:'grey', padding:'5px'}}>About Me</Link>
      </div>
    )
  }
})