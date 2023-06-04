/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useRequest } from 'ahooks'
import { getSongListType, getTopPlaylist } from '@/service/api'
// Pick<>
// Record<>
// Required<>
// Partial<>
// Omit<>

// type ReturnType<T> = extends(...args:any[]) => infer R ? R :never

export default function Home() {
  const [songListType, setSongListType] = useState<
    Awaited<ReturnType<typeof getSongListType>>['data']['sub']
  >([])
  useEffect(() => {
    getSongListType()
      .then((res) => {
        setSongListType(res.data.sub)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const { data: TopPlaylist } = useRequest(() => getTopPlaylist({ cat: '全部' }))
  return (
    <div>
      <ul>
        {TopPlaylist?.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
      <ul>
        {songListType.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
