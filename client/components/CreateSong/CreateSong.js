import React, { useState } from 'react'

const CreateSong = () => {
  const [ title, setTitle ] = useState('')

  const inputHandler = ({ target }) => {
    setTitle(target.value)
  }

  const SubmitHandler = (event) => {
    event.preventDefault()
    console.log(title)
  }

  return (
    <form onSubmit={SubmitHandler}>
      <label htmlFor='title'>Title</label>
      <input type='text' placeholder='type a song title' id='title' value={title} onChange={inputHandler}></input>
      <button type='submit'>Add a song</button>
    </form>
  )
}

export default CreateSong