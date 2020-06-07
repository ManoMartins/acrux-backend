import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import PlatformInfoGames from './PlatformInfoGames';
import GenreInfoGames from './GenreInfoGames';

@Entity('info_games')
class InfoGame {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  release: string;

  @Column()
  description: string;

  @Column('integer')
  main_story_hours: number;

  @Column('integer')
  main_story_minutes: number;

  @Column('integer')
  main_extra_hours: number;

  @Column('integer')
  main_extra_minutes: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => PlatformInfoGames,
    platformInfoGames => platformInfoGames.info_game,
    { cascade: true },
  )
  platform_info_games: PlatformInfoGames[];

  @OneToMany(() => GenreInfoGames, genreInfoGames => genreInfoGames.info_game, {
    cascade: true,
  })
  genre_info_games: GenreInfoGames[];
}

export default InfoGame;
