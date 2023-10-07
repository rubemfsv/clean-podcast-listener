import { RemoteGetPodcastList } from '@/data/usecases/'
import { IGetPodcastList } from '@/domain/usecases'
import { makeAxiosHttpClient, makeApiUrl } from '@/main/factories/http'

export const makeRemoteGetPodcastList = (): IGetPodcastList => {
  const remoteGetPodcastList = new RemoteGetPodcastList(
    makeApiUrl('/us/rss/toppodcasts/limit=100/genre=1310/json'),
    makeAxiosHttpClient()
  )

  return remoteGetPodcastList
}
