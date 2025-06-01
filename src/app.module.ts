import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CropOrmEntity } from './infrastructure/database/typeorm/entities/crop.orm-entity';
import { FarmOrmEntity } from './infrastructure/database/typeorm/entities/farm.orm-entity';
import { FarmerOrmEntity } from './infrastructure/database/typeorm/entities/farmer.orm-entity';
import { HarvestOrmEntity } from './infrastructure/database/typeorm/entities/harvest.orm-entity';
import { CropRepository } from './infrastructure/database/typeorm/repositories/crop.repository';
import { FarmRepository } from './infrastructure/database/typeorm/repositories/farm.repository';
import { FarmerRepository } from './infrastructure/database/typeorm/repositories/farmer.repository';
import { HarvestRepository } from './infrastructure/database/typeorm/repositories/harvest.repository';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DATABASE_HOST'),
        port: config.get<number>('DATABASE_PORT'),
        username: config.get('DATABASE_USER'),
        password: config.get('DATABASE_PASSWORD'),
        database: config.get('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: true, // ❗ apenas para dev
      }),
    }),
    TypeOrmModule.forFeature([
      FarmerOrmEntity,
      FarmOrmEntity,
      HarvestOrmEntity,
      CropOrmEntity,
    ]),
  ],
  controllers: [],
  providers: [
    FarmerRepository,
    FarmRepository,
    HarvestRepository,
    CropRepository,
  ],
})
export class AppModule {}
