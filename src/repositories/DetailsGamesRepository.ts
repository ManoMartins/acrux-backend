import { EntityRepository, Repository } from 'typeorm';

import DetailsGames from '../models/DetailsGame';

@EntityRepository(DetailsGames)
class DetailsGamesRepository extends Repository<DetailsGames> {
  public async findByTitle(title: string): Promise<DetailsGames | undefined> {
    const findTitle = await this.findOne({ where: { title } });

    return findTitle;
  }
}

export default DetailsGamesRepository;
