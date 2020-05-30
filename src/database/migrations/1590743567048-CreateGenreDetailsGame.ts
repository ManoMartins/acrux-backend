import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateGenreDetailsGame1590743567048
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'details_game_genre',
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
            name: 'genre_id',
            type: 'uuid',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FK_details_game_genre',
            columnNames: ['details_game_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'details_games',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FK_genre',
            columnNames: ['genre_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'genre',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('details_game_genre');
  }
}
