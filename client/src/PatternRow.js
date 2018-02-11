import React, { Component } from 'react'

export default class PatternRow extends Component {

  render () {
    const { pattern } = this.props

    return (
      <div className='pattern-row'>
        <img alt={pattern.title} src={`${pattern.picture.url}?w=200&h=200&fit=fill`} />
        <div className="pattern-detail">
          <h2>{pattern.title}</h2>
        </div>
      </div>
    )
  }
}