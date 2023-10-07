import React from 'react'

import Styles from './styles.scss'
import { IGetPodcastList } from '@/domain/usecases'

type HomeProps = {
  podcastList: IGetPodcastList
}

const Home: React.FC<HomeProps> = ({ podcastList }) => {
  return (
    <div className={Styles.container}>
      <span>Hello World</span>
    </div>
  )
}

export default Home
