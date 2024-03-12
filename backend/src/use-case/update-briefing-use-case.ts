import { BriefingRepository } from "@/repositories/briefing-repository";
import { BriefingDoesntExist } from "./error/briefing-doesnt-exist";

interface UpdateBriefingUseCaseRequest{
    id: number, 
    data: {
        name?: string,
        description?: string
        state?: 'negociação' | 'finalizado'| 'aprovado'
    }
}

export class UpdateBriefingUseCase{
    constructor(private briefingRepository: BriefingRepository){}

    async update({id, data}: UpdateBriefingUseCaseRequest){
        const verifyExistId = await this.briefingRepository.findById(id)
        if(verifyExistId === null){
            throw new BriefingDoesntExist("Briefing with id does not exist");
        }

        const newData = await this.briefingRepository.update(
            id, data
        )

        return newData
    }
}