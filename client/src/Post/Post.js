import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { gql, graphql } from 'react-apollo';
import Header from '../_shared/Header'
import './Post.css';

let Post = class Pattern extends Component {

  render () {
    const { data } = this.props
    const { loading, error, post } = data

    if (loading) {
      return <p>Loading...</p>
    }
    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <div className='Post'>
        <Header>
          <h1>{post.title}</h1>
        </Header>
        <div className='Post-body'>
          <p>{post.body}</p>
        </div>
      </div>
    )
  }
}

const graphQLQuery = gql`
  query PostQuery($id: ID!) {
    post(id:$id) {
      title
      body
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


Post = getGraphQLEnhancedComponent(withRouter(Post))

export { Post }