import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';

import InfoGame from './InfoGame';
import Platform from './Platform';

@Entity('platform_info_games')
class PlatformInfoGames {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  info_game_id: string;

  @Column()
  platform_id: number;

  @ManyToOne(() => InfoGame)
  @JoinColumn({ name: 'info_game_id' })
  @JoinTable()
  info_game: InfoGame;

  @ManyToOne(() => Platform)
  @JoinColumn({ name: 'platform_id' })
  @JoinTable()
  platform: Platform;
}

export default PlatformInfoGames;
