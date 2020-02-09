import React, { useEffect } from 'react'
import './PlayerBar.scss'
import { SongInfo } from 'interfaces/music'

interface barParams {
  song: SongInfo | null
}
export default function PlayerBar(props: barParams) {
  let player : HTMLAudioElement | null = document.querySelector('.music-player')

  useEffect(() => {
    player?.load()
  }, [props.song])

  return (
    <div className="player-bar">
      <img
        className="song-pic"
        src={props.song?.al.picUrl} 
        alt="专辑封面"/>
      <audio className="music-player" autoPlay controls>
        {props.song && <source src={`https://v1.itooi.cn/netease/url?id=${props.song.id}`}></source>}
      </audio>
    </div>
  )
}
