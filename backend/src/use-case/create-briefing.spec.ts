import { beforeEach, describe } from "node:test"
import { expect, it } from "vitest"
import { CreateBriefingUseCase } from "./create-briefing-use-case"
import { InMemoryBriefingUseRepositoryRepository } from "@/repositories/in-memory/in-memory-briefing-repository";
import { BriefingRepository } from "@/repositories/briefing-repository";

let createBriefingRepository: InMemoryBriefingUseRepositoryRepository
let sut: CreateBriefingUseCase

describe('Create briefing Use Case', () => {
    createBriefingRepository = new InMemoryBriefingUseRepositoryRepository()
    sut = new CreateBriefingUseCase(createBriefingRepository)
        

    it('Create briefing', async() => {  
        const {briefing} = await sut.create({
            name: 'Pedro',
            description: 'Mesa de madeira',
            state: 'finalizado'
        })

        expect(briefing.state).toEqual('finalizado')
        expect(briefing.id).toEqual(1)

    })    
})




