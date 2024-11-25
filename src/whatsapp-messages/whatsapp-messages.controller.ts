import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WhatsappMessagesService } from './whatsapp-messages.service';
import { CreateWhatsappMessageDto } from './dto/create-whatsapp-message.dto';
import { UpdateWhatsappMessageDto } from './dto/update-whatsapp-message.dto';

@Controller('whatsapp-messages')
export class WhatsappMessagesController {
  constructor(private readonly whatsappMessagesService: WhatsappMessagesService) {}

  @Post()
  create(@Body() createWhatsappMessageDto: CreateWhatsappMessageDto) {
    return this.whatsappMessagesService.create(createWhatsappMessageDto);
  }

  @Get()
  findAll() {
    return"ok"
    return this.whatsappMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.whatsappMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWhatsappMessageDto: UpdateWhatsappMessageDto) {
    return this.whatsappMessagesService.update(+id, updateWhatsappMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.whatsappMessagesService.remove(+id);
  }
}
