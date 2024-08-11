import { Datum, ReportRegionInterface } from "@/dao/report-covid";
import axios from "axios";
import { toast } from "react-toastify";
import { create } from "zustand";

let reportModel: Datum[] = [];

export const useAllRegionStore = create((set: any) => ({
    isLoading: false,
    regionList: reportModel,
    currentPage: 1,
    totalPages: 20,

    getRegion: async (
        page: number = 1,
        perPage: number = 20,
        order: string = "name",
        sort: string = "desc",
        date: Date,
        q: string = "",
        iso: string = "",
        regionName: string = "",
        regionProvince: string = "",
        cityName: string = ""
    ) => {
        set({ isLoading: true });

        console.log(`dte val --. ${date}`)

        console.log(`querry paramm ==> ${q}`);
        console.log(`iso val --> ${iso}`);
        console.log(`region name val --> ${regionName}`);
        console.log(`region province val --> ${regionProvince}`)
        console.log(`city name val --> ${cityName}`)

        await axios
            .get(
                'https://covid-api.com/api/reports', {
                    params : {
                        date: `${date.getFullYear()}-${date.getMonth().toString().padStart(2,"0")}-${date.getDate().toString().padStart(2, "0")}` ,
                        q: "US Alabama",
                        iso: "USA",
                        region_name: "US",
                        region_province: "Alabama",
                        city_name: "Autauga",
                        per_page: 20
                    }
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    set({
                        isLoading: false,
                        regionList: res.data.data,
                        currentPage: res.data.current_page,
                        totalPages: res.data.last_page,
                    });
                }
            })
            .catch((err) => {
                set({ isLoading: false });
                toast.error(err.response?.data?.message ?? "Something went wrong");
            });
    },
}));
