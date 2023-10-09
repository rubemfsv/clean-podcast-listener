import React, { useContext, useEffect, useState } from 'react'

import Styles from './styles.scss'
import { ArtistCard, Template } from '@/presentation/components'
import { ApiContext } from '@/presentation/hooks'

type EpisodeDetailsProps = {}

type ParamsProps = {
  id: string
}

const EpisodeDetails: React.FC<EpisodeDetailsProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { getLastPodcastDetailsRequest } = useContext(ApiContext)
  const episode = getLastPodcastDetailsRequest()

  return (
    <Template isLoading={isLoading}>
      <div className={Styles.container}>
        <ArtistCard artist={episode?.lastArtist} />
        <div className={Styles.episodeListContainer}>
          <span>Start here</span>
        </div>
      </div>
    </Template>
  )
}

export default EpisodeDetails
