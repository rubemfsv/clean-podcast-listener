import { LastPodcastRequestModel } from '@/domain/models'
import { makeLocalStorageAdapter } from '@/main/factories/cache/LocalStorageAdapter'

export const setLastPodcastListRequestAdapter = (
  lastRequest: LastPodcastRequestModel
): void => {
  makeLocalStorageAdapter().set('lastRequest', lastRequest)
}

export const getLastPodcastListRequestAdapter = (): LastPodcastRequestModel => {
  return makeLocalStorageAdapter().get('lastRequest')
}
