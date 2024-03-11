//imports
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

const PRIVATE_KEY = process.env.PRIVATE_KEY || 'secret';

module.exports = {
    login: async (req, res) => {
        const [, hash] = req.headers.authorization?.split(' ') || [' ',' '];
        const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

        // return res.json(PRIVATE_KEY);

        try {
            // const users = await Users.findAll();
            // return res.json(users);
            if (email && password) {
                const user = await Users.findOne({ where: { email: email, password: password } });
                if (user) {
                    const token = jwt.sign(
                        { user: JSON.stringify(user) },
                        PRIVATE_KEY,
                        { expiresIn: '60m' }
                    );
                    return res.status(200).json({ data: {user, token } });
                }
            }
            return res.status(404).json({ error: 'Invalid email or password' });
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    },
    tokenValidated: async (req, res, next) => {
        const [, token] = req.headers.authorization?.split(' ') || [' ',' '];

        if(!token) return res.status(401).json({ error: 'Token not found' });

        try {
            const payload = jwt.verify(token, PRIVATE_KEY);
            const userIdFromToken = typeof payload.user === 'string' && payload.user;
            const user = await Users.findOne({ where: { id: userIdFromToken } });

            if(!user && !userIdFromToken) return res.status(401).json({ error: 'Invalid token' });

            req.headers['user'] = payload.user;

            return next();
        } catch (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
    }
}