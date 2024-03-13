import { PrismaBriefingRepository } from "@/repositories/prisma/prisma-briefing-repository";
import { CreateBriefingUseCase } from "../create-briefing-use-case";
import { FindByIdBriefingUseCase } from "../find-by-id-use-case";

export function makeFindByIdBriefingUseCase(){
    const briefingRepository = new PrismaBriefingRepository()
    const findByIdBriefingUseCase = new FindByIdBriefingUseCase(briefingRepository)

    return findByIdBriefingUseCase
}