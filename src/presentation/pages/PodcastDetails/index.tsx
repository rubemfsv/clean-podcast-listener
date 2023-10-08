import React, { useEffect, useState } from 'react'
import { IGetPodcastDetails } from '@/domain/usecases'

import Styles from './styles.scss'
import { ArtistCard, Template } from '@/presentation/components'
import { useParams } from 'react-router-dom'
import { PodcastArtistModel, PodcastDetailsRequestModel } from '@/domain/models'

type PodcastDetailsProps = {
  podcastDetails: (id: number) => IGetPodcastDetails
}

type ParamsProps = {
  id: string
}

const PodcastDetails: React.FC<PodcastDetailsProps> = ({ podcastDetails }) => {
  const { id } = useParams<ParamsProps>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [podcastInfo, setPodcastInfo] = useState<PodcastDetailsRequestModel>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async (): Promise<void> => {
    await podcastDetails(Number(id))
      .getDetails()
      .then((response) => {
        setPodcastInfo(response)
        setIsLoading(false)
      })
      .catch((error) => console.error(error))
  }

  return (
    <Template isLoading={isLoading}>
      <div className={Styles.container}>
        <ArtistCard artist={podcastInfo?.results[0] as PodcastArtistModel} />
        <div className={Styles.episodeListContainer}>
          <div className={Styles.episodeCounter}>
            <span>Episodes: {podcastInfo?.resultCount}</span>
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
                <tr>
                  <td className={Styles.firstColumn}>Sample Title 1</td>
                  <td>2023-10-12</td>
                  <td>00:30:45</td>
                </tr>
                <tr>
                  <td>Sample Title 2</td>
                  <td>2023-10-15</td>
                  <td>00:25:20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Template>
  )
}

export default PodcastDetails
