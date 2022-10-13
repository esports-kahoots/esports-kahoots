import { APP } from '..';
import { NetworkCode } from '../network';
import { getAllUsersHelper } from './UserHelpers';

// gets all users on the app
APP.get('/users/all', async (req, res) => {
    let userId: any = null;
    try {
        // userId = await getUID(req?.headers?.authorization ?? '')
        if (typeof userId !== 'string') {
            throw userId;
        }

        // logapi('info', req, userId, '/ started')

        // collect data from request
        const data: any = req.body;

        //business logic
        // const result = await getAllUsersHelper();
        // console.log('RESULT', result);
        const result = {
            code: 200,
            message: 'message',
            data: {
                name: 'joe byron',
            },
        };
        // Result of business logic
        if (result.code !== NetworkCode.OK) throw result;

        // logapi('info', req, userId, result.data.message)

        res.status(NetworkCode.OK).send(result.data);
    } catch (e: any) {
        console.error('EEEEE!!!', e);
        // logapi('error', req, userId, new Error(e?.data?.message ?? e?.message))
        res.status(e.code ?? NetworkCode.INTERNAL_SERVER_ERROR).send(
            e.data ?? { message: e.message }
        );
    }
});
