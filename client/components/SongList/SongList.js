import React from 'react'
import { graphql }  from 'react-apollo'
import gql from 'graphql-tag'
import query from '../../queries/songs'

import { Link } from 'react-router-dom'

const SongList = ({ data, mutate }) => { 

  const { songs = [], loading, refetch } = data

  const onSongDelete = id => {
    mutate({
      variables: {
        id
      }
    }).then(() => refetch())
  }

  const renderSongs = () => {
    if (loading) return <div>Loading...</div>
    return songs.map(({ id, title }) => {
      return (
        <li key={id}>
          <Link to={`/songs/${id}`}>{title}</Link>
          <div onClick={onSongDelete.bind(this, id)}>delete</div>
        </li>
      )
    })
  }
 
  return (
    <>
      <div>{ renderSongs() }</div>
      <Link to='create-song'>Create a new song</Link>
    </>
  )
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`

export default graphql(mutation)(
  graphql(query)(SongList)
)