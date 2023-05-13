import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ContactModule } from './contract/contract.module';
import { WorkModule } from './work/work.module';
import { UsersOnWorkModule } from './users-on-work/users-on-work.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './utils/roleGuard/roles.gurad';
import { MyJwtGuard } from './auth/guard';
import { ApplicationModule } from './application/application.module';
import { PostJobModule } from './postJob/postJob.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    UserModule,
    NoteModule,
    PrismaModule,
    ContactModule,
    WorkModule,
    UsersOnWorkModule,
    ApplicationModule,
    PostJobModule,
  ],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: MyJwtGuard,
    // },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   // throw new Error('Method not implemented.');
  // }
}
