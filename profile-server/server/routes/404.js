const express = require('express');
const asyncHandler = require('express-async-handler')
const debug = require('debug')('nimbus:routes');
const { INDEX_REDIRECT } = require('../config/variables');
const router = express.Router();

const notFoundRouteHandler = async (req, res) => {
	debug('router.route(/404)');
	res.redirect(`${INDEX_REDIRECT}${req.originalUrl}`);
};

router.route('*').get(asyncHandler(notFoundRouteHandler));

module.exports = router;