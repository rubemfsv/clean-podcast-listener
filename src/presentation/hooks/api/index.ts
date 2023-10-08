import { LastPodcastRequestModel } from '@/domain/models'
import { createContext } from 'react'

type ApiProps = {
  setLastPodcastListRequest?: (lastRequest: LastPodcastRequestModel) => void
  getLastPodcastListRequest?: () => LastPodcastRequestModel
}

export default createContext<ApiProps>(null)
