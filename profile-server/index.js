const server = require('./server');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', (err) => {
	process.exit(err ? 1 : 0);
});
