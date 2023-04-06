import {useEffect, useState} from 'react'

export const useAnimateNumber = (value: number, time: number = 1) => {
  const [resultAnimateNumber, setResultAnimateNumber] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (value !== resultAnimateNumber) {
      if (value > resultAnimateNumber) {
        timer = setTimeout(() => {
          let difference = value - resultAnimateNumber
          if (difference >= 1000000) {
            setResultAnimateNumber(resultAnimateNumber + 100000)
          } else if (difference >= 100000) {
            setResultAnimateNumber(resultAnimateNumber + 10000)
          } else if (difference >= 10000) {
            setResultAnimateNumber(resultAnimateNumber + 1000)
          } else if (difference >= 1000) {
            setResultAnimateNumber(resultAnimateNumber + 100)
          } else if (difference >= 100) {
            setResultAnimateNumber(resultAnimateNumber + 10)
          } else if (difference >= 1) {
            setResultAnimateNumber(resultAnimateNumber + 1)
          }
        }, time)
      } else {
        timer = setTimeout(() => {
          let difference = resultAnimateNumber - value
          if (difference >= 1000000) {
            setResultAnimateNumber(resultAnimateNumber - 100000)
          } else if (difference >= 100000) {
            setResultAnimateNumber(resultAnimateNumber - 10000)
          } else if (difference >= 10000) {
            setResultAnimateNumber(resultAnimateNumber - 1000)
          } else if (difference >= 1000) {
            setResultAnimateNumber(resultAnimateNumber - 100)
          } else if (difference >= 100) {
            setResultAnimateNumber(resultAnimateNumber - 10)
          } else if (difference >= 1) {
            setResultAnimateNumber(resultAnimateNumber - 1)
          }
        }, time)
      }
    }
    return () => clearTimeout(timer)
  }, [resultAnimateNumber, value]);

  return {resultAnimateNumber}
}