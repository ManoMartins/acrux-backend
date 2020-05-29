import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import DetailsGameRepository from './DetailsGamePlayable';

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
    () => DetailsGameRepository,
    detailsGameRepository => detailsGameRepository.details_games,
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

export default DetailsGame;
