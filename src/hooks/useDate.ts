export const useDate = () => {
  const createDate = () => {
    const newDate = new Date()
    const currentDate = newDate.getDate()
    const currentMonth = newDate.getMonth()
    const currentYear = newDate.getFullYear()
    return `${currentDate}.${currentMonth + 1}.${currentYear}`
  }

  const createTime = () => {
    const newDate = new Date()
    const currentHours = newDate.getHours()
    const currentMinutes = newDate.getMinutes()
    const currentSeconds = newDate.getSeconds()
    return `${currentHours}:${currentMinutes}:${currentSeconds}`
  }

  return {createDate, createTime}
}