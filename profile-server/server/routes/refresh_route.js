const express = require('express');
const asyncHandler = require('express-async-handler')
const debug = require('debug')('nimbus:routes');
const { attemptSilentLogin } = require('../modules/openid');
const router = express.Router();

const refreshRouteHandler = async (req, res) => {
	debug('router.route(/authenticate)');
	if (req.oidc.isAuthenticated()) {
		if (req.oidc.accessToken.isExpired()) {
			try {
				const newToken = await req.oidc.accessToken.refresh();
				if (newToken && newToken.isExpired() === false) {
					res.json({
						accessToken: {
							token: newToken.access_token,
							expiresIn: newToken.expires_in,
						}
					});
					return;
				}
			} catch (err){
				/* do nothing */
			}
		} else {
			res.json({
				accessToken: {
					token: req.oidc.accessToken.access_token,
					expiresIn: req.oidc.accessToken.expires_in,
				}
			});
			return;
		}
	}
	res.status(401).json({ error: 'Unauthorized' });
};

router.route('/refresh').get(attemptSilentLogin(), asyncHandler(refreshRouteHandler));

module.exports = router;