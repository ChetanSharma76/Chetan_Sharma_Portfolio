import setupApp from '../server/index';
import type { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  // 1. Ensure the app is initialized (routes are registered)
  const app = await setupApp();
  
  // 2. Hand over the request to Express
  // @ts-ignore
  app(req, res);
}