import React, { useContext, useState } from 'react'

import Styles from './styles.scss'
import { ArtistCard, Template } from '@/presentation/components'
import { ApiContext } from '@/presentation/hooks'
import { useParams } from 'react-router-dom'

type EpisodeDetailsProps = {}

type ParamsProps = {
  id: string
}

const EpisodeDetails: React.FC<EpisodeDetailsProps> = ({}) => {
  const { id } = useParams<ParamsProps>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { getLastPodcastDetailsRequest } = useContext(ApiContext)
  const lastPodcastDetails = getLastPodcastDetailsRequest()
  const selectedEpisode = lastPodcastDetails?.lastPodcastEpisodes?.find(
    (episode) => episode?.trackId === Number(id)
  )

  return (
    <Template isLoading={isLoading}>
      <div className={Styles.container}>
        <ArtistCard artist={lastPodcastDetails?.lastArtist} />
        <div className={Styles.episodeDetailsContainer}>
          <div className={Styles.episodeDetails}>
            <h1>{selectedEpisode?.trackName}</h1>
            <span>{selectedEpisode?.description}</span>
            <div className={Styles.audioContainer}>
              <audio controls>
                <source src={selectedEpisode?.previewUrl} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </div>
    </Template>
  )
}

export default EpisodeDetails
