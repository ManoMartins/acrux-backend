import { getRepository } from 'typeorm';
import Genres from '../models/Genres';

interface IResquest {
  name: string;
}

class CreateGenreService {
  public async execute({ name }: IResquest): Promise<Genres> {
    const genreRepository = getRepository(Genres);

    const findSameName = await genreRepository.findOne({ where: { name } });

    if (findSameName) {
      throw Error('Genre already exists');
    }

    const genre = genreRepository.create({
      name,
    });

    await genreRepository.save(genre);

    return genre;
  }
}

export default CreateGenreService;
