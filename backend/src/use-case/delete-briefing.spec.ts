import { describe } from "node:test"
import { beforeEach, expect, it } from "vitest"
import { DeleteBriefingUseCase } from "./delete-briefing-use-case"
import { CreateBriefingUseCase } from "./create-briefing-use-case"
import { InMemoryBriefingUseRepositoryRepository } from "@/repositories/in-memory/in-memory-briefing-repository"

let deleteBriefingRepository: InMemoryBriefingUseRepositoryRepository
let delet: DeleteBriefingUseCase
let cre: CreateBriefingUseCase

describe('Delete briefing Use Case', () => {
    beforeEach(() => {
        deleteBriefingRepository = new  InMemoryBriefingUseRepositoryRepository()
        delet = new DeleteBriefingUseCase(deleteBriefingRepository);
        cre = new CreateBriefingUseCase(deleteBriefingRepository)
    })

    it('Delete briefing', async() => {
        
        const {briefing} = await cre.create({
            name: 'Pedro',
            description: 'Mesa de madeira',
            state: 'finalizado'
        })

        await deleteBriefingRepository.delete(briefing.id)

        const deletedBriefing = await deleteBriefingRepository.findById(briefing.id)

        expect(deletedBriefing).toBeNull();
    })   
    
})