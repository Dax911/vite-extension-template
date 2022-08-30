const PORT = process.env.PORT || 3000;

const EXTENSION_ID = process.env.EXTENSION_ID || "amedjodlnihpffbibiodpakcpnchdpda";

const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

const LOGOUT_REDIRECT = process.env.LOGOUT_REDIRECT || '/';
const INDEX_REDIRECT = process.env.INDEX_REDIRECT || 'https://getACME.com';
const SITE_TITLE = process.env.SITE_TITLE || 'ACME';

const AUTH0 = Object.seal(Object.freeze({
	CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'PLdrRFUNbFQ8WwJMQ95xKGHDhxQptCyF',
	BASE_URL: process.env.AUTH0_BASE_URL || 'https://dev-ffxa3umy.us.auth0.com',
	CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET || 'Po3OLBF5gDH-rU17fruVclXmQxbL16BNjBN8Sz3QusYqbOPJthxBI5C3JRcDm_zi',
	SECRET: process.env.AUTH_SECRET || '0c02ff2cc517ba80496f86d2dbacd781ca9f78da103e56d74420559f5ef1c7ae',
	AUDIENCE: process.env.AUTH0_AUDIENCE || 'https://api.getACME.com/',
}));

module.exports = Object.seal(Object.freeze({
	AUTH0,
	BASE_URL,
	LOGOUT_REDIRECT,
	INDEX_REDIRECT,
	SITE_TITLE,
	PORT,
	EXTENSION_ID,
}));
