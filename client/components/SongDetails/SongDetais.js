import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import song from '../../queries/song'

const SongDetails = ({ data }) => {
  if (!data.song) return ( <div>Loading...</div> )
  return (
    <>
      <Link to='/'>back</Link>
      <div>{ data.song.title }</div>
    </>
  )
}

export default graphql(song, {
  options: (props) => { return { variables: { id:  props.match.params.id }}}
})(SongDetails)