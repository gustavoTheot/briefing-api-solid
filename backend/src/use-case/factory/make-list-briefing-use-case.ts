import { PrismaBriefingRepository } from "@/repositories/prisma/prisma-briefing-repository";
import { CreateBriefingUseCase } from "../create-briefing-use-case";
import { GetBriefingsUseCase } from "../list-briefing-use-case";

export function makeListBriefingUseCase(){
    const briefingRepository = new PrismaBriefingRepository()
    const listBriefingUseCase = new GetBriefingsUseCase(briefingRepository)

    return listBriefingUseCase
}