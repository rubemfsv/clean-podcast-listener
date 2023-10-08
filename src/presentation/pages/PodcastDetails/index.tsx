import React, { useEffect, useState } from 'react'
import { IGetPodcastDetails } from '@/domain/usecases'

import Styles from './styles.scss'
import { ArtistCard, Template } from '@/presentation/components'
import { useHistory, useParams } from 'react-router-dom'
import { PodcastArtistModel, PodcastDetailsModel } from '@/domain/models'
import { formatDate, millisecondsToMinutes } from '@/presentation/utils'

type PodcastDetailsProps = {
  podcastDetails: (id: number) => IGetPodcastDetails
}

type ParamsProps = {
  id: string
}

const PodcastDetails: React.FC<PodcastDetailsProps> = ({ podcastDetails }) => {
  const { id } = useParams<ParamsProps>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [podcastArtist, setPodcastArtist] = useState<PodcastArtistModel>()
  const [podcastEpisodes, setPodcastEpisodes] =
    useState<PodcastDetailsModel[]>()
  const history = useHistory()

  const handleEpisodeSelection = (episodeId: number): void => {
    history.push(`/podcast/${id}/episode/${episodeId}`)
  }
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async (): Promise<void> => {
    await podcastDetails(Number(id))
      .getDetails()
      .then((response) => {
        const result = response?.results
        setPodcastArtist(
          result.find((item) => item.kind === 'podcast') as PodcastArtistModel
        )
        setPodcastEpisodes(
          result.filter((item) => item.kind === 'podcast-episode')
        )
        setIsLoading(false)
      })
      .catch((error) => console.error(error))
  }

  return (
    <Template isLoading={isLoading}>
      <div className={Styles.container}>
        <ArtistCard artist={podcastArtist} />
        <div className={Styles.episodeListContainer}>
          <div className={Styles.episodeCounter}>
            <span>Episodes: {podcastEpisodes?.length}</span>
          </div>
          <div className={Styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th className={Styles.firstColumn}>Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {podcastEpisodes?.map((episode) => {
                  return (
                    <tr
                      key={episode?.trackId}
                      onClick={() => handleEpisodeSelection(episode?.trackId)}
                    >
                      <td className={Styles.firstColumn}>
                        {episode?.trackName}
                      </td>
                      <td>{formatDate(episode?.releaseDate)}</td>
                      <td>{millisecondsToMinutes(episode?.trackTimeMillis)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Template>
  )
}

export default PodcastDetails
