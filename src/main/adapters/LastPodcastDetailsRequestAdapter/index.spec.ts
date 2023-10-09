import { LocalStorageAdapter } from '@/infra/cache/LocalStorageAdapter'
import {
  setLastPodcastDetailsRequestAdapter,
  getLastPodcastDetailsRequestAdapter,
} from '.'
import { mockPodcastArtistModel, mockPodcastDetailsModel } from '@/domain/test'
import { LastPodcastDetailsModel } from '@/domain/models'

jest.mock('@/infra/cache/LocalStorageAdapter')
const lastPodcast: LastPodcastDetailsModel = {
  lastArtist: mockPodcastArtistModel(),
  lastPodcastEpisodes: [
    mockPodcastDetailsModel(),
    mockPodcastDetailsModel(),
    mockPodcastDetailsModel(),
    mockPodcastDetailsModel(),
  ],
}

describe('LastPodcastListRequestAdapter', () => {
  test('Should call LocalStorageAdapter.set with correct values', () => {
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setLastPodcastDetailsRequestAdapter(lastPodcast)
    expect(setSpy).toHaveBeenCalledWith('lastPodcast', lastPodcast)
  })

  test('Should call LocalStorageAdapter.get with correct values', () => {
    const getSpy = jest
      .spyOn(LocalStorageAdapter.prototype, 'get')
      .mockReturnValueOnce(lastPodcast)
    const result = getLastPodcastDetailsRequestAdapter()
    expect(getSpy).toHaveBeenCalledWith('lastPodcast')
    expect(result).toEqual(lastPodcast)
  })
})
