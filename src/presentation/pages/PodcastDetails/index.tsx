import React, { useState } from 'react'
import { IGetPodcastDetails } from '@/domain/usecases'

import Styles from './styles.scss'
import { EpisodeCard, Template } from '@/presentation/components'

type PodcastDetailsProps = {
  podcastDetails: (id: number) => IGetPodcastDetails
}

const PodcastDetails: React.FC<PodcastDetailsProps> = ({ podcastDetails }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <Template isLoading={isLoading}>
      <div className={Styles.container}>
        <EpisodeCard />
        <div className={Styles.episodeListContainer}>
          <div className={Styles.episodeCounter}>
            <span>Episodes: 66</span>
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
