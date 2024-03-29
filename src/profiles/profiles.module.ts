import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { UsersModule } from 'src/users/users.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers: [ProfilesController],
    providers: [ProfilesService],
    imports: [PrismaModule, UsersModule],
})
export class ProfilesModule {}
