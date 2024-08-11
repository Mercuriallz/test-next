import { create } from "zustand";
import axios from "axios";
import { toast } from "react-toastify";
import { AnimeInterface, Attributes, Datum} from "@/dao/anime";

let animeModel: Datum[] = []

export const useJapan = create((set: any, get: any) => ({
  isLoading: false,
  animeList: animeModel,
  

  getAnimeList: async () => {
       set({isLoading: true});
      set({animeList: []})

    await axios.get('https://kitsu.io/api/edge/anime').then((res) => {
      if(res.status === 200) {
        set({isLoading: false})
        set({animeList: res.data.data})

      }
    }).catch((err) => {
      toast.error(err.response.data.message ?? "Something Went Wrong")
    })
  },
}));
