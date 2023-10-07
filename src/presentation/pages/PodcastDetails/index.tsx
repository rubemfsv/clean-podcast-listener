import React from 'react'
import { IGetPodcastDetails } from '@/domain/usecases'

import Styles from './styles.scss'

type PodcastDetailsProps = {
  podcastDetails: (id: number) => IGetPodcastDetails
}

const PodcastDetails: React.FC<PodcastDetailsProps> = ({ podcastDetails }) => {
  return (
    <div className={Styles.container}>
      <span>Podcast Details</span>
    </div>
  )
}

export default PodcastDetails
