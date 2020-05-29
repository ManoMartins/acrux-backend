import { getRepository } from 'typeorm';

import Playable from '../models/Playable';

interface IRequest {
  name: string;
}

class CreatePlayableService {
  public async execute({ name }: IRequest): Promise<Playable> {
    const playableRepository = getRepository(Playable);

    const findSameName = await playableRepository.findOne({ where: { name } });

    if (findSameName) {
      throw Error('Console already was create');
    }

    const playable = playableRepository.create({
      name,
    });

    await playableRepository.save(playable);

    return playable;
  }
}

export default CreatePlayableService;
