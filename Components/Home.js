import React from 'react'
import Header from './Header'

export default React.createClass({
  render() {
    return (
    	<div>
      		<Header/>
      		<WelcomeImage/>
      		<Icons/>
      	</div>
    )
  }
});

var WelcomeImage = React.createClass({
	render() {
		return (
			<div style={{backgroundImage:'url(../Images/main_bg_image.jpg)', height:'50%', width:'100%', color:'white', textAlign:'center'}}>
				<div style={{paddingTop:'8%', fontSize:'50px'}}>Welcome!</div>
			</div>
		)
	}
})

var Icons = React.createClass({
	render() {
		return (
			<table style={{textAlign:'center'}}>
				<tr>
					<td><CVIcon/></td>
					<td><ProjectsIcon/></td>
					<td><AboutIcon/></td>
				</tr>
			</table>
		)
	}
});

var ProjectsIcon = React.createClass({
	render() {
		return (
			<Icon image='../Images/projects_icon.png' title='Projects'>
				My various personal and academic projects
			</Icon>
		)
	}
});

var CVIcon = React.createClass({
	render() {
		return (
			<Icon image='../Images/projects_icon.png' title='CV'>
				My CV to view and/or download
			</Icon>
		)
	}
});

var AboutIcon = React.createClass({
	render() {
		return (
			<Icon image='../Images/projects_icon.png' title='About Me'>
				Learn about and contact me
			</Icon>
		)
	}
});

var Icon = React.createClass({
	render() {
		return(
			<div style={{marginLeft:'35%', marginRight:'35%', paddingTop:'10px'}}>
				<image src={this.props.image} style={{height:'12%'}}/><br/>
				<div style={{fontSize:'20px'}}>{this.props.title}</div>
				{this.props.children}
			</div>
		)
	}
});