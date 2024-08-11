import { DataRegionInterface, RegionIsoName } from "@/dao/covid";
import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";

let  covidModel: RegionIsoName[] = []


export const allRegion = create((set: any) => ({
    isLoading: false,
    regionList: covidModel,
    currentPage: 1,
    totalPages: 1,


    getDataRegion: async () => {
        set({isLoading: true});
        set({regionList: []})
        await axios.get('https://covid-api.com/api/regions').then((res) => {
            if(res.status === 200) {
                set({isLoading: false})
                set({regionList: res.data.data})
            }
        }).catch((err) => {
            toast.error(err.response.data.message ?? "Something went wrong")
        })
    },

    getRegion: async (page: number = 1, perPage: number = 20, order: string = "name", sort: string = "desc") => {
        set({ isLoading: true });

        await axios.get(`https://covid-api.com/api/regions?per_page=${perPage}&order=${order}&sort=${sort}&page=${page}`).then((res) => {
            if (res.status === 200) {
                set({
                    isLoading: false,
                    regionList: res.data.data,
                    currentPage: res.data.current_page,
                    totalPages: res.data.last_page
                });
            }
        }).catch((err) => {
            set({ isLoading: false });
            toast.error(err.response.data.message ?? "Something went wrong");
        });
    }
}))