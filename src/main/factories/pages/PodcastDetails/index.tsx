import React, { useCallback } from 'react'
import { PodcastDetails } from '@/presentation/pages'
import { makeRemoteGetPodcastDetails } from '../../usecases'

const makePodcastDetails: React.FC = () => {
  const makePodcastDetails = useCallback(makeRemoteGetPodcastDetails, [])

  return <PodcastDetails podcastDetails={makePodcastDetails} />
}

export default makePodcastDetails
