import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import DetailsGamePlayable from './DetailsGamePlayable';
import DetailsGameGenre from './DetailsGameGenre';

@Entity('details_games')
class DetailsGame {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  release: string;

  @Column()
  main_story: string;

  @Column()
  main_extra: string;

  @OneToMany(
    () => DetailsGamePlayable,
    detailsGamePlayable => detailsGamePlayable.details_games,
    {
      cascade: true,
    },
  )
  details_game_playable: DetailsGamePlayable[];

  @OneToMany(
    () => DetailsGameGenre,
    detailsGameGenre => detailsGameGenre.details_games,
    {
      cascade: true,
    },
  )
  details_game_genre: DetailsGameGenre[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default DetailsGame;
