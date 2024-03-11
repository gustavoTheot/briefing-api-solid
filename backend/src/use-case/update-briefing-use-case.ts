import { BriefingRepository } from "@/repositories/briefing-repository";
import { Briefing } from "@prisma/client";
import { BriefingDoesntExist } from "./error/briefing-doesnt-exist";

interface UpdateBriefingUseCaseRequest{
    id: number, 
    data: Briefing
}

export class UpdateBriefingUseCase{
    constructor(private briefingRepository: BriefingRepository){}

    async update({id, data}: UpdateBriefingUseCaseRequest){
        const verifyExistId = await this.briefingRepository.findById(id)
        if(verifyExistId === null){
            throw new BriefingDoesntExist();
        }

        const newData = await this.briefingRepository.update(
            id, data
        )

        return newData
    }
}