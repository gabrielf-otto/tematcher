import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { PlayerModule } from './player/PlayerModule';
import { UserModule } from './user/UserModule';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gabrielf-otto:0tt0_zz36oo@cluster0.bcfnf.mongodb.net/tematcher?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      }
    ),

    UserModule,
    PlayerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
