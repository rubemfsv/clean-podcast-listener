import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeHome, makePodcastDetails } from '@/main/factories/pages'
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
          <Route exact path="/:id" component={makePodcastDetails} />
        </Switch>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
