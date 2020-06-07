import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';

import InfoGame from './InfoGame';
import Genre from './Genre';

@Entity('genre_info_games')
class GenreInfoGames {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  info_game_id: string;

  @Column()
  genre_id: number;

  @ManyToOne(() => InfoGame)
  @JoinColumn({ name: 'info_game_id' })
  @JoinTable()
  info_game: InfoGame;

  @ManyToOne(() => Genre)
  @JoinColumn({ name: 'genre_id' })
  @JoinTable()
  genre: Genre;
}

export default GenreInfoGames;
