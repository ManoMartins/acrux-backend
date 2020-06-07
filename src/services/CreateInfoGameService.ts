import { getCustomRepository, EntityRepository } from 'typeorm';
import InfoGame from '../entities/InfoGame';
import InfoGamesRepository from '../repositories/InfoGamesRepository';

interface IPlatform {
  platform_id: number;
}

interface IGenre {
  genre_id: number;
}

interface IRequest {
  image: string;
  release: string;
  title: string;
  description: string;
  main_story_hours: number;
  main_story_minutes: number;
  main_extra_hours: number;
  main_extra_minutes: number;
  platform: string;
  genre: string;
}

@EntityRepository(InfoGame)
class CreateInfoGameService {
  public async execute({
    image,
    release,
    title,
    description,
    main_story_hours,
    main_story_minutes,
    main_extra_hours,
    main_extra_minutes,
    platform,
    genre,
  }: IRequest): Promise<InfoGame> {
    const infoGamesRepository = getCustomRepository(InfoGamesRepository);
    const findSameTitle = await infoGamesRepository.findByTitle(title);

    if (findSameTitle) {
      throw Error('This game was created');
    }

    const platform_info_games = platform
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((platformId: number) => {
        return {
          platform_id: platformId,
        };
      });

    const genre_info_games = genre
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((genreId: number) => {
        return {
          genre_id: genreId,
        };
      });

    const infoGame = infoGamesRepository.create({
      image,
      release,
      title,
      description,
      main_story_hours,
      main_story_minutes,
      main_extra_hours,
      main_extra_minutes,
      platform_info_games,
      genre_info_games,
    });

    await infoGamesRepository.save(infoGame);

    return infoGame;
  }
}

export default CreateInfoGameService;
