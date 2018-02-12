import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import './PatternList.css';

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
      <div className='PatternList'>
        { patterns.map( pattern => {
          return (
          <div className='PatternList-item'>
            <img alt={pattern.title} src={`${pattern.picture.url}?w=200&h=200&fit=fill`} />
            <div className="PatternList-detail">
              <h2>
                <Link to={`/patterns/${pattern.sys.id}`}>
                  {pattern.title}
                </Link>
              </h2>
            </div>
          </div>
          )
        })
       }
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
    sys {
      id
    }
  }
}
`

const getGraphQLEnhancedComponent = graphql(graphQLQuery);

PatternList = getGraphQLEnhancedComponent(PatternList)

export { PatternList }