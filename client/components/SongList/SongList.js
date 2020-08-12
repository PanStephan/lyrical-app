import React from 'react'
import gql from 'graphql-tag'
import { graphql }  from 'react-apollo'

const SongList = (props) => { 

  const { songs = [], loading } = props.data

  const renderSongs = () => {
    if (loading) return (
      <div>Loading...</div>
    )
    return songs.map(song => {
      return (
        <li key={song.id}>
          {song.title}
        </li>
      )
    })
  }
 
  return (
    <div>{ renderSongs() }</div>
  )
}

const query = gql`
  {
    songs {
      title
      id
    }
  }
`

export default graphql(query)(SongList)