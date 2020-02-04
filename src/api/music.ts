import { get } from './index'
import { SearchResult, ArtistInfo} from 'interfaces/music'

interface SearchParams {
  keyword: string,
  type: string,
  page?: number,
  pageSize?: number,
  format?: number
}
export const musicSearch = (params: SearchParams) => get<SearchResult>('https://v1.itooi.cn/netease/search', params)

interface ArtistParams {
  id: number
}
export const getArtistInfo = (params : ArtistParams) => get<ArtistInfo>('https://v1.itooi.cn/netease/artist/info', params)