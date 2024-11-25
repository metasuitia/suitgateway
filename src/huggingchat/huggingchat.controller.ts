import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HuggingchatService } from './huggingchat.service';
import { CreateHuggingchatDto } from './dto/create-huggingchat.dto';
import { UpdateHuggingchatDto } from './dto/update-huggingchat.dto';

@Controller('huggingchat')
export class HuggingchatController {
  constructor(private readonly huggingchatService: HuggingchatService) {}

  @Post()
  create(@Body() createHuggingchatDto: CreateHuggingchatDto) {
    return this.huggingchatService.create(createHuggingchatDto);
  }

  @Get()
  findAll() {
    return this.huggingchatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.huggingchatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHuggingchatDto: UpdateHuggingchatDto) {
    return this.huggingchatService.update(+id, updateHuggingchatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.huggingchatService.remove(+id);
  }
}
