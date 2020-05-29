import { Router } from 'express';

import detailsGamesRouter from './detailsGames.routes';
import playableRouter from './playble.routes';

const routes = Router();

routes.use('/', detailsGamesRouter);
routes.use('/playable', playableRouter);

export default routes;
