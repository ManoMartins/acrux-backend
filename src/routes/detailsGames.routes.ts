import { Router } from 'express';
import { format, parseISO } from 'date-fns';

import { getCustomRepository } from 'typeorm';
import DetailsGamesRepository from '../repositories/DetailsGamesRepository';
import CreateDetailsGameService from '../services/CreateDetailsGameService';

const detailsGamesRouter = Router();

detailsGamesRouter.get('/', async (request, response) => {
  const detailsGamesRepository = getCustomRepository(DetailsGamesRepository);
  const detailsGames = await detailsGamesRepository.find();

  return response.json(detailsGames);
});

detailsGamesRouter.post('/', async (request, response) => {
  try {
    const { title, release, main_story, main_extra, playable } = request.body;

    const releaseParsed = format(parseISO(release), 'dd MMMM yyyy');

    const createDetailsGame = new CreateDetailsGameService();

    const detailsGame = await createDetailsGame.execute({
      title,
      release: releaseParsed,
      main_story,
      main_extra,
      playable,
    });

    return response.json(detailsGame);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default detailsGamesRouter;
