import faker from 'faker'
import { GetPodcastList } from '../usecases'
import { ImageDetailsModel, PodcastLinkModel, PodcastModel } from '../models'

const mockPodcasImageDetailsModel = (): ImageDetailsModel => ({
  label: faker.internet.url(),
  attributes: {
    height: faker.datatype.number().toString(),
  },
})

const mockPodcastLinkModel = (): PodcastLinkModel => ({
  attributes: {
    rel: faker.lorem.words(3),
    type: faker.internet.protocol(),
    href: faker.internet.url(),
  },
})

const mockPodcastModel = (): PodcastModel => ({
  'im:name': {
    label: faker.lorem.words(5),
  },
  'im:image': [mockPodcasImageDetailsModel(), mockPodcasImageDetailsModel()],
  summary: {
    label: faker.lorem.words(5),
  },
  'im:price': {
    label: faker.lorem.words(5),
    attributes: {
      amount: faker.finance.amount(),
      currency: faker.finance.currencyName(),
    },
  },
  'im:contentType': {
    attributes: {
      term: faker.lorem.word(),
      label: faker.lorem.words(5),
    },
  },
  rights: {
    label: faker.lorem.words(5),
  },
  title: {
    label: faker.lorem.words(5),
  },
  link: mockPodcastLinkModel(),
  id: {
    label: faker.lorem.words(5),
    attributes: {
      'im:id': faker.lorem.word(),
    },
  },
  'im:artist': {
    label: faker.name.findName(),
    attributes: {
      href: faker.internet.url(),
    },
  },
  category: {
    attributes: {
      'im:id': faker.lorem.word(),
      term: faker.lorem.word(),
      scheme: faker.lorem.word(),
      label: faker.lorem.word(),
    },
  },
  'im:releaseDate': {
    label: faker.date.recent().toISOString(),
    attributes: {
      label: faker.lorem.words(5),
    },
  },
})

export const mockGetPodcastListModel = (): GetPodcastList.Model => ({
  feed: {
    author: {
      name: {
        label: faker.lorem.words(5),
      },
      uri: {
        label: faker.lorem.words(5),
      },
    },
    entry: Array.from({ length: 100 }, () => mockPodcastModel()),
    updated: {
      label: faker.lorem.words(5),
    },
    rights: {
      label: faker.lorem.words(5),
    },
    title: {
      label: faker.lorem.words(5),
    },
    icon: {
      label: faker.lorem.words(5),
    },
    link: [mockPodcastLinkModel(), mockPodcastLinkModel()],
    id: {
      label: faker.lorem.words(5),
    },
  },
})
