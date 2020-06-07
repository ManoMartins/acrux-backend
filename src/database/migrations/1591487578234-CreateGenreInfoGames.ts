import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateGenreInfoGames1591487578234
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'genre_info_games',
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
            name: 'genre_id',
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
            name: 'FK_Genres',
            columnNames: ['genre_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'genres',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('genre_info_games');
  }
}
