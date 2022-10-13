import { USERS } from '../collections';
import { FS } from '../index';
import { NetworkCode, NetworkReturn } from '../network';

export const getAllUsersHelper = async (): Promise<NetworkReturn> => {
    try {
        const users = [];

        const userDocuments = FS.collection(USERS);

        users.push(userDocuments.listDocuments());
        return {
            code: NetworkCode.OK,
            data: {
                message: `worked bitches`,
                users,
            },
        };
    } catch (e: any) {
        return {
            code: e.code ?? NetworkCode.INTERNAL_SERVER_ERROR,
            data: e.data ?? { message: e.message },
        };
    }
};
