import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListaModule } from './lista/lista.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "bt6wlwqbvuq1te11lyia-mysql.services.clever-cloud.com",
      "port": 3306,
      "username": "uxgrlw1t2zrmtzcs",
      "password": "uxgrlw1t2zrmtzcs",
      "database": "bt6wlwqbvuq1te11lyia",
      "entities":["dist/**/**.entity{.ts,.js}"],
      "synchronize": true}), 
    ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
