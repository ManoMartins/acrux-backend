import {
  getCustomRepository,
  EntityRepository,
  getRepository,
  In,
} from 'typeorm';
import InfoGame from '../entities/InfoGame';
import InfoGamesRepository from '../repositories/InfoGamesRepository';
import Platform from '../entities/Platform';
import PlatformInfoGames from '../entities/PlatformInfoGames';
import GenreInfoGames from '../entities/GenreInfoGames';
import Genre from '../entities/Genre';

@EntityRepository(InfoGame)
class ListInfoGameByIdService {
  public async execute(id: string): Promise<InfoGame> {
    const infoGamesRepository = getCustomRepository(InfoGamesRepository);

    const platformRepository = getRepository(Platform);
    const genreRepository = getRepository(Genre);

    const platformInfoGamesRepository = getRepository(PlatformInfoGames);
    const genreInfoGamesRepository = getRepository(GenreInfoGames);

    const platfortInfoGames = await platformInfoGamesRepository.find({
      where: { info_game_id: id },
    });

    const genreInfoGames = await genreInfoGamesRepository.find({
      where: { info_game_id: id },
    });

    const platform_id = platfortInfoGames.map(
      platfortInfoGame => platfortInfoGame.platform_id,
    );

    const genre_id = genreInfoGames.map(
      genreInfoGame => genreInfoGame.genre_id,
    );

    const platform = await platformRepository.find({
      where: { id: In(platform_id) },
      select: ['name'],
    });

    const genre = await genreRepository.find({
      where: { id: In(genre_id) },
      select: ['name'],
    });

    const infoGame = await infoGamesRepository.findOne({
      where: { id },
    });

    if (!infoGame || !genre) {
      throw Error('Not found relations');
    }

    const serializedInfoGame = {
      ...infoGame,
      platform,
      genre,
      image_url: `http://192.168.1.103:3333/uploads/${infoGame.image}`,
    };

    return serializedInfoGame;
  }
}

export default ListInfoGameByIdService;
