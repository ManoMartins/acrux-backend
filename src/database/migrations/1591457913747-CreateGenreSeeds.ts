import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { GenreSeed } from '../../seeds/genre.seed';
import Genre from '../../entities/Genre';

export default class CreateGenreSeeds1591457913747
  implements MigrationInterface {
  public async up(_: QueryRunner): Promise<void> {
    const genreSeed: any = GenreSeed;

    await getRepository(Genre).save(genreSeed);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
