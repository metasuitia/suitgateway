import { Module } from '@nestjs/common';
import { HuggingchatService } from './huggingchat.service';
import { HuggingchatController } from './huggingchat.controller';

@Module({
  controllers: [HuggingchatController],
  providers: [HuggingchatService],
})
export class HuggingchatModule {}
