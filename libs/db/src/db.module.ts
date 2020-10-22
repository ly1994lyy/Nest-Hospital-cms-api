import { Global, Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:nest-lol", {
      useCreateIndex: true,
      useNewUrlParser:true
    })
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
