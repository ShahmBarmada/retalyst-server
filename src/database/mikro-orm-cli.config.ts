import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

const MikroOrmConfig: Options = {
  driver: PostgreSqlDriver,
  clientUrl: configService.get('DATABASE_URI'),
  entities: ['./dist/database/entities.js'],
  entitiesTs: ['./src/database/entities.ts'],
  baseDir: process.cwd(),
  migrations: {
    tableName: 'migrations',
    path: process.cwd() + '/migrations',
  },
  extensions: [Migrator],
};

export default MikroOrmConfig;
