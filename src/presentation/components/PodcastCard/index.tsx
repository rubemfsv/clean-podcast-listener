import React from 'react'
import { useHistory } from 'react-router-dom'

import Styles from './styles.scss'

type PodcastCardProps = {
  image: string
  podcastName: string
  podcastAuthor: string
  podcastId: string
}

const PodcastCard: React.FC<PodcastCardProps> = (props: PodcastCardProps) => {
  const history = useHistory()

  const handlePodcastSelection = (id: string): void => {
    history.push(`/podcast/${id}`)
  }

  return (
    <div
      className={Styles.podcastContainer}
      data-testid="podcastCard"
      onClick={() => handlePodcastSelection(props.podcastId)}
    >
      <img src={props.image} />
      <div className={Styles.infoContainer}>
        <span>{props.podcastName}</span>
        <span>Author: {props.podcastAuthor}</span>
      </div>
    </div>
  )
}

export default PodcastCard
