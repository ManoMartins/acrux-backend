import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateDetailsGamePlayable1590733284806
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'details_game_playable',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'details_game_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'playable_id',
            type: 'uuid',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FK_Playable',
            columnNames: ['details_game_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'details_games',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_DetailsGames',
            columnNames: ['playable_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'playable',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('details_game_playable');
  }
}
