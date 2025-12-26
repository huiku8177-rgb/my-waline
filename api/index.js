import { init } from '@waline/vercel';

export default init({
  env: process.env,

  cors: {
    origin: [
      'http://localhost:1313',
      'http://127.0.0.1:1313'
    ],
    credentials: true
  }
});
