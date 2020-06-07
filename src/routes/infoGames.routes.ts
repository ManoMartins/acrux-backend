import { Router } from 'express';
import { format, parseISO } from 'date-fns';
import multer from 'multer';

import multerConfig from '../config/multer';
import CreateInfoGameService from '../services/CreateInfoGameService';
import ListInfoGamesService from '../services/ListInfoGamesService';
import ListInfoGameByIdService from '../services/ListInfoGameByIdService';

const infoGamesRouter = Router();
const upload = multer(multerConfig);

infoGamesRouter.get('/', async (request, response) => {
  try {
    const listInfoGame = new ListInfoGamesService();

    const infoGames = await listInfoGame.execute();

    return response.json({ infoGames });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

infoGamesRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const listInfoGame = new ListInfoGameByIdService();

    const infoGame = await listInfoGame.execute(id);

    return response.json(infoGame);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

infoGamesRouter.post('/', upload.single('image'), async (request, response) => {
  try {
    const {
      title,
      release,
      description,
      main_story_hours,
      main_story_minutes,
      main_extra_hours,
      main_extra_minutes,
      platform,
      genre,
    } = request.body;

    const releaseParsed = format(parseISO(release), 'dd MMMM yyyy');

    const createInfoGame = new CreateInfoGameService();

    const infoGame = await createInfoGame.execute({
      image: request.file.filename,
      title,
      release: releaseParsed,
      description,
      main_story_hours,
      main_story_minutes,
      main_extra_hours,
      main_extra_minutes,
      platform,
      genre,
    });

    return response.json(infoGame);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default infoGamesRouter;
