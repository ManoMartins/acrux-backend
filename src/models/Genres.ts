import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import DetailsGameGenre from './DetailsGameGenre';

@Entity('genre')
class Genres {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    () => DetailsGameGenre,
    detailsGameGenre => detailsGameGenre.genre,
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

export default Genres;
