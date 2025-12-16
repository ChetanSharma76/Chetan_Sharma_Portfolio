// Notice the .js extension! This is required for ESM.
import setupApp from '../server/index.js'; 

export default async function handler(req: any, res: any) {
  const app = await setupApp();
  app(req, res);
}