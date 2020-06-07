import { getRepository, EntityRepository } from 'typeorm';
import Genre from '../entities/Genre';

@EntityRepository(Genre)
class ListGenresService {
  public async execute(): Promise<Genre[]> {
    const genresRepository = getRepository(Genre);

    const genres = await genresRepository.find();

    if (genres.length === 0) {
      throw Error('Dont have any platform register');
    }

    const serializedGenres = genres.map(genre => {
      return {
        ...genre,
        image_url: `http://localhost:3333/uploads/icons/${genre.image}`,
      };
    });

    return serializedGenres;
  }
}

export default ListGenresService;
