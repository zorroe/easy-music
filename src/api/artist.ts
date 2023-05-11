import http from "@/utils/request";
import { usePlayerStore } from "@/store";
import pinia from "@/store/store";

const playerStore = usePlayerStore(pinia);

export const getrecommendArtistApi: any = (params: { type: 1 | 2 | 3 | 4 }) => {
  return http({
    url: "/toplist/artist",
    method: "get",
    params,
  });
};

export const getArtistDetailApi: any = (params: any) => {
  return http({
    url: "/artist/detail",
    method: "get",
    params,
  });
};

export const getSongsByArtistIdApi: any = (params: any) => {
  return http({
    url: "/artist/songs",
    method: "get",
    params,
  });
};

export const getArtistAlbumApi: any = (params: any) => {
  return http({
    url: "/artist/album",
    method: "get",
    params,
  });
};

export const getArtistMvApi: any = (params: any) => {
  return http({
    url: "/artist/mv",
    method: "get",
    params,
  });
};

export const playAllByArtistId = async (id: number) => {
  const params = {
    id,
    limit: 1000,
    offset: 0,
  };
  const { songs } = await getSongsByArtistIdApi(params);
  const ids = songs.map((item: any) => item.id);
  playerStore.playMulti(ids);
};
