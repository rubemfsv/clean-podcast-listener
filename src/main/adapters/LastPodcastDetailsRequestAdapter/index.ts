import { LastPodcastDetailsModel } from '@/domain/models'
import { makeLocalStorageAdapter } from '@/main/factories/cache/LocalStorageAdapter'

export const setLastPodcastDetailsRequestAdapter = (
  lastPodcast: LastPodcastDetailsModel
): void => {
  makeLocalStorageAdapter().set('lastPodcast', lastPodcast)
}

export const getLastPodcastDetailsRequestAdapter =
  (): LastPodcastDetailsModel => {
    return makeLocalStorageAdapter().get('lastPodcast')
  }
