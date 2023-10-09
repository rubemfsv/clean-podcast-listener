import { createContext } from 'react'
import {
  LastPodcastDetailsModel,
  LastPodcastRequestModel,
} from '@/domain/models'

type ApiProps = {
  setLastPodcastListRequest?: (lastRequest: LastPodcastRequestModel) => void
  getLastPodcastListRequest?: () => LastPodcastRequestModel
  setLastPodcastDetailsRequest?: (lastPodcast: LastPodcastDetailsModel) => void
  getLastPodcastDetailsRequest?: () => LastPodcastDetailsModel
}

export default createContext<ApiProps>(null)
