import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

import Styles from './styles.scss'
import Spinner from '../Spinner'

type TemplateProps = {
  children: React.ReactNode
  showHomeIcon?: boolean
  isLoading: boolean
}

const Template: React.FC<TemplateProps> = ({
  children,
  showHomeIcon = true,
  isLoading,
}) => {
  const history = useHistory()

  const handleMenuRoute = (): void => {
    history.replace('/')
  }

  const handleBack = (): void => {
    history.goBack()
  }

  return (
    <>
      <div className={Styles.header}>
        <h1
          className={Styles.title}
          onClick={() => handleMenuRoute()}
          data-testid="title"
        >
          Podcaster
        </h1>
        {isLoading && <Spinner />}
        {showHomeIcon && !isLoading && (
          <FaArrowLeft
            onClick={() => handleBack()}
            className={Styles.icon}
            title="Home"
            data-testid="backIcon"
          />
        )}
      </div>
      {isLoading ? (
        <div className={Styles.spinnerContainer}>
          <Spinner />
        </div>
      ) : (
        <div className={Styles.content}>{children}</div>
      )}
    </>
  )
}

export default Template
