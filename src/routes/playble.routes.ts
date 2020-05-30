import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreatePlayableService from '../services/CreatePlayableService';
import Playable from '../models/Playable';

const playableRouter = Router();

playableRouter.get('/', async (request, response) => {
  const playableRepository = getRepository(Playable);
  const playable = await playableRepository.find();

  return response.json(playable);
});

playableRouter.post('/', async (request, response) => {
  try {
    const { name } = request.body;

    const createPlayable = new CreatePlayableService();

    const playable = await createPlayable.execute({
      name,
    });

    return response.json(playable);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default playableRouter;
