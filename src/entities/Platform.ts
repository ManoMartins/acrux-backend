import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import PlatformInfoGames from './PlatformInfoGames';

@Entity('platforms')
class Platform {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  color: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => PlatformInfoGames,
    platformInfoGames => platformInfoGames.platform,
  )
  platform_info_games: PlatformInfoGames[];
}

export default Platform;
