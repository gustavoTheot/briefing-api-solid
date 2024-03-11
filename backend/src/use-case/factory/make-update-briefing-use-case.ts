import { PrismaBriefingRepository } from "@/repositories/prisma/prisma-briefing-repository";
import { GetBriefingsUseCase } from "../list-briefing-use-case";
import { UpdateBriefingUseCase } from "../update-briefing-use-case";

export function makeUpdateBriefingUseCase(){
    const briefingRepository = new PrismaBriefingRepository()
    const updateBriefingUseCase = new UpdateBriefingUseCase(briefingRepository)

    return updateBriefingUseCase
}