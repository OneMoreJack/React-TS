import React, { useState } from 'react'
// import ArtistProfile from './ArtistProfile'
import Header from './Header'
import { musicSearch } from '../../api/music'

function Music() {
  let [list, setList] = useState<any>(null)
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
    <div>
      <Header handleSearch={handleSearch} />
      {/* <ArtistProfile /> */}
    </div>
  )
}

export default Music
