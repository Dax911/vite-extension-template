const { auth, requiresAuth, attemptSilentLogin } = require('express-openid-connect');
const { AUTH0, BASE_URL, LOGOUT_REDIRECT } = require('../config/variables');

const openid = () => (
	auth({
		authRequired: false,
		auth0Logout: true,
		baseURL: BASE_URL,
		clientID:  AUTH0.CLIENT_ID,
		issuerBaseURL: AUTH0.BASE_URL,
		clientSecret: AUTH0.CLIENT_SECRET,
		secret: AUTH0.SECRET,
		authorizationParams: {
			scope: 'openid profile email offline_access',
			response_type: 'code',
			audience: AUTH0.AUDIENCE || 'https://api.getACME.com/',
		},
		routes: {
			postLogoutRedirect: LOGOUT_REDIRECT,
			login: false,
		}
	})
);

module.exports = {
	openid,
	requiresAuth,
	attemptSilentLogin,
};
