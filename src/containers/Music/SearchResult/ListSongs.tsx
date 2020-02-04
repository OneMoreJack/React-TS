import React, { useState } from 'react'
import '../index.scss'
import { getDuration } from '../../../utils'
import { SongInfo, ArtistInfo } from '../../../interfaces/music'

interface ListSong {
  data: SongInfo,
  index: number,
}
export default function ListSongs(props: ListSong) {

  const getArtists = (artists: ArtistInfo[]) => {
    return artists.map(ar => ar.name).join('/')
  }
  return (
    <div className="list-songs">
      <div>{props.index > 9 ? props.index : `0${props.index}`}</div>
      <div>{props.data.name}</div>
      <div>{getArtists(props.data.ar)}</div>
      <div>{props.data.al.name}</div>
      <div>{getDuration(props.data.dt)}</div>
    </div>
  )
}