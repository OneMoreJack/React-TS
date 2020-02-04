import React from 'react'
import ListSongs from './ListSongs'
import { SongInfo } from '../../../interfaces/music'

interface SearchData {
  data: SongInfo[]
}
export default function SearchPage(props: SearchData) {
  return (
    <>
      { props.data &&
        props.data.map((v, index) => (
          <ListSongs 
            key={v.id}
            index={index + 1}
            data={v} />
        ))
      }
    </>
  )
}
