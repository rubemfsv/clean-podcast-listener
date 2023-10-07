import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeHome } from '@/main/factories/pages'
import { ApiContext } from '@/presentation/hooks'
import {
  getLastPodcastListRequestAdapter,
  setLastPodcastListRequestAdapter,
} from '../adapters/LastPodcastListRequestAdapter'

import '@/presentation/styles/global.scss'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        setLastPodcastListRequest: setLastPodcastListRequestAdapter,
        getLastPodcastListRequest: getLastPodcastListRequestAdapter,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={makeHome} />
        </Switch>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
