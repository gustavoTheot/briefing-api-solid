import { BriefingRepository } from "@/repositories/briefing-repository";
import { BriefingDoesntExist } from "./error/briefing-doesnt-exist";
import { Briefing } from "@prisma/client";

interface FindByIdBriefingUseCaseRequest{
    id: number, 
}

interface FindByIdBriefingUseCaseResponse{
    briefing: Briefing, 
}

export class FindByIdBriefingUseCase{
    constructor(private briefingRepository: BriefingRepository){}

    async search({id}: FindByIdBriefingUseCaseRequest): Promise<FindByIdBriefingUseCaseResponse>{
        
        const briefing = await this.briefingRepository.findById(id)

        if(!briefing){
            throw new BriefingDoesntExist("Briefing with id does not exist");
        }

        return {briefing}
        
    }
}