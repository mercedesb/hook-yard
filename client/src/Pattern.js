import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo';

let Pattern = class Pattern extends Component {

  render () {
    const { data } = this.props
    const { loading, error, pattern } = data

    if (loading) {
      return <p>Loading...</p>
    }
    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <div className='pattern'>
        <div>
          <img alt={pattern.title} src={`${pattern.picture.url}?w=200&h=200&fit=fill`} />
          <h1>{pattern.title}</h1>
        </div>
        <h4>Recommended Hook Size: {pattern.hookSize}</h4>
        <p> {pattern.steps} </p>
      </div>
    )
  }
}

const graphQLQuery = gql`
{
  pattern(id="") {
    title
    hookSize
    steps
    picture {
      title
      url
    }
  }
}
`

const getGraphQLEnhancedComponent = graphql(graphQLQuery);

Pattern = getGraphQLEnhancedComponent(Pattern)

export { Pattern }