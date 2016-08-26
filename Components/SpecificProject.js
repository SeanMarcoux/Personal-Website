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
				<Header/><br/>
				<Images images={this.state.project.imageURLs}/>
				<Description project={this.state.project}/>
			</div>
		)
	}
}));

var Images = React.createClass({
	componentDidMount(){
	      $("#owl-carousel").owlCarousel({
	     
	          navigation : true, // Show next and prev buttons
	          slideSpeed : 300,
	          paginationSpeed : 400,
	          singleItem:true
	     
	          // "singleItem:true" is a shortcut for:
	          // items : 1, 
	          // itemsDesktop : false,
	          // itemsDesktopSmall : false,
	          // itemsTablet: false,
	          // itemsMobile : false
	      });
	},

	render() {
		var key=0;
		return (
			<div  style={{textAlign:'center'}}>
				<div id="owl-carousel" className="owl-carousel owl-theme">
					{this.props.images.map(function(imageURL)
			      		{return (
			      			<div key={key++} className="item"><img style={{marginLeft:'20%', marginRight:'20%'}} src={"../Images/"+imageURL}/></div>
			      		)}
		      		)}
				</div>
			</div>
		)
	}
});

var Description = React.createClass({
	render() {
		var link = this.constructGithubLink();
		
		return (
			<div style={{textAlign: 'center'}}>
				<h1>{this.props.project.name}</h1>
				{this.props.project.type}<br/>
				Team of {this.props.project.teamSize}<br/>
				{link}
				<hr/>
				{this.props.project.description}
				<DetailedDescription details={this.props.project.breakDown}/>
			</div>
		)
	},

	constructGithubLink() {
		if(this.props.project.git)
			return <a href={this.props.project.git}>Git Hub</a>
		return "No Git Hub link available for this project"
	}
});

var DetailedDescription = React.createClass({
	render() {
		var key=0;
		return (
			<ul>
				{this.props.details.map(function(detail)
		      		{return (
		      			<li key={key++}>{detail}</li>
		      		)}
		      	)}
			</ul>
		)
	},
});