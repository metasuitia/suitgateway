import { Module } from '@nestjs/common';
import { WhatsappMessagesModule } from './whatsapp-messages/whatsapp-messages.module';

@Module({
  imports: [WhatsappMessagesModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
