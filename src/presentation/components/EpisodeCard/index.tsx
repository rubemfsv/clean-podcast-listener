import React from 'react'
import { PodcastArtistModel } from '@/domain/models'

import Styles from './styles.scss'

type EpisodeCardProps = {
  artist: PodcastArtistModel
}

const EpisodeCard: React.FC<EpisodeCardProps> = (props: EpisodeCardProps) => {
  return (
    <div className={Styles.episodeContainer} data-testid="episodeCard">
      <div className={Styles.imageContainer}>
        <img
          src={props?.artist?.artworkUrl600 || props?.artist?.artworkUrl160}
        />
      </div>
      <div className={Styles.episodeNameContainer}>
        <span>{props?.artist?.collectionName}</span>
        <span>by {props?.artist?.artistName}</span>
      </div>
      <div className={Styles.itemContainer}>
        <span>Primary genre:</span>
        <span>{props?.artist?.primaryGenreName}</span>
      </div>
      <div className={Styles.lastItemContainer}>
        <span>More info:</span>
       <span> Click <a href={props?.artist?.collectionViewUrl} target='_blank'>here</a></span>
      </div>
    </div>
  )
}

export default EpisodeCard
