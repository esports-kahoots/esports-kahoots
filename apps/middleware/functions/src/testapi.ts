import { APP } from '.';

const userCollection = 'users';

interface User {
    firstName: String;
    lastName: String;
    email: String;
    areaNumber: String;
    department: String;
    id: String;
    contactNumber: String;
}

// Create new user
APP.post('/users', async (req, res) => {
    try {
        const user: User = {
            firstName: req.body['firstName'],
            lastName: req.body['lastName'],
            email: req.body['email'],
            areaNumber: req.body['areaNumber'],
            department: req.body['department'],
            id: req.body['id'],
            contactNumber: req.body['contactNumber'],
        };

        const newDoc = await FS.collection(userCollection).add(user);
        res.status(201).send(`Created a new user: ${newDoc.id}`);
    } catch (error) {
        res.status(400).send(
            `User should cointain firstName, lastName, email, areaNumber, department, id and contactNumber!!!`
        );
    }
});

//Get users
APP.get('/users', async (req, res) => {
    try {
        const userQuerySnapshot = await FS.collection(userCollection).get();
        const users: any[] = [];
        userQuerySnapshot.forEach((doc) => {
            users.push({
                id: doc.id,
                data: doc.data(),
            });
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

//get a single contact
APP.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    FS.collection(userCollection)
        .doc(userId)
        .get()
        .then((user) => {
            if (!user.exists) throw new Error('User not found');
            res.status(200).json({ id: user.id, data: user.data() });
        })
        .catch((error) => res.status(500).send(error));
});

// Delete a user
APP.delete('/users/:userId', (req, res) => {
    FS.collection(userCollection)
        .doc(req.params.userId)
        .delete()
        .then(() => res.status(204).send('Document successfully deleted!'))
        .catch(function (error) {
            res.status(500).send(error);
        });
});

// Update user
APP.put('/users/:userId', async (req, res) => {
    await FS.collection(userCollection)
        .doc(req.params.userId)
        .set(req.body, { merge: true })
        .then(() => res.json({ id: req.params.userId }))
        .catch((error) => res.status(500).send(error));
});
