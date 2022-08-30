const express = require('express');
const indexRouteHandler = require('./index_route');
const authorizeRouteHandler = require('./authorize_route');
const refreshRouteHandler = require('./refresh_route');
const notFoundRouteHandler = require('./404');
const router = express.Router();

router.use(authorizeRouteHandler);
router.use(refreshRouteHandler);
router.use(indexRouteHandler);
router.use(notFoundRouteHandler);

module.exports = router;
