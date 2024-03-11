import { PrismaBriefingRepository } from "@/repositories/prisma/prisma-briefing-repository";
import { GetBriefingsUseCase } from "../list-briefing-use-case";

export function makeListBriefingUseCase(){
    const briefingRepository = new PrismaBriefingRepository()
    const listBriefingUseCase = new GetBriefingsUseCase(briefingRepository)

    return listBriefingUseCase
}