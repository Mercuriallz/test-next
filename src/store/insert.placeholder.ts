// useStore.ts
import { InsertTitle } from '@/dao/InsertData';
import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

interface StoreState {
    data: InsertTitle[];
    addData: (newData: InsertTitle) => void;
}

export const useStore = create<StoreState>((set) => ({
    data: [],
    addData: async (newData) => {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200 || 201) {
            set((state) => ({
                data: [...state.data, response.data],
            }));
            toast.success("Success insert!");
        } else {
            toast.error("Something wrong")
        }
    },
}));
