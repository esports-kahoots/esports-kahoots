import { User } from 'firebase/auth';

export interface IUserState {
    user: User | undefined; // we will flush this out later

    setUser: (_user: any) => void;
}

export const userStore = (set: any, get: () => IUserState): IUserState => ({
    user: undefined,

    setUser: (_user: any) => set({ user: _user }),
});
