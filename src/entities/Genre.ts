import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import GenreInfoGames from './GenreInfoGames';

@Entity('genres')
class Genre {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => GenreInfoGames, genreInfoGames => genreInfoGames.genre_id)
  genre_info_games: GenreInfoGames[];
}

export default Genre;
