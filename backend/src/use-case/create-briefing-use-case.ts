import { BriefingRepository } from '@/repositories/briefing-repository'
import { Briefing } from '@prisma/client'

interface CreateBriefingUseCaseRequest {
  name: string
  description: string
  state: 'negociação' | 'finalizado'| 'aprovado'
}

interface CreateBriefingUseCaseResponse {
  briefing: Briefing
}

export class CreateBriefingUseCase {
  constructor(private briefingRepository: BriefingRepository) {}

  async create({
    name, description, state
  }: CreateBriefingUseCaseRequest): Promise<CreateBriefingUseCaseResponse>{
    try{
      const briefing = await this.briefingRepository.create({
        name, description, state
      })
  
      return {briefing}
    }catch(error){
      throw error;
    }
    
  }
}
