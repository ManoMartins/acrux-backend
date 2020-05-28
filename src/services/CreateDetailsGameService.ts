import { getCustomRepository } from 'typeorm';

import DetailsGames from '../models/DetailsGame';
import DetailsGamesRepository from '../repositories/DetailsGamesRepository';

interface IRequest {
  title: string;
  release: string;
  main_story: string;
  main_extra: string;
}

class CreateDetailsGameService {
  public async execute({
    title,
    release,
    main_story,
    main_extra,
  }: IRequest): Promise<DetailsGames> {
    const detailsGamesRepository = getCustomRepository(DetailsGamesRepository);
    const findSameTitle = await detailsGamesRepository.findByTitle(title);

    if (findSameTitle) {
      throw Error('This game was created');
    }

    const detailsGame = detailsGamesRepository.create({
      title,
      release,
      main_story,
      main_extra,
    });

    await detailsGamesRepository.save(detailsGame);

    return detailsGame;
  }
}

export default CreateDetailsGameService;
