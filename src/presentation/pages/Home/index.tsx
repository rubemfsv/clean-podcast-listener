import React, { useContext, useEffect, useState } from 'react'

import { IGetPodcastList } from '@/domain/usecases'
import { Input, PodcastCard, Template } from '@/presentation/components'
import { ApiContext, FormContext } from '@/presentation/hooks'

import Styles from './styles.scss'
import { PodcastListRequestModel } from '@/domain/models'
import { isDateOneMonthFromNow } from '@/presentation/utils'

type HomeProps = {
  podcastList: IGetPodcastList
}

const Home: React.FC<HomeProps> = ({ podcastList }) => {
  const { getLastPodcastListRequest, setLastPodcastListRequest } =
    useContext(ApiContext)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [podcasts, setPodcasts] = useState<PodcastListRequestModel>()
  const [state, setState] = useState<{ searchField: string }>({
    searchField: '',
  })
  const lastPodcastRequest = getLastPodcastListRequest()

  useEffect(() => {
    getPodcasts()
  }, [podcastList])

  const getPodcasts = async (): Promise<void> => {
    const shouldRequest = isDateOneMonthFromNow(
      lastPodcastRequest?.lastRequestDate
    )
    if (!shouldRequest) {
      setPodcasts(lastPodcastRequest?.podcastList)
      setIsLoading(false)
      return
    }

    await podcastList
      .getList()
      .then((result) => {
        if (result) {
          const parsedResult: PodcastListRequestModel = JSON.parse(
            result?.contents as unknown as string
          )
          setPodcasts(parsedResult)
          setIsLoading(false)
          setLastPodcastListRequest({
            lastRequestDate: new Date(),
            podcastList: parsedResult,
          })
        }
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    if (!podcasts || !podcasts?.feed?.entry) getPodcasts()
    const updatedLastPodcastRequest: PodcastListRequestModel = {
      feed: {
        ...lastPodcastRequest?.podcastList?.feed,
        entry: lastPodcastRequest?.podcastList?.feed?.entry?.filter(
          (podcast) => {
            return podcast?.title?.label
              ?.toLowerCase()
              .includes(state.searchField.toLowerCase())
          }
        ),
      },
    }
    setPodcasts(updatedLastPodcastRequest)
  }, [state.searchField])

  return (
    <Template showHomeIcon={false} isLoading={isLoading}>
      <div className={Styles.searchContainer}>
        <FormContext.Provider value={{ state, setState }}>
          <Input name="searchField" placeholder="Filter podcasts..." />
        </FormContext.Provider>

        <div className={Styles.counterContainer}>
          <span>{podcasts?.feed?.entry?.length || 0}</span>
        </div>
      </div>
      <div className={Styles.podcastList}>
        {podcasts?.feed?.entry?.map((podcast) => {
          return (
            <PodcastCard
              key={podcast?.id?.label}
              image={podcast['im:image'][0]?.label}
              podcastName={podcast?.title?.label}
              podcastAuthor={podcast['im:artist']?.label}
              podcastId={podcast?.id?.attributes?.['im:id']}
            />
          )
        })}
      </div>
    </Template>
  )
}

export default Home
