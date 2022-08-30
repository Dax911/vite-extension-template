const express = require('express');
const asyncHandler = require('express-async-handler')
const debug = require('debug')('nimbus:routes');
const { INDEX_REDIRECT } = require('../config/variables');
const router = express.Router();

const indexRouteHandler = async (req, res) => {
	debug('router.route(/)');
	res.redirect(INDEX_REDIRECT);
};

router.route('/').get(asyncHandler(indexRouteHandler));

module.exports = router;