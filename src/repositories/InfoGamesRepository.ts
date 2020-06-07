import { EntityRepository, Repository } from 'typeorm';

import InfoGame from '../entities/InfoGame';

@EntityRepository(InfoGame)
class InfoGamesRepository extends Repository<InfoGame> {
  public async findByTitle(title: string): Promise<InfoGame | undefined> {
    const findTitle = await this.findOne({
      where: { title },
    });

    return findTitle;
  }
}

export default InfoGamesRepository;
