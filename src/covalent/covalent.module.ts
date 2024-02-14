import { Module } from '@nestjs/common';
import { CovalentService } from './covalent.service';
import { CovalentController } from './covalent.controller';

@Module({
    controllers: [CovalentService],
    providers: [CovalentController],
})
export class CovalentModule { }