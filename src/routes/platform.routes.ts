import { Router } from 'express';
import ListPlatformsService from '../services/ListPlatformsService';

const platformRouter = Router();

platformRouter.get('/', async (request, response) => {
  try {
    const listPlatforms = new ListPlatformsService();

    const platforms = await listPlatforms.execute();

    return response.json({ platforms });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default platformRouter;
