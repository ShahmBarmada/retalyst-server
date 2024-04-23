import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

@Module({
  imports: [
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        driver: PostgreSqlDriver,
        clientUrl: configService.get('DATABASE_URI'),
        timezone: '+02:00',
        forceUtcTimezone: true,
        forceUndefined: true,
        autoLoadEntities: true,
        // entities: ['./dist/database/entities.js'],
        // entitiesTs: ['./src/database/entities.ts'],
        // baseDir: process.cwd(),
        // migrations: {
        //   tableName: 'migrations',
        //   path: process.cwd() + '/migrations',
        // },
      }),
    }),
  ],
})
export class DatabaseModule {}
