import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { userStore } from './userStore';

export type FetchReturn = {
    status: number;
    message: string;
    data?: any;
};

export type IStoreSchema = {};

export const useUserStore = create(
    devtools(
        persist(userStore, {
            name: '',
            getStorage: () => localStorage,
        }),
        {
            name: '',
        }
    )
);
