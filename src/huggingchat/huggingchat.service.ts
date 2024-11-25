import { Injectable } from '@nestjs/common';
import { CreateHuggingchatDto } from './dto/create-huggingchat.dto';
import { UpdateHuggingchatDto } from './dto/update-huggingchat.dto';
import { HfInference, textGeneration } from "@huggingface/inference";

@Injectable()
export class HuggingchatService {
  async create(createHuggingchatDto: CreateHuggingchatDto): Promise<any> {
  const {texto2} = createHuggingchatDto
  const hf =new HfInference("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")
  const out = await hf.textGeneration({
    model: "meta-llama/Llama-3.2-1B",
    inputs: `${texto2}`,
    
  });
  //meta-llama/Llama-3.2-1B
  console.log(out)
  return out
}


  findAll() {
    return `This action returns all huggingchat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} huggingchat`;
  }

  update(id: number, updateHuggingchatDto: UpdateHuggingchatDto) {
    return `This action updates a #${id} huggingchat`;
  }

  remove(id: number) {
    return `This action removes a #${id} huggingchat`;
  }
}
