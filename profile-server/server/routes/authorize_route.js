const express = require('express');
const asyncHandler = require('express-async-handler')
const debug = require('debug')('nimbus:routes');
const { EXTENSION_ID } = require('../config/variables');
const { requiresAuth } = require('../modules/openid');
const router = express.Router();

const authorizeRouteHandler = async (req, res) => {
	debug('router.route(/authorize)');
	let accessToken = req.oidc.accessToken;
	if (accessToken.isExpired()) {
		accessToken = await accessToken.refresh();
	}
	const params = {
		extension: EXTENSION_ID,
		nicname: req.oidc.user.nickname,
		name: req.oidc.user.name,
		picture: req.oidc.user.picture,
		sub: req.oidc.user.sub,
		accessToken: {
			token: accessToken.access_token,
			expiresIn: accessToken.expires_in,
		},
		idToken: req.oidc.idToken,
		iat: req.oidc.idTokenClaims.iat,
		exp: req.oidc.idTokenClaims.exp,
	};
	res.render('pages/authorize', params);
};

router.route('/authorize').get(requiresAuth(), asyncHandler(authorizeRouteHandler));

module.exports = router;