import { useEffect, useState } from 'react'

export const useFetch = <T>(fetchFunc: FetchFunc<T>) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetch = async () => {
    setIsLoading(true)
    const data = await fetchFunc()

    setData(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetch()
  }, [])

  return { data, isLoading }
}

type FetchFunc<T> = () => Promise<T>
