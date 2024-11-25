import { Module } from '@nestjs/common';
import { WhatsappMessagesModule } from './whatsapp-messages/whatsapp-messages.module';
import { HuggingchatModule } from './huggingchat/huggingchat.module';


@Module({
  imports: [WhatsappMessagesModule,
    //modulo de huggingface sera un propio microservicio
    HuggingchatModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
