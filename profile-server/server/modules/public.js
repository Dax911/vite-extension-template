const express = require('express');
const path = require('path');

const public_dir = path.join(__dirname, 'public');

const public = () => (
	express.static(public_dir)
);

module.exports = public;
