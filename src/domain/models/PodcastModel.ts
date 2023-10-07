import { PodcastLabelModel, PodcastLinkModel } from './'

export type PodcastModel = {
  'im:name': PodcastLabelModel
  'im:image': Array<ImageDetails>
  summary: PodcastLabelModel
  'im:price': {
    label: string
    attributes: {
      amount: string
      currency: string
    }
  }
  'im:contentType': {
    attributes: {
      term: string
      label: string
    }
  }
  rights: PodcastLabelModel
  title: PodcastLabelModel
  link: PodcastLinkModel
  id: {
    label: string
    attributes: {
      'im:id': string
    }
  }
  'im:artist': {
    label: string
    attributes: {
      href: string
    }
  }
  category: {
    attributes: {
      'im:id': string
      term: string
      scheme: string
      label: string
    }
  }
  'im:releaseDate': {
    label: string
    attributes: {
      label: string
    }
  }
}

type ImageDetails = {
  label: string
  attributes: {
    height: string
  }
}
