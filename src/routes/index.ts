import { Router } from 'express';

import detailsGamesRouter from './detailsGames.routes';
import playableRouter from './playble.routes';
import genreRouter from './genre.routes';

const routes = Router();

routes.use('/', detailsGamesRouter);
routes.use('/playable', playableRouter);
routes.use('/genre', genreRouter);

export default routes;
