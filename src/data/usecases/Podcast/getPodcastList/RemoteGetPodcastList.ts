import { IHttpClient, HttpStatusCode } from '@/data/protocols/http'
import { GetPodcastList, IGetPodcastList } from '@/domain/usecases'
import { UnexpectedError } from '@/domain/errors'

export class RemoteGetPodcastList implements IGetPodcastList {
  constructor(
    private readonly url: string,
    private readonly httpClient: IHttpClient<RemoteGetPodcastListNamespace.Model>
  ) {}

  async getList(): Promise<GetPodcastList.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteGetPodcastListNamespace {
  export type Model = GetPodcastList.Model
}
