import http from 'http';
import app from './app';

const HOSTNAME = '127.0.0.1';
const PORT = '5000';

const server = http.createServer(app);
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
