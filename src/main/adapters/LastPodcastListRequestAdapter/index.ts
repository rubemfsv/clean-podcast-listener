import { makeLocalStorageAdapter } from '@/main/factories/cache/LocalStorageAdapter'

export const setLastPodcastListRequestAdapter = (lastRequest: Date): void => {
  makeLocalStorageAdapter().set('lastRequest', lastRequest)
}

export const getLastPodcastListRequestAdapter = (): Date => {
  return makeLocalStorageAdapter().get('lastRequest')
}
