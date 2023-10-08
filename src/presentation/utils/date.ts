export function isDateOneMonthFromNow(receivedDate: Date): boolean {
  if (!receivedDate) return true
  const currentDate = new Date()
  const receivedDateObject = new Date(receivedDate)
  const timeDifference = currentDate.getTime() - receivedDateObject.getTime()
  const oneMonthInMilliseconds = 30 * 24 * 60 * 60 * 1000
  return timeDifference >= oneMonthInMilliseconds
}
