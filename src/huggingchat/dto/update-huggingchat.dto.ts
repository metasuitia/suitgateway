import { PartialType } from '@nestjs/mapped-types';
import { CreateHuggingchatDto } from './create-huggingchat.dto';

export class UpdateHuggingchatDto extends PartialType(CreateHuggingchatDto) {}
