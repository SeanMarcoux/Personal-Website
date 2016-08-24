import React from 'react'
import { withRouter } from 'react-router'
import Header from './Header'
var projectsJson = require('json!../Data/projects.json')
//import fs from 'fs';

//import projects from '../Data/projects'

export default withRouter(React.createClass({
	getInitialState() {
		return {
			project: projectsJson[this.props.params.projectid]
		}
	},
	componentWillMount()
	{
		//If they came here with some invalid project id, redirect them to the projects page
		if(this.state.project==undefined)
		{
			this.props.router.push("/projects")
		}
	},
	render() {
		return (
			<div>
				<Header/>
				<div style={{textAlign:'center'}}><img style={{width: '500px'}} src={"../Images/"+this.state.project.imageURL}/></div>

			</div>
		)
	}
}));