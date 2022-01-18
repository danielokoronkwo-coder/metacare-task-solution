import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { HttpModule } from '@nestjs/axios';
import { SwapiService } from './swapi/swapi.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      HttpModule.register({
      baseURL: 'https://swapi.py4e.com/api',
    }),

  ],
  controllers: [MovieController],
  providers: [MovieService, SwapiService]
})
export class MovieModule {}
