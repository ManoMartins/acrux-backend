import { getCustomRepository } from 'typeorm';

import DetailsGames from '../models/DetailsGame';
import DetailsGamesRepository from '../repositories/DetailsGamesRepository';

interface IPlayable {
  playable_id: string;
}

interface IGenre {
  genre_id: string;
}

interface IRequest {
  title: string;
  release: string;
  main_story: string;
  main_extra: string;
  playable: IPlayable[];
  genre: IGenre[];
}

class CreateDetailsGameService {
  public async execute({
    title,
    release,
    main_story,
    main_extra,
    playable,
    genre,
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
      details_game_playable: playable,
      details_game_genre: genre,
    });

    await detailsGamesRepository.save(detailsGame);

    return detailsGame;
  }
}

export default CreateDetailsGameService;
