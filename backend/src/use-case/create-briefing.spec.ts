import { describe } from "node:test"
import { expect, it } from "vitest"
import { CreateBriefingUseCase } from "./create-briefing-use-case"

interface Briefing{
    id: number;
    name: string;
    description: string;
    dateCreate: Date;
    state: string;
}


describe('Create briefing Use Case', () => {
    it('Create briefing', async() => {     
        const createBriefing = new CreateBriefingUseCase({
            async create(data): Briefing{
                return{
                    id: 1,
                    name: data.name,
                    description: data.description,
                    dateCreate: new Date(),
                    state: data.state
                }
            }
        });

        const {briefing} = await createBriefing.create({
            name: 'Porta de Madeira',
            description: 'Porta 190x200',
            state: 'finalizado',
        })


        expect(briefing.state).toEqual('finalizado')
    })    
})




