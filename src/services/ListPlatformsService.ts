import { getRepository, EntityRepository } from 'typeorm';
import Platform from '../entities/Platform';

@EntityRepository(Platform)
class ListPlatformsService {
  public async execute(): Promise<Platform[]> {
    const platformsRepository = getRepository(Platform);

    const platforms = await platformsRepository.find();

    if (platforms.length === 0) {
      throw Error('Dont have any platform register');
    }

    const serializedPlatforms = platforms.map(platform => {
      return {
        ...platform,
        image_url: `http://localhost:3333/uploads/icons/${platform.image}`,
      };
    });

    return serializedPlatforms;
  }
}

export default ListPlatformsService;
