import { Router } from 'express';
import ListGenresService from '../services/ListGenresService';

const genreRouter = Router();

genreRouter.get('/', async (request, response) => {
  try {
    const listGenres = new ListGenresService();
    const genre = await listGenres.execute();

    return response.json(genre);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default genreRouter;
