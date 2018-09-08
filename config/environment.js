const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/fuss-app-${env}`;
const secret = process.env.SECRET || 'G6^sk*/>ersTSauV2';

module.exports = { port, dbURI, secret, env };
