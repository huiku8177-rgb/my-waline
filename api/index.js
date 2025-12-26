const Waline = require('@waline/vercel');

module.exports = Waline({
  env: process.env,

  cors: {
    origin: [
      'http://localhost:1313',
      'http://127.0.0.1:1313'
    ],
    credentials: true
  }
});
