import React from 'react'
import { withRouter } from 'react-router'
import Header from './Header'
var projectsJson = require('json!../Data/projects.json')

export default React.createClass({
  render() {
  	console.log(projectsJson)
  	var index = 0
    return (
      <div>
      <Header/>
      	{projectsJson.map(function(project)
      		{return (
      			<Project key={index} project={project} projectid={index++}/>
      		)}
      	)}
      </div>
    )
  }
});

var Project = withRouter(React.createClass({
	render() {
		var color = 'red'
		if(this.props.project.type=='Personal project')
			color='blue'
		return (
			<table style={{marginLeft:'20%', width:'60%', border: '1px solid orange', borderCollapse:'collapse'}}><tbody>
				<tr>
					<td style={{border: '1px solid orange', width:'30%'}}><a onClick={this.goToProjectPage}><img src={"../Images/"+this.props.project.imageURLs[0]} style={{height:"300px", width:"300px"}}/></a></td>
					<td style={{paddingLeft: '20px', border: '1px solid orange'}}>
						<div style={{color:color}}>{this.props.project.type}</div><br/>
						Name: <a onClick={this.goToProjectPage}>{this.props.project.name}</a><br/>
						Team of {this.props.project.teamSize}<br/>
						Description: {this.props.project.description}
					</td>
				</tr>
			</tbody></table>
		)
	},

	goToProjectPage() {
		this.props.router.push("/projects/" + this.props.projectid)
	}
}))