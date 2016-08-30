import React from 'react'
import ReactDOM from "react-dom"
import PDF from 'react-pdf'
import Header from './Header'

export default React.createClass({
  render() {
    return (
      <div>
      <Header/>
      	<PreviewCV/>
      </div>
    )
  }
});

var PreviewCV = React.createClass({
	render() {
		return (
			<div style={{textAlign: 'center'}}>
				<a href="../PDFs/CV.pdf">Download CV</a><br/>
				<PDF file="../PDFs/CV.pdf" page={1} scale={1.5}/><br/>
      			<PDF file="../PDFs/CV.pdf" page={2} scale={1.5}/>
			</div>
		)
	}
});