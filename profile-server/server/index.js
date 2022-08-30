const path = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { openid } = require('./modules/openid');
const { SITE_TITLE } = require('./config/variables');
const cors = require('./modules/cors');
const public = require('./modules/public');
const routes = require('./routes');

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.locals ={
	site: {
		title: SITE_TITLE,
	},
};

app.use(morgan('common'));
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(public());

app.use(openid());
app.use(routes);

module.exports = app;