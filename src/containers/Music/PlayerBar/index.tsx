import React, { useEffect } from 'react'
import './PlayerBar.scss'
import { SongInfo, ArtistInfo } from 'interfaces/music'
import { getDuration } from 'utils'
import { getArtistInfo } from 'api/music'

interface barParams {
  song: SongInfo | null
}
export default function PlayerBar(props: barParams) {
  let player : HTMLAudioElement | null = document.querySelector('.music-player')

  useEffect(() => {
    player?.load()
  }, [props.song])

  const getArtists = (artists: ArtistInfo[] | undefined) => {
    if (artists) {
      return artists.map(ar => ar.name).join('/')
    }
  }

  return (
    <div className="player-bar">
      {
        props.song &&
        <>
          <img
            className="song-pic"
            src={props.song.al.picUrl} 
            alt="专辑封面"/>
          <div className="song-info">
            <div>
              <span className="name">{props.song.name}</span>
              <span className="artists">-&nbsp;{getArtists(props.song?.ar
                )}</span>
            </div>
            <div className="duration">{getDuration(props.song.dt)}</div>
          </div>
          <audio className="music-player" autoPlay controls>
            {props.song && <source src={`https://v1.itooi.cn/netease/url?id=${props.song.id}`}></source>}
          </audio>
        </>
      }
    </div>
  )
}
