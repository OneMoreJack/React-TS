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
      <div className="song__index">{props.index > 9 ? props.index : `0${props.index}`}</div>
      <div className="song__name">{props.data.name}</div>
      <div className="song__artist">{getArtists(props.data.ar)}</div>
      <div className="song__album">{props.data.al.name}</div>
      <div className="song__duration">{getDuration(props.data.dt)}</div>
    </div>
  )
}