import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SongList from '../SongList/SongList'
import CreateSong from '../CreateSong/CreateSong'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import SongDetails from '../SongDetails/SongDetais'

const App = () => (
  <Switch>
    <Route path='/' component={SongList} exact/>
    <Route path='/create-song' component={CreateSong}/>
    <Route path='/songs/:id' component={SongDetails}/>
    <Route path='*' component={ErrorComponent}/>
  </Switch>
)

export default App