import React, { useState } from 'react'
import './index.scss'
// import ArtistProfile from './ArtistProfile'
import Header from './Header'
import SearchResult from './SearchResult'
import { SongInfo } from '../../interfaces/music'
import { musicSearch } from '../../api/music'

function Music() {
  let [list, setList] = useState<SongInfo[] | null>(null)
  let [type, setType] = useState<string>('song')

  async function getSearchResult(keyword: string) {
    const res = await musicSearch({
      keyword,
      type
    })
    const { data } = res;
    if (data.code !== 200) {
      return
    }
    setList([...data.data.songs])
  }

  const handleSearch = (keyword: string) => {
    getSearchResult(keyword)
  }
  return (
    <div className="music">
      <Header handleSearch={handleSearch} />
      <main className="body">
        <div className="content">
          {list && <SearchResult data={list} />}
        </div>
      </main>
      {/* <ArtistProfile /> */}
    </div>
  )
}

export default Music
