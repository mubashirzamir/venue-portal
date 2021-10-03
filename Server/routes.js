const router = require('express').Router();
const { body } = require('express-validator');
const { register } = require('./controllers/registerController');
const { login } = require('./controllers/loginController');
const { getUser } = require('./controllers/getUserController');

router.post('/api/register', [
    body('name', "The name must be of minimum 3 characters length")
        .notEmpty()
        .escape()
        .trim()
        .isLength({ min: 3 }),
    body('email', "Invalid email address")
        .notEmpty()
        .escape()
        .trim().isEmail(),
    body('password', "The password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], register);


router.post('/api/login', [
    body('email', "Invalid email address")
        .notEmpty()
        .escape()
        .trim().isEmail(),
], login);

router.get('/api/getUser', getUser);

module.exports = router;