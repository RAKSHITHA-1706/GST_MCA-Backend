import http from 'http';
import app from './app';
import { config } from './config/index';
import { logger } from './utils/logger';

const server = http.createServer(app);
const port = config.port;

server.listen(port, () => {
  logger.info(`Server listening on http://localhost:${port}`);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled rejection:', reason);
  process.exit(1);
});
