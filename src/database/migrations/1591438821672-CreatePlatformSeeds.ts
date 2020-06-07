import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { PlatformSeed } from '../../seeds/platform.seed';
import Platform from '../../entities/Platform';

export default class CreatePlatformSeeds1591438821672
  implements MigrationInterface {
  public async up(_: QueryRunner): Promise<void> {
    const platformSeed: any = PlatformSeed;

    await getRepository(Platform).save(platformSeed);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
