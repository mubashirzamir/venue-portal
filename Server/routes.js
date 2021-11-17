const router = require('express').Router();
const { body } = require('express-validator');
const { register } = require('./controllers/registerController');
const { login } = require('./controllers/loginController');
const { getUser } = require('./controllers/getUserController');

const { getReviews } = require('./controllers/venue/getReviewsController')
const { addReview } = require('./controllers/venue/addReviewController')
const { getFeaturedVenues } = require('./controllers/getFeaturedVenuesController')

const { addFeaturedVenue } = require('./controllers/admin/addFeaturedVenueController')
const { removeFeaturedVenue } = require('./controllers/admin/removeFeaturedVenueController')

const { getUsers } = require('./controllers/admin/getUsersController');
const { deleteUser } = require('./controllers/admin/deleteUserController');

const { createVenue } = require('./controllers/manager/createVenueController');
const { updateVenue } = require('./controllers/manager/updateVenueController');
const { deleteVenue } = require('./controllers/manager/deleteVenueController');

const { getVenue } = require('./controllers/venue/getVenueController');
const { getSingleVenue } = require('./controllers/venue/getSingleVenueController');


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


router.post('/api/venue/reviews', getReviews);
router.post('/api/venue/addReview', addReview);
router.get('/api/featuredVenues', getFeaturedVenues);

router.post('/adminAPI/addFeaturedVenue', addFeaturedVenue);
router.post('/adminAPI/removeFeaturedVenue', removeFeaturedVenue);
router.get('/adminAPI/getUsers', getUsers);

router.post('/adminAPI/deleteUser', deleteUser);

router.post('/managerAPI/createVenue', createVenue);
router.post('/managerAPI/updateVenue', updateVenue);
router.post('/managerAPI/deleteVenue', deleteVenue);

router.get('/api/venue/getVenue', getVenue);
router.post('/api/venue/getSingleVenue', getSingleVenue);


module.exports = router;