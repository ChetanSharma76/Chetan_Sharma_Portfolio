import setupApp from '../server/index';
// @ts-ignore
import type { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  // Initialize the app cleanly for every serverless request
  const app = await setupApp();
  
  // Pass the request to Express
  // @ts-ignore
  app(req, res);
}