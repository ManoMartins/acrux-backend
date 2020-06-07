import { Router } from 'express';

import infoGamesRouter from './infoGames.routes';
import platformRouter from './platform.routes';
import genreRouter from './genre.routes';

const routes = Router();

routes.use('/info-game', infoGamesRouter);
routes.use('/platform', platformRouter);
routes.use('/genre', genreRouter);

export default routes;
