import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreatePlatformInfoGames1591442291352
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'platform_info_games',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'info_game_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'platform_id',
            type: 'integer',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FK_InfoGames',
            columnNames: ['info_game_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'info_games',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_Platform',
            columnNames: ['platform_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'platforms',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('platform_info_games');
  }
}
