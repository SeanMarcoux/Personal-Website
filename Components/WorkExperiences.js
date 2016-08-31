import React from 'react'
import Header from './Header'
import DetailedDescription from './Lists'
var techWorkJson = require('json!../Data/tech-work.json')
var nonTechWorkJson = require('json!../Data/non-tech-work.json')

export default React.createClass({
  render() {
    return (
      <div>
      <Header/><br/>
      	<WorkGroup header='Tech Work' workJson={techWorkJson}/>
      	<WorkGroup header='Other Work' workJson={nonTechWorkJson}/>
      </div>
    )
  }
});

var WorkGroup = React.createClass({
	render() {
	  	var index = 0
		return (
			<div>
				<h2 style={{textAlign: 'center'}}>{this.props.header}</h2>
				{this.props.workJson.map(function(term)
		      		{return (
		      			<Term key={index++} term={term}/>
		      		)}
		      	)}
			</div>
		)
	}
});

var Term = React.createClass({
	render() {
		return (
			<table style={{marginLeft:'20%', width:'60%', border: '1px solid orange', borderCollapse:'collapse'}}><tbody>
				<tr>
					<td style={{border: '1px solid orange', width:'30%'}}>
						<img src={"../Images/"+this.props.term.imageURL} style={{height:"auto", width:"300px"}}/>
					</td>
					<td style={{paddingLeft: '20px', border: '1px solid orange'}}>
						Company: {this.props.term.company}<br/>
						Job Title: {this.props.term.title}<br/>
						{this.props.term.startDate} - {this.props.term.endDate}<br/>
						<DetailedDescription details={this.props.term.breakDown}/>
					</td>
				</tr>
			</tbody></table>
		)
	}
})