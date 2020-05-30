import { getCustomRepository } from 'typeorm';
import DetailsGame from '../models/DetailsGame';
import DetailsGamesRepository from '../repositories/DetailsGamesRepository';

interface IRequest {
  details_game_id: string;
}

class ListDetailsGameService {
  public async execute({
    details_game_id,
  }: IRequest): Promise<DetailsGame | undefined> {
    const detailsGamesRepository = getCustomRepository(DetailsGamesRepository);

    const findDetailsGame = await detailsGamesRepository.findOne({
      where: { id: details_game_id },
      relations: ['details_game_playable'],
    });

    if (!findDetailsGame) {
      throw Error("This game don't exists");
    }

    return findDetailsGame;
  }
}

export default ListDetailsGameService;
