import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToMany,
} from 'typeorm';
import DetailsGameRepository from './DetailsGamePlayable';

@Entity('playable')
class Playable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    () => DetailsGameRepository,
    detailsGameRepository => detailsGameRepository.playable,
    {
      cascade: true,
      eager: true,
    },
  )
  details_game_playable: DetailsGameRepository[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Playable;
