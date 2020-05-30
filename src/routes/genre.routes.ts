import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateGenreService from '../services/CreateGenreService';
import Genres from '../models/Genres';

const genreRouter = Router();

genreRouter.get('/', async (request, response) => {
  const genreRepository = getRepository(Genres);
  const genre = await genreRepository.find();

  return response.json(genre);
});

genreRouter.post('/', async (request, response) => {
  try {
    const { name } = request.body;

    const createGerne = new CreateGenreService();

    const genre = await createGerne.execute({
      name,
    });

    return response.json(genre);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default genreRouter;
