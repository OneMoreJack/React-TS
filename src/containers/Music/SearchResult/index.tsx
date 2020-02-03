import React from 'react'
import ListSongs from './ListSongs'
import { SongInfo } from '../../../interfaces/music'

interface SearchData {
  data: SongInfo[]
}
export default function SearchPage(props: SearchData) {
  const lists = props.data.map(v => (
    <ListSongs />
  ))
  return (
    <>
      { props.data &&
        props.data.map(v => (
          <ListSongs key={v.id} />
        ))
      }
    </>
  )
}
