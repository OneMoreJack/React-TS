import React from 'react'
import './PlayerBar.scss'
import { SongInfo } from 'interfaces/music'

interface barParams {
  song: SongInfo | null
}
export default function PlayerBar(props: barParams) {

  return (
    <div className="player-bar">
      <audio className="music-player" autoPlay controls>
        {props.song && <source src={`https://v1.itooi.cn/netease/url?id=${props.song.id}`}></source>}
      </audio>
    </div>
  )
}
