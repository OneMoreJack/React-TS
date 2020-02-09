import React from 'react'
import ListSongs from './ListSongs'
import { SongInfo } from 'interfaces/music'

interface SearchData {
  data: SongInfo[],
  handlePlay(target: SongInfo):void
}
export default function SearchPage(props: SearchData) {
  function handleClick (song: SongInfo) {
    props.handlePlay(song)
  }
  
  return (
    <>
      { props.data &&
        props.data.map((v, index) => (
          <div 
            key={v.id}
            className="list-wrap"
            onClick={(e) => handleClick(v)}>
            <ListSongs 
              index={index + 1}
              data={v} />
          </div>
        ))
      }
    </>
  )
}
