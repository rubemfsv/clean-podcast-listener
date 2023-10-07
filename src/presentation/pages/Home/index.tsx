import React, { useState } from 'react'

import { IGetPodcastList } from '@/domain/usecases'
import { Template } from '@/presentation/components'

import Styles from './styles.scss'

type HomeProps = {
  podcastList: IGetPodcastList
}

const Home: React.FC<HomeProps> = ({ podcastList }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <Template showHomeIcon={false} isLoading={isLoading}>
      <span>Hello World!</span>
    </Template>
  )
}

export default Home
