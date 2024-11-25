import { IsString } from "class-validator";

export class CreateHuggingchatDto {
    @IsString()
    texto2: string;
}
