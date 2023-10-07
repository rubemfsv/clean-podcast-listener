import React from 'react'

import Styles from './styles.scss'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={Styles.container}>
      <span>Hello World</span>
    </div>
  )
}

export default Home
