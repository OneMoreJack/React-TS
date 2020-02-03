export interface ArtistInfo {
  name: string,
  id: number
}

export interface SongInfo {
  id: number,
  name: string,
  al: {
    picUrl: string,
    name: string,
    id: number
  },
  ar: ArtistInfo
}

export interface SearchResult {
  code: number,
  data: {
    songs: SongInfo[],
    songCount: number
  }
}