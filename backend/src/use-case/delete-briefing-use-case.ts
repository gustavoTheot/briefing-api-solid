import { BriefingRepository } from "@/repositories/briefing-repository";
import { BriefingDoesntExist } from "./error/briefing-doesnt-exist";

interface DeleteBriefingUseCaseRequest{
    id: number
}

export class DeleteBriefingUseCase{
    constructor(private briefingRepository: BriefingRepository){}

    async delete({id}: DeleteBriefingUseCaseRequest){
        const verifyExistId = await this.briefingRepository.findById(id)
        if(verifyExistId === null){
            throw new BriefingDoesntExist("Briefing with id does not exists");
        }

        await this.briefingRepository.delete(id)
        
    }
}