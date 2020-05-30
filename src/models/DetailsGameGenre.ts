import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import DetailsGame from './DetailsGame';
import Genres from './Genres';

@Entity('details_game_genre')
class DetailsGameGenre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  details_game_id: string;

  @Column()
  genre_id: string;

  @ManyToOne(() => DetailsGame)
  @JoinColumn({ name: 'details_game_id' })
  details_games: DetailsGame;

  @ManyToOne(() => Genres)
  @JoinColumn({ name: 'genre_id' })
  genre: Genres;
}

export default DetailsGameGenre;
