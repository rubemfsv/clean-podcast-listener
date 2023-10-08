import { LocalStorageAdapter } from '@/infra/cache/LocalStorageAdapter'
import {
  setLastPodcastListRequestAdapter,
  getLastPodcastListRequestAdapter,
} from '.'
import { mockGetPodcastListModel } from '@/domain/test'
import { LastPodcastRequestModel } from '@/domain/models'

jest.mock('@/infra/cache/LocalStorageAdapter')
const lastRequest: LastPodcastRequestModel = {
  lastRequestDate: new Date(),
  podcastList: mockGetPodcastListModel(),
}

describe('LastPodcastListRequestAdapter', () => {
  test('Should call LocalStorageAdapter.set with correct values', () => {
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setLastPodcastListRequestAdapter(lastRequest)
    expect(setSpy).toHaveBeenCalledWith('lastRequest', lastRequest)
  })

  test('Should call LocalStorageAdapter.get with correct values', () => {
    const getSpy = jest
      .spyOn(LocalStorageAdapter.prototype, 'get')
      .mockReturnValueOnce(lastRequest)
    const result = getLastPodcastListRequestAdapter()
    expect(getSpy).toHaveBeenCalledWith('lastRequest')
    expect(result).toEqual(lastRequest)
  })
})
