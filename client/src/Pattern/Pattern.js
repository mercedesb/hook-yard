import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { gql, graphql } from 'react-apollo';
import Header from '../_shared/Header'
import './Pattern.css';

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

    let directions = pattern && pattern.directions ? JSON.parse(pattern.directions) : ''

    return (
      <div className='Pattern'>
        <Header>
          <h1>{pattern.title}</h1>
          <h4>{`Recommended Hook Size: ${pattern.hookSize}`}</h4>
        </Header>
        <div className='Pattern-directions'>
          <ul>
          {
            directions.map( step => {
              return (
                <li>{step}</li>
              )
            }
          )}
          </ul>
        </div>
        <div className='Pattern-img'>
          <img alt={pattern.title} src={`${pattern.picture.url}?w=400&h=400&fit=fill`} />
        </div>
      </div>
    )
  }
}

const graphQLQuery = gql`
  query PatternQuery($id: ID!) {
    pattern(id:$id) {
      title
      hookSize
      directions
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