import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
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
        <h4>{`Recommended Hook Size: ${pattern.hookSize}`}</h4>
        <p> {pattern.steps} </p>
      </div>
    )
  }
}

const graphQLQuery = gql`
  query PatternQuery($id: ID!) {
    pattern(id:$id) {
      title
      hookSize
      steps
      picture {
        title
        url
      }
      sys {
        id
      }
    }
  }
`

const getGraphQLEnhancedComponent = graphql(graphQLQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})


Pattern = getGraphQLEnhancedComponent(withRouter(Pattern))

export { Pattern }