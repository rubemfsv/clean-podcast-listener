import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { Home } from '@/presentation/pages'
import { ApiContext } from '@/presentation/hooks'
import { LastPodcastRequestModel } from '@/domain/models'
import { PodcastListSpy } from '../tests/MockPodcastList'

type SutTypes = {
  setLastPodcastListRequestMock: (account: LastPodcastRequestModel) => void
  getLastPodcastListRequestMock: () => LastPodcastRequestModel
  podcastListSpy: PodcastListSpy
}

const history = createMemoryHistory({ initialEntries: ['/Home'] })

const makeSystemUnderTest = (): SutTypes => {
  const setLastPodcastListRequestMock = jest.fn()
  const getLastPodcastListRequestMock = jest.fn()
  const podcastListSpy = new PodcastListSpy()

  render(
    <ApiContext.Provider
      value={{
        setLastPodcastListRequest: setLastPodcastListRequestMock,
        getLastPodcastListRequest: getLastPodcastListRequestMock,
      }}
    >
      <Router history={history}>
        <Home podcastList={podcastListSpy} />
      </Router>
    </ApiContext.Provider>
  )

  return {
    setLastPodcastListRequestMock,
    getLastPodcastListRequestMock,
    podcastListSpy,
  }
}

describe('Home Component', () => {
  test('Should show 100 podcasts checking cache before', () => {
    const { podcastListSpy, getLastPodcastListRequestMock } = makeSystemUnderTest()

    expect(getLastPodcastListRequestMock).toBeCalled()
    expect(podcastListSpy?.podcasts?.feed?.entry?.length).toBe(100)
  })
})
