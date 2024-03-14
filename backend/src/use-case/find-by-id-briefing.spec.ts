import { describe } from "node:test"
import { beforeEach, expect, it } from "vitest"
import { CreateBriefingUseCase } from "./create-briefing-use-case"
import { InMemoryBriefingUseRepositoryRepository } from "@/repositories/in-memory/in-memory-briefing-repository";
import { FindByIdBriefingUseCase } from "./find-by-id-use-case";

let findByIdBriefingRepository: InMemoryBriefingUseRepositoryRepository
let find: FindByIdBriefingUseCase
let cre: CreateBriefingUseCase


describe('Find by id briefing Use Case', () => {
    beforeEach(() => {
        findByIdBriefingRepository = new InMemoryBriefingUseRepositoryRepository()
        find = new FindByIdBriefingUseCase(findByIdBriefingRepository)
        cre = new CreateBriefingUseCase(findByIdBriefingRepository)
    
    })
    

    it('find by id briefing', async() => {  
        const {briefing} = await cre.create({
            name: 'Pedro',
            description: 'Mesa de madeira',
            state: 'finalizado'
        })

        const existBriefing = await find.search({id : briefing.id})

        expect(briefing).toEqual(existBriefing.briefing);

    })    
})




