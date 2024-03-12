import { PrismaBriefingRepository } from "@/repositories/prisma/prisma-briefing-repository";
import { DeleteBriefingUseCase } from "../delete-briefing-use-case";

export function makeDeleteBriefingUseCase(){
    const briefingRepository = new PrismaBriefingRepository()
    const deleteBriefingUseCase = new DeleteBriefingUseCase(briefingRepository)

    return deleteBriefingUseCase
}