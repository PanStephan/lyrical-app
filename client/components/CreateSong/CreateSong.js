import React, { useState } from 'react'
import gql from 'graphql-tag'
import { graphql }  from 'react-apollo'
import query from '../../queries/songs'

const CreateSong = ({ mutate, history }) => {
  const [ title, setTitle ] = useState('')

  const inputHandler = ({ target }) => {
    setTitle(target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setTitle('')
    mutate({
      variables: {
        title
      },
      refetchQueries: [{ query }]
    }).then(() => history.push('/'))
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='title'>Title</label>
      <input type='text' placeholder='type a song title' id='title' value={title} onChange={inputHandler}></input>
      <button type='submit'>Add a song</button>
    </form>
  )
}

const mutation = gql`
  mutation addSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`

export default graphql(mutation)(CreateSong)