export const makeApiUrl = (path: string): string => {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    `${process.env.API_URL}${path}`
  )}`

  return url
}
