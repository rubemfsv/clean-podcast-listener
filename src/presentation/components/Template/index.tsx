import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

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

  return (
    <>
      <div className={Styles.header}>
        <h1 className={Styles.title}>Podcaster</h1>
        {isLoading && <Spinner />}
        {showHomeIcon && !isLoading && (
          <FaHome
            onClick={() => handleMenuRoute()}
            className={Styles.icon}
            title="Log out"
          />
        )}
      </div>
      <div className={Styles.content}>{children}</div>
    </>
  )
}

export default Template
