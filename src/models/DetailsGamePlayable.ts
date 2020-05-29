import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import DetailsGame from './DetailsGame';
import Playable from './Playable';

@Entity('details_game_playable')
class DetailsGamePlayable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  details_game_id: string;

  @Column()
  playable_id: string;

  @ManyToOne(() => DetailsGame)
  @JoinColumn({ name: 'details_game_id' })
  details_games: DetailsGame;

  @ManyToOne(() => Playable)
  @JoinColumn({ name: 'playable_id' })
  playable: Playable;
}

export default DetailsGamePlayable;
