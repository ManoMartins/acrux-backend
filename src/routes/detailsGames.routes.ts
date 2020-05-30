import { Router } from 'express';
import { format, parseISO } from 'date-fns';

import { getCustomRepository } from 'typeorm';
import CreateDetailsGameService from '../services/CreateDetailsGameService';
import ListDetailsGameService from '../services/ListDetailsGameService';
import DetailsGamesRepository from '../repositories/DetailsGamesRepository';

const detailsGamesRouter = Router();

detailsGamesRouter.get('/', async (request, response) => {
  const detailsGamesRepository = getCustomRepository(DetailsGamesRepository);
  const detailsGame = await detailsGamesRepository.find();

  return response.json(detailsGame);
});

detailsGamesRouter.get('/:details_game_id', async (request, response) => {
  try {
    const { details_game_id } = request.params;

    const listDetailsGame = new ListDetailsGameService();

    const detailsGame = await listDetailsGame.execute({
      details_game_id,
    });

    return response.json(detailsGame);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

detailsGamesRouter.post('/', async (request, response) => {
  try {
    const {
      title,
      release,
      main_story,
      main_extra,
      playable,
      genre,
    } = request.body;

    const releaseParsed = format(parseISO(release), 'dd MMMM yyyy');

    const createDetailsGame = new CreateDetailsGameService();

    const detailsGame = await createDetailsGame.execute({
      title,
      release: releaseParsed,
      main_story,
      main_extra,
      playable,
      genre,
    });

    return response.json(detailsGame);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default detailsGamesRouter;
