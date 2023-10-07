import { createContext } from 'react'

type ApiProps = {
  setLastPodcastListRequest?: (lastRequest: Date) => void
  getLastPodcastListRequest?: () => Date
}

export default createContext<ApiProps>(null)
