import { getCustomRepository, EntityRepository } from 'typeorm';
import InfoGame from '../entities/InfoGame';
import InfoGamesRepository from '../repositories/InfoGamesRepository';

@EntityRepository(InfoGame)
class ListInfoGamesService {
  public async execute(): Promise<InfoGame[]> {
    const infoGamesRepository = getCustomRepository(InfoGamesRepository);

    const infoGames = await infoGamesRepository.find({
      relations: ['platform_info_games'],
    });

    if (infoGames.length === 0) {
      throw Error('Dont have any game register');
    }

    const serializedInfoGames = infoGames.map(infoGame => {
      return {
        ...infoGame,
        image_url: `http://192.168.1.103:3333/uploads/${infoGame.image}`,
      };
    });

    return serializedInfoGames;
  }
}

export default ListInfoGamesService;
