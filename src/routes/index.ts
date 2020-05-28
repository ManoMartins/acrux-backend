import { Router } from 'express';

import detailsGamesRouter from './detailsGames.routes';

const routes = Router();

routes.use('/', detailsGamesRouter);

export default routes;
