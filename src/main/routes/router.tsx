import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
  makeHome,
  makePodcastDetails,
  makeEpisodeDetails,
} from '@/main/factories/pages'
import { ApiContext } from '@/presentation/hooks'
import {
  getLastPodcastListRequestAdapter,
  setLastPodcastListRequestAdapter,
  setLastPodcastDetailsRequestAdapter,
  getLastPodcastDetailsRequestAdapter,
} from '../adapters/'

import '@/presentation/styles/global.scss'

const Router: React.FC = () => {
  return (
    <ApiContext.Provider
      value={{
        setLastPodcastListRequest: setLastPodcastListRequestAdapter,
        getLastPodcastListRequest: getLastPodcastListRequestAdapter,
        setLastPodcastDetailsRequest: setLastPodcastDetailsRequestAdapter,
        getLastPodcastDetailsRequest: getLastPodcastDetailsRequestAdapter,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={makeHome} />
          <Route exact path="/podcast/:id" component={makePodcastDetails} />
          <Route
            exact
            path="/podcast/:id/episode/:id"
            component={makeEpisodeDetails}
          />
        </Switch>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
