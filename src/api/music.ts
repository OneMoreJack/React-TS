import { get } from './index'


interface SearchParams {
  keyword: string,
  type: string,
  page?: number,
  pageSize?: number,
  format?: number
}

interface ArtistInfo {
  name: string,
  id: number
}
interface SongInfo {
  id: number,
  name: string,
  al: {
    picUrl: string,
    name: string,
    id: number
  },
  ar: ArtistInfo
}
interface SearchResult {
  code: number,
  data: {
    songs: SongInfo[],
    songCount: number
  }
}

export const musicSearch = (params: SearchParams) => get<SearchResult>('https://v1.itooi.cn/netease/search', params)

interface ArtistParams {
  id: number
}
export const getArtistInfo = (params : ArtistParams) => get<any>('https://v1.itooi.cn/netease/artist/info', params)