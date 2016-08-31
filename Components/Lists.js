import React from 'react'

export default class DetailedDescription extends React.Component{
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
  }
};