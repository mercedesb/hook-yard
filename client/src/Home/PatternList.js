import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { times } from 'lodash'
import './PatternList.css';
import Sheep from './Sheep'

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
        <div className='PatternList-header'>
          <div className='PatternList-img'></div>
          <div className='PatternList-detail'>
            <strong>Title</strong>
          </div>
          <div className='PatternList-difficulty'>
            <strong>Difficulty</strong>
          </div>
        </div>

        { patterns.map( pattern => {
          return (
          <div key={pattern.title} className='PatternList-item'>
            <div className='PatternList-img'>
              <img alt={pattern.title} src={`${pattern.picture.url}?w=200&h=200&fit=fill`} />
            </div>
            <div className="PatternList-detail">
              <h2>
                <Link to={`/patterns/${pattern.sys.id}`}>
                  {pattern.title}
                </Link>
              </h2>
              <p>Estimated time to complete <span>{pattern.estimatedTime || '--'}</span></p>
              <p>Recommended hook size <span>{pattern.hookSize}</span></p>
            </div>
            <div className="PatternList-difficulty">
              {
                times(pattern.difficulty, (i) => {
                  return (
                    <div className="PatternList-sheep" key={i}>
                      <Sheep />
                    </div>
                  )
                }
              )}
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
    hookSize
    estimatedTime
    difficulty
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