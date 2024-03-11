import { PrismaBriefingRepository } from "@/repositories/prisma/prisma-briefing-repository";
import { CreateBriefingUseCase } from "../create-briefing-use-case";

export function makeCreateBriefingUseCase(){
    const briefingRepository = new PrismaBriefingRepository()
    const createBriefingUseCase = new CreateBriefingUseCase(briefingRepository)

    return createBriefingUseCase
}