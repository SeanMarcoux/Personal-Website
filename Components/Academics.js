import React from 'react'
import { Accordion, Panel } from 'react-bootstrap'
import Header from './Header'
var schoolsJson = require('json!../Data/schools.json')
var takenCoursesJson = require('json!../Data/taken-courses.json')
var currentCoursesJson = require('json!../Data/current-courses.json')

export default React.createClass({
  render() {
    return (
      <div>
      <Header/>
      <Schools/><br/>
	  <Courses courses={currentCoursesJson} title="Courses in Progress"/>
	  <Courses courses={takenCoursesJson} title="Taken Courses"/>
      </div>
    )
  }
});

var Schools = React.createClass({
	render() {
		var index = 0
		return (
			<div>
				{schoolsJson.map(function(school)
					{return (
						<School key={index++} school={school}/>
					)}
				)}
			</div>
		)
	}
})

var School = React.createClass({
	render() {
		return (
			<table style={{marginLeft:'20%', width:'60%'}}><tbody>
				<tr>
					<td style={{width:'30%'}}>
						<img src={"../Images/"+this.props.school.imageURL} style={{height:"70px", width:"auto"}}/>
					</td>
					<td style={{paddingLeft: '20px'}}>
						{this.props.school.name} ({this.props.school.startDate} - {this.props.school.endDate})<br/>
						{this.props.school.program}<br/>
						{this.props.school.gradeType}: {this.props.school.grade}
					</td>
				</tr>
			</tbody></table>
		)
	}
})

var Courses = React.createClass({
	render() {
		var index=0;
		return (
			<div>
				<h2 style={{textAlign:"center"}}>{this.props.title}</h2>
				<Accordion style={{marginLeft:'20%', width:'60%'}}>
					{this.props.courses.map(function(course)
						{return (
							<Panel header={course.course} key={index} eventKey={index++} collapsible>
								{course.description}
							</Panel>
						)}
					)}
				</Accordion>
			</div>
		)
	}
})