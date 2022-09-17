import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: () => ({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'bandapixels',
    password: 'bandapixels',
    database: 'bandapixels',
    dropSchema: true,
    synchronize: true,
    entities: [User],
    subscribers: [],
    migrations: [],
  }),
};
