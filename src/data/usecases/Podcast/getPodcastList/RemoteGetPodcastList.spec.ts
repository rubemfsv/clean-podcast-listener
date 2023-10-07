import {
  RemoteGetPodcastList,
  RemoteGetPodcastListNamespace,
} from './RemoteGetPodcastList'
import { HttpClientSpy } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http/'
import { mockGetPodcastListModel } from '@/domain/test/'
import { UnexpectedError } from '@/domain/errors/'
import faker from 'faker'

type SutTypes = {
  systemUnderTest: RemoteGetPodcastList
  httpClientSpy: HttpClientSpy<RemoteGetPodcastListNamespace.Model>
}

const makeSystemUnderTest = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteGetPodcastListNamespace.Model>()
  const systemUnderTest = new RemoteGetPodcastList(url, httpClientSpy)

  return {
    systemUnderTest,
    httpClientSpy,
  }
}

describe('RemoteGetPodcastList', () => {
  test('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest(url)

    await systemUnderTest.getList()

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should return an MessageListing.Model if HttpPostClient returns 200', async () => {
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
    const httpResult = mockGetPodcastListModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    }
    const Message = await systemUnderTest.getList()
    expect(Message).toEqual(httpResult)
  })

  test('Should throw UnexpectedError if HttpClient returns 400', async () => {
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = systemUnderTest.getList()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 403', async () => {
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden,
    }
    const promise = systemUnderTest.getList()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    }
    const promise = systemUnderTest.getList()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { systemUnderTest, httpClientSpy } = makeSystemUnderTest()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    }
    const promise = systemUnderTest.getList()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
