export function isDateOneMonthFromNow(receivedDate: Date): boolean {
  if (!receivedDate) return true
  const currentDate = new Date()
  const receivedDateObject = new Date(receivedDate)
  const timeDifference = currentDate.getTime() - receivedDateObject.getTime()
  const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000
  return timeDifference >= oneMonthInMilliseconds
}

export function millisecondsToMinutes(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
    seconds
  ).padStart(2, '0')}`

  return formattedTime
}
