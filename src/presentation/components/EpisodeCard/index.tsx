import React from 'react'

import Styles from './styles.scss'

type EpisodeCardProps = {}

const EpisodeCard: React.FC<EpisodeCardProps> = (props: EpisodeCardProps) => {
  return (
    <div className={Styles.episodeContainer} data-testid="episodeCard">
      <div className={Styles.imageContainer}>
        <img src="https://www.github.com/pact-foundation.png" />
      </div>
      <div className={Styles.episodeNameContainer}>
        <span>Song Exploder</span>
        <span>by Song Exploder</span>
      </div>
      <div className={Styles.episodeDescriptionContainer}>
        <span>Description:</span>
        <span>
          by Song Exploder y Song Exploder y Song Exploder y Song Exploder y
          Song Exploder y Song Exploder{' '}
        </span>
      </div>
    </div>
  )
}

export default EpisodeCard
