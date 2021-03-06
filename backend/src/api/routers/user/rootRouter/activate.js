import Cryptr from 'cryptr'

export const activateUser = model => (req, res, next) => {
    if (req.body.token === undefined) {
        throw new Error("Require 'token' field");
    }
    if (req.body.token.toString().length < 32) {
        return res.status(200).json({"success": false, "message": 'Invalid token'});
    }
    const secret = req.app.get('config').secrets.crypt;
    const crypt  = new Cryptr(secret);
    const email  = crypt.decrypt(req.body.token);

    model.findOne({
        $or: [
            {'email': email},
            {'pendingEmail': email}
        ]
    })
        .then(user => {
            if (user === null || user.activationToken !== req.body.token) {
                return res.status(200).json({"success": false, "message": 'Invalid token'});
            }
            if (user.pendingEmail === email) {
                user.email        = email;
                user.pendingEmail = null;
            }
            user.activated       = true;
            user.activationToken = null;
            user.save()
                .then(() => res.status(201).json({
                    "success": true,
                    "message": "User activated"
                }))
                .catch(next);
        })
        .catch(next);
};
