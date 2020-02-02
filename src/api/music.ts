import { get } from './index'

interface ArtistParams {
  id: number
}
export const getArtistInfo = (params : ArtistParams) => get<any>('https://v1.itooi.cn/netease/artist/info', params)