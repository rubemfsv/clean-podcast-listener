import { mockGetPodcastListModel } from '@/domain/test'
import { GetPodcastList, IGetPodcastList } from '@/domain/usecases'

export class PodcastListSpy implements IGetPodcastList {
  podcasts = mockGetPodcastListModel()
  callsCount = 0

  async getList(): Promise<GetPodcastList.Model> {
    this.callsCount++
    return Promise.resolve(this.podcasts)
  }
}
