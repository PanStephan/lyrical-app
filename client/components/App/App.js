import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SongList from '../SongList/SongList'
import CreateSong from '../CreateSong/CreateSong'
import ErrorComponent from '../ErrorComponent/ErrorComponent'

const App = () => (
  <Switch>
    <Route path='/' component={SongList} exact/>
    <Route path='/create-song' component={CreateSong}/>
    <Route path='*' component={ErrorComponent}/>
  </Switch>
)

export default App