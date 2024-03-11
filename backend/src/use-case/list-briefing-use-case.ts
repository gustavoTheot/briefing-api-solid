import { BriefingRepository } from "@/repositories/briefing-repository";
import { Briefing } from "@prisma/client";

interface GetBriefingsUseCaseResponse {
    briefings: Briefing[]
  }

export class GetBriefingsUseCase{
    constructor(private briefingRepository: BriefingRepository){}

    async list(){
        const briefings = await this.briefingRepository.getBriefing()
        return briefings;
    }
}