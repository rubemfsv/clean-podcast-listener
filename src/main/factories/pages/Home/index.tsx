import React from 'react'
import { Home } from '@/presentation/pages'
import { makeRemoteGetPodcastList } from '../../usecases'

const makeHome: React.FC = () => {
  return <Home podcastList={makeRemoteGetPodcastList()} />
}

export default makeHome
