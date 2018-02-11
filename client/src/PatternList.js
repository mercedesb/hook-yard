import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo';
import PatternRow from './PatternRow'

let PatternList = class PatternList extends Component {

  render () {
    const { data } = this.props
    const { loading, error, patterns } = data

    if (loading) {
      return <p>Loading...</p>
    }
    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <div className='pattern-list'>
        { patterns.map( ptn => <PatternRow key={ptn.title} pattern={ptn} />) }
      </div>
    )
  }
}

const graphQLQuery = gql`
{
  patterns {
    title
    picture {
      title
      url
    }
  }
}
`

const getGraphQLEnhancedComponent = graphql(graphQLQuery);

PatternList = getGraphQLEnhancedComponent(PatternList)

export { PatternList }