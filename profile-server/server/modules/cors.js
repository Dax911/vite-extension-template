const corsMiddleware = require('cors');
const { EXTENSION_ID, BASE_URL } = require('../config/variables');

const allowlist = [
	BASE_URL,
	`chrome-extension://${EXTENSION_ID}`,
];

const corsOptionsDelegate = (req, callback) => {
	const corsOptions = {
		origin: allowlist.indexOf(req.header('Origin')) !== -1,
	};
	callback(null, corsOptions) // callback expects two parameters: error and options
};

const cors = () => (
	corsMiddleware(corsOptionsDelegate)
);

module.exports = cors;
