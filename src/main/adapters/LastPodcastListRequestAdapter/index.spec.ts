import { LocalStorageAdapter } from '@/infra/cache/LocalStorageAdapter'
import {
  setLastPodcastListRequestAdapter,
  getLastPodcastListRequestAdapter,
} from '.'

jest.mock('@/infra/cache/LocalStorageAdapter')

describe('LastPodcastListRequestAdapter', () => {
  test('Should call LocalStorageAdapter.set with correct values', () => {
    const lastRequest = new Date()
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setLastPodcastListRequestAdapter(lastRequest)
    expect(setSpy).toHaveBeenCalledWith('lastRequest', lastRequest)
  })

  test('Should call LocalStorageAdapter.get with correct values', () => {
    const lastRequest = new Date()
    const getSpy = jest
      .spyOn(LocalStorageAdapter.prototype, 'get')
      .mockReturnValueOnce(lastRequest)
    const result = getLastPodcastListRequestAdapter()
    expect(getSpy).toHaveBeenCalledWith('lastRequest')
    expect(result).toEqual(lastRequest)
  })
})
