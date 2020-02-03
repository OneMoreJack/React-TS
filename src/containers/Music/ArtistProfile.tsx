/**
 * @file 
 * 
 * 歌手id
 * Troye Sivan - 45129
 */

import React, { useState, useEffect } from 'react'
import { getArtistInfo } from '../../api/music'

function Header() {
  let [artistId, setArtistId] = useState<number>(8103)
  useEffect(() => {
    async function getInfo(id: number) {
      let res = await getArtistInfo({ id })
      console.log('singer', res)
    }

    getInfo(artistId)
  }, [])
  return (
    <div className="artist-header">
      header
    </div>
  )
}

function ArtistProfile() {
  return (
    <div className="artist">
      Artist Profile
      <Header />
    </div>
  )
}

export default ArtistProfile
